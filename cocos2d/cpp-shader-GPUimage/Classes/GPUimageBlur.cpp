#include "GPUimageBlur.h"
#include "PostProcess.h"
#include "PostProcessShader.h"

#include <math.h>

// GPUImage
// https://github.com/BradLarson/GPUImage/blob/master/framework/Source/GPUImageGaussianBlurFilter.m#L41
// https://github.com/BradLarson/GPUImage2/blob/master/framework/Source/Operations/GaussianBlur.swift#L75
// https://github.com/wangyijin/GPUImage-x/blob/master/GPUImage-x/proj.iOS/GPUImage-x/GPUImage-x/filter/GaussianBlurMonoFilter.cpp


// demo
// https://media.giphy.com/media/l1J9Nnp0jDFQwGonu/source.mov
// https://media.giphy.com/media/3ov9jUMsVIpukMwvFm/giphy.gif 


// resource
// https://github.com/KAMIKAZEUA/RenderTextureBlur

USING_NS_CC;

Scene* GPUimageBlur::createScene()
{
    auto scene = Scene::create();
    auto layer = GPUimageBlur::create();
    scene->addChild(layer);
    return scene;
}

// on "init" you need to initialize your instance
bool GPUimageBlur::init()
{
  if ( !Layer::init() )
    return false;

  Size visibleSize = Director::getInstance()->getVisibleSize();
  Vec2 origin = Director::getInstance()->getVisibleOrigin();

	m_gameLayer = Layer::create();
	this->addChild(m_gameLayer, 0);

  m_optimized  = false;
  m_steps      = 30;
  m_maxSigma   = 10.0;
  m_stride     = 1;
  m_linear     = false;
  m_downScaled = false;
  
  Size layerSize = visibleSize;
  Size layerSize1 = layerSize;
  Size layerSize2 = layerSize;
  if ( m_downScaled )
  {
    layerSize1.width *= 0.5f;
    layerSize1.height *= 0.5f;
    layerSize2.width *= 0.5f;
    layerSize2.height *= 0.5f;
  }
  
  //const char * vertShader = "shader/default.vert";
  //const char * fragShader = "shader/default.frag";

  // determine hardware limitation for radius, becaus of maximum varying vectors
  // number of texture coordinates * 2 (vec2)
  GLint maxVarying;
  glGetIntegerv( GL_MAX_VARYING_VECTORS, &maxVarying ); 
  // the limit is:
  //     vec4:  maxVarying
  //     vec2:  2 * maxVarying
  //     float: 4 * maxVarying
  int maxRadius = 0;
  if ( m_optimized )
  {
    // int numberOfOptimizedOffsets = fmin(radius / 2 + (radius % 2), 7);
    // varying vec2 blurCoordinates[ numberOfOptimizedOffsets * 2 + 1 ];
    maxRadius = maxVarying-1;
  }
  else
  {
    // varying vec2 blurCoordinates[ radius * 2 + 1 ];
    maxRadius = (maxVarying/2) - 1;
  }

  for ( int i = 0; i < m_steps; ++ i )
  {
    double sigma = 1.0 + ( m_maxSigma - 1.0 ) * (double)i / (double)( m_steps - 1 );
    
    // Calculate the number of pixels to sample from by setting a bottom limit for the contribution of the outermost pixel
    float minimumWeightToFindEdgeOfSamplingArea = 1.0/256.0;
    int calculatedSampleRadius = (int)(floor(sqrt(-2.0 * pow(sigma, 2.0) * log(minimumWeightToFindEdgeOfSamplingArea * sqrt(2.0 * M_PI * pow(sigma, 2.0))) )));
    calculatedSampleRadius += calculatedSampleRadius % 2; // There's nothing to gain from handling odd radius sizes, due to the optimizations I use
    
    int radius = calculatedSampleRadius;

    // restrict radius by maximum varying vectors
    if ( radius > maxRadius )
      radius = maxRadius;

    std::string vertShader1, vertShader2, fragShader;
    if ( m_optimized )
    {
      vertShader1 = vertShader2 = GenerateOptimizedVertexShaderString( radius, sigma );
      fragShader = GenerateOptimizedFragmentShaderString( radius, sigma );
    }
    else
    {
      vertShader1 = GenerateVertexShaderString( m_linear && !m_downScaled, radius, sigma );
      vertShader2 = GenerateVertexShaderString( m_linear, radius, sigma );
      fragShader = GenerateFragmentShaderString( radius, sigma );
    }

    m_blurShader1.push_back( PostProcessShader() );
    m_blurShader1.back().init( false, vertShader1, fragShader );
    m_blurShader2.push_back( PostProcessShader() );
    m_blurShader2.back().init( false, vertShader2, fragShader );
  }

  m_blurPass1 = PostProcess::create( m_linear, layerSize1, m_blurShader1.back() );
  m_blurPass1->setVisible( false );
  m_blurPass1->setAnchorPoint(Point::ZERO);
	m_blurPass1->setPosition(Point::ZERO);
  this->addChild(m_blurPass1, 1);

  m_blurPass2 = PostProcess::create( m_linear, layerSize2, m_blurShader2.back() );
  m_blurPass2->setVisible( false );
  m_blurPass2->setAnchorPoint(Point::ZERO);
	m_blurPass2->setPosition(Point::ZERO);
  this->addChild(m_blurPass2, 2);

	auto closeItem = MenuItemImage::create("CloseNormal.png", "CloseSelected.png", CC_CALLBACK_1(GPUimageBlur::menuCloseCallback, this));
	closeItem->setPosition(Vec2(origin.x + visibleSize.width - closeItem->getContentSize().width/2, origin.y + closeItem->getContentSize().height/2));

    // create menu, it's an autorelease object
    auto menu = Menu::create(closeItem, NULL);
    menu->setPosition(Vec2::ZERO);

  m_gameLayer->addChild(menu, 1);
  
    auto label = Label::createWithTTF("Hello World", "fonts/Marker Felt.ttf", 24);
    label->setPosition(Vec2(origin.x + visibleSize.width/2, origin.y + visibleSize.height - label->getContentSize().height));

	m_gameLayer->addChild(label, 1);

    // add "HelloWorld" splash screen"
    auto sprite = Sprite::create("HelloWorld.png");
    sprite->setPosition(Vec2(visibleSize.width/2 + origin.x, visibleSize.height/2 + origin.y));

	m_gameLayer->addChild(sprite, 0);

	this->scheduleUpdate();
    
  _startTime = std::chrono::high_resolution_clock::now();

    return true;
}


void GPUimageBlur::menuCloseCallback(Ref* pSender)
{
    Director::getInstance()->end();

#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    exit(0);
#endif
}

void GPUimageBlur::update(float delta)
{
  static bool blur = true;
  
  m_gameLayer->setVisible( !blur );
  m_blurPass1->setVisible( false );
  m_blurPass2->setVisible( blur );

  if ( blur == false )
    return;

  Size visibleSize = Director::getInstance()->getVisibleSize();
  std::chrono::high_resolution_clock::time_point currentTime = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double, std::milli> deltaTime = currentTime - _startTime;
  double blurStrength = (deltaTime.count() / 3000.0);
  blurStrength = (blurStrength - (int)blurStrength ) * 2.0;
  blurStrength = (blurStrength) > 1.0 ? (2.0 - blurStrength) : blurStrength;

  int blurShaderInx = (int)( blurStrength * (int)(m_blurShader1.size()-1) + 0.5 );
  m_blurPass1->changeShader( m_blurShader1[blurShaderInx] );
  m_blurPass2->changeShader( m_blurShader2[blurShaderInx] );

  // blur pass 1
  auto size1 = m_blurPass1->Size();
  if ( blurShaderInx > 0 )
  {
    cocos2d::GLProgramState &pass1state = m_blurPass1->ProgramState();
    pass1state.setUniformVec2( "u_texelOffset", Vec2( float( m_stride ) / size1.width, 0.0f ) ); 
  }
  m_gameLayer->setVisible( true );
  if ( m_downScaled )
  {
    m_gameLayer->setScale( 0.5f );
    m_gameLayer->setPosition( -size1.width * 0.5f, -size1.height * 0.5f );
  }
  m_blurPass1->draw( m_gameLayer );
  if ( m_downScaled )
  {
    m_gameLayer->setScale( 1.0f );
    m_gameLayer->setPosition( 0.0f, 0.0f );
  }
  m_gameLayer->setVisible( false );

  // blur pass 2
  auto size2 = m_blurPass1->Size();
  if ( blurShaderInx > 0 )
  {
    cocos2d::GLProgramState &pass2state = m_blurPass2->ProgramState();
    auto size = m_blurPass2->Size();
    pass2state.setUniformVec2( "u_texelOffset", Vec2( 0.0f, float( m_stride ) / size1.height ) );
  }
  m_blurPass1->setVisible( true );
  if ( m_downScaled )
    m_blurPass2->setScale( 1.0f );
  m_blurPass2->draw( m_blurPass1 );
  m_blurPass1->setVisible( false );
  if ( m_downScaled )
    m_blurPass2->setScale( sqrt(1.0f/0.5f) );
}


std::string GPUimageBlur::GenerateVertexShaderString( bool linearShift, int radius, float sigma )
{
    if (radius < 1 || sigma <= 0.0)
    {
        std::stringstream strStr;
        strStr << "#ifdef GL_ES\n";
        strStr << "precision mediump float;\n";
        strStr << "#endif\n";
        strStr << "attribute vec4 a_position;\n";
        strStr << "attribute vec4 a_texCoord;\n";
        strStr << "varying vec2 texCoord;\n";
        strStr << "void main()\n";
        strStr << "{\n";
        strStr << "  gl_Position = CC_MVPMatrix * a_position;\n";
        strStr << "  texCoord = a_texCoord.xy;\n";
        strStr << "}\n";
        return strStr.str();
    }

    std::stringstream strStr;
    strStr << "#ifdef GL_ES\n";
    strStr << "precision mediump float;\n";
    strStr << "#endif\n";
    strStr << "attribute vec4 a_position;\n";
    strStr << "attribute vec4 a_texCoord;\n";
    strStr << "uniform vec2 u_texelOffset;\n";
    strStr << "varying vec2 blurCoordinates[" << radius * 2 + 1 << "];\n";
    strStr << "void main()\n";
    strStr << "{\n";
    strStr << "  gl_Position = CC_MVPMatrix * a_position;\n";
    for (int i = 0; i < radius * 2 + 1; ++i)
    {
        int offsetFromCenter = i - radius;
        float offsetLinear = ( offsetFromCenter < 0 ) ? ( (float)offsetFromCenter + 0.5f ) : ( (float)offsetFromCenter - 0.5f );
        if (offsetFromCenter == 0)
            strStr << "  blurCoordinates[" << i << "] = a_texCoord.xy;\n";
        else if ( linearShift )
           strStr << "  blurCoordinates[" << i << "] = a_texCoord.xy + u_texelOffset * " << offsetLinear << ";\n";
        else
            strStr << "  blurCoordinates[" << i << "] = a_texCoord.xy + u_texelOffset * float(" << offsetFromCenter << ");\n";
    }
    strStr << "}\n";
    return strStr.str();
}


std::string GPUimageBlur::GenerateFragmentShaderString( int radius, float sigma )
{
    if (radius < 1 || sigma <= 0.0)
    {
        std::stringstream strStr;
        strStr << "#ifdef GL_ES\n";
        strStr << "precision mediump float;\n";
        strStr << "#endif\n";
        strStr << "varying vec2 texCoord;\n";
        strStr << "void main()\n";
        strStr << "{\n";
        strStr << "  gl_FragColor = texture2D(CC_Texture0, texCoord);\n";
        strStr << "}\n";
        return strStr.str();
    }

    std::vector<float> standardGaussianWeights(radius + 1);
    float sumOfWeights = 0.0;
    for (int i = 0; i < radius + 1; ++i)
    {
        standardGaussianWeights[i] = (1.0 / sqrt(2.0 * M_PI * pow(sigma, 2.0))) * exp(-pow(i, 2.0) / (2.0 * pow(sigma, 2.0)));
        if (i == 0)
            sumOfWeights += standardGaussianWeights[i];
        else
            sumOfWeights += 2.0 * standardGaussianWeights[i];
    }
    for (int i = 0; i < radius + 1; ++i)
        standardGaussianWeights[i] = standardGaussianWeights[i] / sumOfWeights;

    std::stringstream strStr;
    strStr << "#ifdef GL_ES\n";
    strStr << "precision mediump float;\n";
    strStr << "#endif\n";
    strStr << "varying vec2 blurCoordinates[" << radius * 2 + 1 << "];\n";
    strStr << "void main()\n";
    strStr << "{\n";
    strStr << "  gl_FragColor = vec4(0.0);\n";
    for (int i = 0; i < radius * 2 + 1; ++i)
    {
        int offsetFromCenter = i - radius;
        strStr << "  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[" << i << "]) * " << standardGaussianWeights[abs(offsetFromCenter)] << ";\n";
    }
    strStr << "}\n";
    return strStr.str();
}


std::string GPUimageBlur::GenerateOptimizedVertexShaderString( int radius, float sigma )
{
    if (radius < 1 || sigma <= 0.0)
    {
        std::stringstream strStr;
        strStr << "#ifdef GL_ES\n";
        strStr << "precision mediump float;\n";
        strStr << "#endif\n";
        strStr << "attribute vec4 a_position;\n";
        strStr << "attribute vec4 a_texCoord;\n";
        strStr << "varying vec2 texCoord;\n";
        strStr << "void main()\n";
        strStr << "{\n";
        strStr << "  gl_Position = CC_MVPMatrix * a_position;\n";
        strStr << "  texCoord = a_texCoord.xy;\n";
        strStr << "}\n";
        return strStr.str();
    }

    // 1. generate the normal Gaussian weights for a given sigma
    std::vector<float> standardGaussianWeights(radius + 2);
    float sumOfWeights = 0.0;
    for (int i = 0; i < radius + 1; ++i)
    {
        standardGaussianWeights[i] = (1.0 / sqrt(2.0 * M_PI * pow(sigma, 2.0))) * exp(-pow(i, 2.0) / (2.0 * pow(sigma, 2.0)));
        if (i == 0)
            sumOfWeights += standardGaussianWeights[i];
        else
            sumOfWeights += 2.0 * standardGaussianWeights[i];
    }
    
    // 2. normalize these weights to prevent the clipping of the Gaussian curve at the end of the discrete samples from reducing luminance
    for (int i = 0; i < radius + 1; ++i)
    {
        standardGaussianWeights[i] = standardGaussianWeights[i] / sumOfWeights;
    }
    
    // 3. From these weights we calculate the offsets to read interpolated values from
    int numberOfOptimizedOffsets = fmin(radius / 2 + (radius % 2), 7);
    std::vector<float> optimizedGaussianOffsets(numberOfOptimizedOffsets);
    
    for (int i = 0; i < numberOfOptimizedOffsets; ++i)
    {
        GLfloat firstWeight = standardGaussianWeights[i * 2 + 1];
        GLfloat secondWeight = standardGaussianWeights[i * 2 + 2];
        
        GLfloat optimizedWeight = firstWeight + secondWeight;
        
        optimizedGaussianOffsets[i] = (firstWeight * (i * 2 + 1) + secondWeight * (i * 2 + 2)) / optimizedWeight;
    }
    //if ( linear )
    //  optimizedGaussianOffsets.back() -= 0.5f;

    std::stringstream strStr;
    strStr << "#ifdef GL_ES\n";
    strStr << "precision mediump float;\n";
    strStr << "#endif\n";
    strStr << "attribute vec4 a_position;\n";
    strStr << "attribute vec4 a_texCoord;\n";
    strStr << "uniform vec2 u_texelOffset;\n";
    strStr << "varying vec2 blurCoordinates[" << numberOfOptimizedOffsets * 2 + 1 << "];\n";
    strStr << "void main()\n";
    strStr << "{\n";
    strStr << "  gl_Position = CC_MVPMatrix * a_position;\n";
    strStr << "  blurCoordinates[0] = a_texCoord.xy;\n";
    for (int i = 0; i < numberOfOptimizedOffsets; ++i)
    {
      strStr << "blurCoordinates[" << i * 2 + 1 << "] = a_texCoord.xy + u_texelOffset * float(" << optimizedGaussianOffsets[i] << ");\n";
      strStr << "blurCoordinates[" << i * 2 + 2 << "] = a_texCoord.xy - u_texelOffset * float(" << optimizedGaussianOffsets[i] << ");\n";
    }
    strStr << "}\n";
    return strStr.str();
}


std::string GPUimageBlur::GenerateOptimizedFragmentShaderString( int radius, float sigma )
{
    if (radius < 1 || sigma <= 0.0)
    {
        std::stringstream strStr;
        strStr << "#ifdef GL_ES\n";
        strStr << "precision mediump float;\n";
        strStr << "#endif\n";
        strStr << "varying vec2 texCoord;\n";
        strStr << "void main()\n";
        strStr << "{\n";
        strStr << "  gl_FragColor = texture2D(CC_Texture0, texCoord);\n";
        strStr << "}\n";
        return strStr.str();
    }

    // 1. generate the normal Gaussian weights for a given sigma
    std::vector<float> standardGaussianWeights(radius + 2);
    float sumOfWeights = 0.0;
    for (int i = 0; i < radius + 1; ++i)
    {
        standardGaussianWeights[i] = (1.0 / sqrt(2.0 * M_PI * pow(sigma, 2.0))) * exp(-pow(i, 2.0) / (2.0 * pow(sigma, 2.0)));
        if (i == 0)
            sumOfWeights += standardGaussianWeights[i];
        else
            sumOfWeights += 2.0 * standardGaussianWeights[i];
    }
    
    // 2. normalize these weights to prevent the clipping of the Gaussian curve at the end of the discrete samples from reducing luminance
    for (int i = 0; i < radius + 1; ++i)
    {
        standardGaussianWeights[i] = standardGaussianWeights[i] / sumOfWeights;
    }
    
    // 3. From these weights we calculate the offsets to read interpolated values from
    int trueNumberOfOptimizedOffsets = radius / 2 + (radius % 2);
    int numberOfOptimizedOffsets = fmin(trueNumberOfOptimizedOffsets, 7);

    std::stringstream strStr;
    strStr << "#ifdef GL_ES\n";
    strStr << "precision mediump float;\n";
    strStr << "#endif\n";
    strStr << "varying vec2 blurCoordinates[" << numberOfOptimizedOffsets * 2 + 1 << "];\n";
    strStr << "uniform vec2 u_texelOffset;\n";
    strStr << "void main()\n";
    strStr << "{\n";
    strStr << "  gl_FragColor = vec4(0.0);\n";
    strStr << "  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * " << standardGaussianWeights[0] << ";\n";
    for (int i = 0; i < numberOfOptimizedOffsets; ++i)
    {
        float firstWeight = standardGaussianWeights[i * 2 + 1];
        float secondWeight = standardGaussianWeights[i * 2 + 2];
        float optimizedWeight = firstWeight + secondWeight;

        strStr << "  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[" << i * 2 + 1 << "]) * " << optimizedWeight << ";\n";
        strStr << "  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[" << i * 2 + 2 << "]) * " << optimizedWeight << ";\n";
    }
    // If the number of required samples exceeds the amount we can pass in via varyings, we have to do dependent texture reads in the fragment shader
    if (trueNumberOfOptimizedOffsets > numberOfOptimizedOffsets)
    {
        for (int i = numberOfOptimizedOffsets; i < trueNumberOfOptimizedOffsets; i++)
        {
            float firstWeight = standardGaussianWeights[i * 2 + 1];
            float secondWeight = standardGaussianWeights[i * 2 + 2];
            
            float optimizedWeight = firstWeight + secondWeight;
            float optimizedOffset = (firstWeight * (i * 2 + 1) + secondWeight * (i * 2 + 2)) / optimizedWeight;
            
            strStr << "  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + u_texelOffset * " << optimizedOffset << ") * " << optimizedWeight << ";\n";
            strStr << "  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - u_texelOffset * " << optimizedOffset << ") * " << optimizedWeight << ";\n";
        }
    }
    strStr << "}\n";
    return strStr.str();
}
