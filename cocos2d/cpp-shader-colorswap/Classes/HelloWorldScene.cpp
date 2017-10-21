#include "HelloWorldScene.h"
#include "AppMacros.h"

#include <array>
#include <vector>  // std::vector
#include <math.h>  // sqrt

USING_NS_CC;

float RGBtoHue( const cocos2d::Vec3 &RGB )
{
   const float Epsilon = 1e-10f;
   cocos2d::Vec4 P = (RGB.y < RGB.z) ? 
       cocos2d::Vec4(RGB.y, RGB.z, -1.0f, 2.0f/3.0f) :
       cocos2d::Vec4(RGB.y, RGB.z, 0.0f, -1.0f/3.0f);
   cocos2d::Vec4 Q = (RGB.x < P.x) ? 
       cocos2d::Vec4(P.x, P.y, P.w, RGB.x) :
       cocos2d::Vec4(RGB.x, P.y, P.z, P.x);
   float C = Q.x - (Q.w < Q.y ? Q.w : Q.y);
   float H = fabs((Q.w - Q.y) / (6.0f * C + Epsilon) + Q.z);
   return H;
}

cocos2d::Vec3 SwapInfo( const cocos2d::Vec3 &sourceCol, const cocos2d::Vec3 &swapCol, float epsi )
{
  return cocos2d::Vec3( RGBtoHue( sourceCol ), RGBtoHue( swapCol ), epsi );
}

void  HelloWorld::InitSwapInfo( int i, const cocos2d::Color3B &sourceCol, const cocos2d::Color3B &swapCol, float deviation )
{
    mSource[i]    = cocos2d::Vec3( sourceCol.r/255.0, sourceCol.g/255.0, sourceCol.b/255.0 );
    mSwap[i]      = cocos2d::Vec3( swapCol.r/255.0, swapCol.g/255.0, swapCol.b/255.0 );
    mDeviation[i] = deviation;
    mSwapInfo[i]  = SwapInfo( mSource[i], mSwap[i], mDeviation[i] );
}

Scene* HelloWorld::scene()
{
     return HelloWorld::create();
}

unsigned char ClampColor( float colF )
{
  int c = (int)(colF * 255.0f + 0.5f);
  return (unsigned char)(c < 0 ? 0 : ( c > 255 ? 255 : c ));
}

    Texture2D * TextureRadialGradientCreate(
        int            widht,
        int            height,
        const Color4B &startColor,
        const Color4B &endColor,
        float          radius,
        const Vec2    &center,
        float          expand )
    {
        Vec4 sCol( startColor.r / 255.0, startColor.g / 255.0, startColor.b / 255.0, startColor.a / 255.0 );
        Vec4 eCol( endColor.r / 255.0, endColor.g / 255.0, endColor.b / 255.0, endColor.a / 255.0 );
        
        std::vector<unsigned char> plane( widht * height * 4, 0 );
        for ( int y = 0; y < height; ++ y )
        {
            for ( int x = 0; x < widht; ++ x )
            {
                 float dx = x - center.x;
                 float dy = y - center.y;
                 float d = sqrt( dx*dx + dy*dy ) / radius;
                 
                 Vec4 mixCol( 0.0f, 0.0f, 0.0f, 0.0f );
                 if ( expand < 1.0f && d < 1.0f )
                 {
                     float a = ( d - expand ) / ( 1.0 - expand );
                     mixCol = (d <= expand) ? sCol : ( 1.0 - a ) * sCol + a*eCol;
                 }

                 size_t i = ( y * widht + x ) * 4;
                 plane[i+0] = (unsigned char)(mixCol.x * 255.0f);
                 plane[i+1] = (unsigned char)(mixCol.y * 255.0f);
                 plane[i+2] = (unsigned char)(mixCol.z * 255.0f);
                 plane[i+3] = (unsigned char)(mixCol.w * 255.0f);
            }
        }
    
        Texture2D *texture = new Texture2D();
        if ( texture != nullptr )
            texture->initWithData( plane.data(), plane.size() / 4, Texture2D::PixelFormat::RGBA8888, widht, height, cocos2d::Size(widht, height) );
        return texture;
    }


bool HelloWorld::init()
{
    const int cTestCaseHSL = 0;
    const int cTestCaseHSLRGB = 1;
    const int cTestCaseRGB = 2;
    const int cTestCaseGPUCPU = 3;
    const int cTestCaseRTable = 4;
    const int cTestCaseTone = 5;
    const int cTestCaseTone2 = 6;
    const int cTestCaseCPU = 7;
    const int cTestLayerGradShader = 8;
    static int testCase = cTestLayerGradShader;

    const Color4B layer_startColor(179, 232, 184, 89);
    const Color4B layer_endColor(0, 90, 128, 0);
    float layer_expand = 0.0f;
   

    if ( !Scene::init() )  return false;     
    auto visibleSize = Director::getInstance()->getVisibleSize();
    auto origin = Director::getInstance()->getVisibleOrigin();

    auto closeItem = MenuItemImage::create(
                                        "CloseNormal.png",
                                        "CloseSelected.png",
                                        CC_CALLBACK_1(HelloWorld::menuCloseCallback,this));
    
    closeItem->setPosition(origin + Vec2(visibleSize) - Vec2(closeItem->getContentSize() / 2));

    auto menu = Menu::create(closeItem, nullptr);
    menu->setPosition(Vec2::ZERO);
    this->addChild(menu, 1);

    int noOfColors = 11;
    float deviation = 0.02;
    InitSwapInfo(0, Color3B(129, 67, 73), Color3B(79, 99, 62), deviation);
    InitSwapInfo(1, Color3B(144, 82, 84), Color3B(86, 109, 64), deviation);
    InitSwapInfo(2, Color3B(161, 97, 95), Color3B(92, 118, 67), deviation);
    InitSwapInfo(3, Color3B(178, 112, 105), Color3B(99, 128, 69), deviation);
    InitSwapInfo(4, Color3B(195, 126, 116), Color3B(105, 137, 72), deviation);
    InitSwapInfo(5, Color3B(211, 139, 127), Color3B(112, 147, 74), deviation);
    InitSwapInfo(6, Color3B(219, 162, 133), Color3B(132, 164, 96), deviation);
    InitSwapInfo(7, Color3B(228, 185, 141), Color3B(152, 181, 118), deviation);
    InitSwapInfo(8, Color3B(235, 207, 149), Color3B(171, 198, 140), deviation);
    InitSwapInfo(9, Color3B(245, 230, 158), Color3B(191, 215, 161), deviation);
    InitSwapInfo(10, Color3B(251, 255, 166), Color3B(211, 232, 181), deviation);

    cocos2d::Color3B tintColor( 96, 128, 64 ); // e.g yellow

    float test = 4294967296;
    float *pTest = &test;

    double test2 = 4294967295;
    double *pTest2 = &test2;

    
    //std::vector< cocos2d::Color3B >gradBase{ cocos2d::Color3B( 79, 99, 59  ), cocos2d::Color3B( 112, 147, 68 ), cocos2d::Color3B( 211, 232, 181 ) };
    //std::vector< float > x_val{ 0 / 255.0f, 128 / 255.0f, 255 / 255.0f };
    
    std::vector< cocos2d::Color4B >gradBase {
        Color4B( 129, 67, 73, 255 ),
        Color4B( 144, 82, 84, 255 ),
        Color4B( 161, 97, 95, 255 ),
        Color4B( 178, 112, 105, 255 ),
        Color4B( 195, 126, 116, 255 ),
        Color4B( 211, 139, 127, 255 ),
        Color4B( 219, 162, 133, 255 ),
        Color4B( 228, 185, 141, 255 ),
        Color4B( 235, 207, 149, 255 ),
        Color4B( 245, 230, 158, 255 ),
        Color4B( 251, 255, 166, 255 )
    };

    std::vector< float > x_val {
        86,
        101,
        116,
        131,
        146,
        159,
        176,
        193,
        209,
        227,
        244
    };
    for ( int g = 0; g < x_val.size(); ++ g ) {
        x_val[g] = x_val[g] / 255.0f;
    }

    std::array< unsigned char, 256 * 4 > gradPlane;
    size_t x_i = 0;
    for ( int g = 0; g < 256; ++ g )
    {
        float x = g / 255.0;
        if ( x_i < x_val.size()-1 && x >= x_val[x_i] )
          ++ x_i;

        std::array< float, 4 > col;
        if ( x_i == 0 )
        {   
            std::array< float, 4 > col0{ gradBase[0].r / 255.0f, gradBase[0].g / 255.0f, gradBase[0].b / 255.0f, gradBase[0].a / 255.0f };
            col = { col0[0]*x/x_val[0] , col0[1]*x/x_val[0], col0[2]*x/x_val[0], col0[3]*x/x_val[0] };
        }
        else if ( x_i == x_val.size() )
        {
            col = { gradBase.back().r / 255.0f, gradBase.back().g / 255.0f, gradBase.back().b / 255.0f, gradBase.back().a / 255.0f };             
        }
        else
        {
            std::array< float, 4 > col0{ gradBase[x_i-1].r / 255.0f, gradBase[x_i-1].g / 255.0f, gradBase[x_i-1].b / 255.0f, gradBase[x_i-1].a / 255.0f };
            std::array< float, 4 > col1{ gradBase[x_i].r / 255.0f, gradBase[x_i].g / 255.0f, gradBase[x_i].b / 255.0f, gradBase[x_i].a / 255.0f };
            float a = (x - x_val[x_i-1]) / (x_val[x_i] - x_val[x_i-1]);
            col = { col0[0] + (col1[0]-col0[0])*a, col0[1] + (col1[1]-col0[1])*a, col0[2] + (col1[2]-col0[2])*a, col0[3] + (col1[3]-col0[3])*a };
        }

        size_t i = g * 4;
        gradPlane[i+0] = ClampColor(col[0]);
        gradPlane[i+1] = ClampColor(col[1]);
        gradPlane[i+2] = ClampColor(col[2]);
        gradPlane[i+3] = ClampColor(col[3]);
    }

    /*
    x_val.push_back( 1.0f );
    gradBase.push_back( Color3B( 255, 255, 255 ) );
    std::vector< std::array< float, 3 > > alpha;
    for ( int c = 0; c < (int)gradBase.size(); ++c )
    {
      std::array< float, 3 >alphaN{ gradBase[c].r / 255.0f, gradBase[c].g / 255.0f, gradBase[c].b / 255.0f };
      for ( int i = 0; i < c; ++ i )
      {
        alphaN[0] = ( alphaN[0] - alpha[i][0] ) / (x_val[c]-x_val[i]);
        alphaN[1] = ( alphaN[1] - alpha[i][1] ) / (x_val[c]-x_val[i]);
        alphaN[2] = ( alphaN[2] - alpha[i][2] ) / (x_val[c]-x_val[i]);
      }
      alpha.push_back( alphaN );
    }
    std::array< unsigned char, 256 * 4 > gradPlane;
    for ( int g = 0; g < 256; ++ g )
    {
        float x = g / 255.0;
        std::array< float, 3 >col = alpha[0];
        if ( x < x_val[0] )
        {
          col = { col[0]*x/x_val[0] , col[1]*x/x_val[0], col[2]*x/x_val[0] };
        }
        else
        {
            for ( int c = 1; c < (int)gradBase.size(); ++c )
            {
                float w = 1.0f;
                for ( int i = 0; i < c; ++ i )
                    w *= x - x_val[i];
                col = { col[0] + alpha[c][0] * w, col[1] + alpha[c][1] * w, col[2] + alpha[c][2] * w };
            }
        }
        size_t i = g * 4;
        gradPlane[i+0] = ClampColor(col[0]);
        gradPlane[i+1] = ClampColor(col[1]);
        gradPlane[i+2] = ClampColor(col[2]);
        gradPlane[i+3] = 255;
    }
    */
    
    std::string     gradPath = FileUtils::getInstance()->fullPathForFilename("grad.png");
    cocos2d::Image *gradImg  = new Image();
    gradImg->initWithImageFile( gradPath );
    mGradinetTexture = new Texture2D();
    
    static bool createGrad = true;
    if ( createGrad )
    {
        cocos2d::Size contentSize;
        mGradinetTexture->setAliasTexParameters();
        mGradinetTexture->initWithData( gradPlane.data(), gradPlane.size() / 4, Texture2D::PixelFormat::RGBA8888, 256, 1, contentSize );
    }
    else
    {
        mGradinetTexture->initWithImage( gradImg );
    }

    Sprite * sprite = nullptr;

    std::string     imageFile = "Test.png";
    std::string     key       = "my_swap_" + imageFile;
    Texture2D      *texture   = _director->getTextureCache()->getTextureForKey( key );
    if (texture == nullptr && (testCase == cTestCaseGPUCPU || testCase == cTestCaseCPU))
    {
        std::string     fullpath  = FileUtils::getInstance()->fullPathForFilename(imageFile);
        cocos2d::Image *img       = !fullpath.empty() ? new Image() : nullptr;
        if ( img->initWithImageFile(fullpath) &&
             img->getRenderFormat() == Texture2D::PixelFormat::RGBA8888 )
        {
            unsigned char *plane = img->getData();
            for ( int y = 0; y < img->getHeight(); ++ y )
            {
                for ( int x = 0; x < img->getWidth(); ++ x )
                { 
                    size_t i = ( y * img->getWidth() + x ) * 4;
                    unsigned char t = plane[i];
                    for ( int c = 0; c < noOfColors; ++ c )
                    {
                        if ( fabs(mSource[c].x - plane[i+0]/255.0f) < mDeviation[c] &&
                             fabs(mSource[c].y - plane[i+1]/255.0f) < mDeviation[c] &&
                             fabs(mSource[c].z - plane[i+2]/255.0f) < mDeviation[c] )
                        {
                            if( testCase == cTestCaseGPUCPU )
                            {
                                plane[i+3] = (unsigned char)(c+1);
                            }
                            else
                            {
                                plane[i+0] = (unsigned char)(mSwap[c].x*255.0);
                                plane[i+1] = (unsigned char)(mSwap[c].y*255.0);
                                plane[i+2] = (unsigned char)(mSwap[c].z*255.0);
                            }
                        }
                    }
                }
            }
            texture = _director->getTextureCache()->addImage( img, key );
        }
    }
    else if (texture == nullptr && (testCase == cTestLayerGradShader ))
    {
        int w = 600;
        int h = 600;
        float rad = ( w < h ? w : h ) / 2.0f;
        Vec2 cpt( w / 2.0f, h / 2.0f );
        texture = TextureRadialGradientCreate( w, h, layer_startColor, layer_endColor, rad, cpt, layer_expand );
    }
    if ( texture != nullptr )
        sprite = Sprite::createWithTexture( texture );
    
    if ( sprite == nullptr )
    {
      if( testCase == cTestLayerGradShader )
         sprite = Sprite::create("graybig.png");
      else if( testCase == cTestCaseTone || testCase == cTestCaseTone2 )
        sprite = Sprite::create("graybig.png");
      else
        sprite = Sprite::create("Test.png");
    }
    sprite->setPosition(Vec2(visibleSize / 2) + origin);

    Size spriteSize = sprite->getTexture()->getContentSizeInPixels();

    mProgram = new GLProgram();
    if ( testCase == cTestCaseHSL )
      mProgram->initWithFilenames("shader/colorswap.vert", "shader/colorswap.frag");
    else if ( testCase == cTestCaseHSLRGB )
      mProgram->initWithFilenames("shader/colorswap.vert", "shader/colorswap1.frag");
    else if ( testCase == cTestCaseRGB )
      mProgram->initWithFilenames("shader/colorswap.vert", "shader/colorswap2.frag");
    else if ( testCase == cTestCaseGPUCPU )
      mProgram->initWithFilenames("shader/colorswap.vert", "shader/colorswap3.frag");
    else if ( testCase == cTestCaseRTable )
      mProgram->initWithFilenames("shader/colorswap.vert", "shader/colorswap4.frag");
    else if ( testCase == cTestCaseTone )
      mProgram->initWithFilenames("shader/tone.vert", "shader/tone.frag");
    else if ( testCase == cTestCaseTone2 )
      mProgram->initWithFilenames("shader/tone.vert", "shader/tone2.frag");
    else if ( testCase == cTestLayerGradShader )
      mProgram->initWithFilenames("shader/gradlayer.vert", "shader/gradlayer.frag");
    else
    {
      delete mProgram;
      mProgram = nullptr;
    }
    
    if ( mProgram != nullptr )
    {
        mProgram->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_POSITION, GLProgram::VERTEX_ATTRIB_POSITION);
        if ( testCase != cTestCaseTone ||  testCase != cTestCaseTone2 )
          mProgram->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_COLOR, GLProgram::VERTEX_ATTRIB_COLOR);
        mProgram->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_TEX_COORD, GLProgram::VERTEX_ATTRIB_TEX_COORDS);
        mProgram->link();
        mProgram->updateUniforms(); 
        mProgram->use();
        
        GLProgramState* state = GLProgramState::getOrCreateWithGLProgram(mProgram);
        sprite->setGLProgram(mProgram);
        sprite->setGLProgramState(state);
        
       if ( testCase == cTestCaseRTable )
       {
           std::array< unsigned char, 1024 * 4 > swapPlane{ 0 };
           for ( int c = 0; c < noOfColors; ++ c )
           {
               size_t ix = (size_t)( mSource[c].x * 255.0 );
               size_t iy = (size_t)( mSource[c].y * 255.0 / 64.0 );
               size_t i = ( iy * 256 + ix ) * 4;
               i = ix * 4;
               swapPlane[i+0] = (unsigned char)(mSwap[c].x*255.0);
               swapPlane[i+1] = (unsigned char)(mSwap[c].y*255.0);
               swapPlane[i+2] = (unsigned char)(mSwap[c].z*255.0);
               swapPlane[i+3] = 255;
           }
           mSwapTexture = new Texture2D();
           mSwapTexture->setAliasTexParameters();
           cocos2d::Size contentSize;
           mSwapTexture->initWithData( swapPlane.data(), swapPlane.size() / 4, Texture2D::PixelFormat::RGBA8888, 256, 1, contentSize );
       }

        if ( testCase == cTestCaseHSLRGB || testCase == cTestCaseRGB )
        {
            state->setUniformVec3v("u_orig", noOfColors, mSource);
            state->setUniformVec3v("u_swap", noOfColors, mSwap);
            state->setUniformFloatv("u_deviation", noOfColors, mDeviation);
            state->setUniformInt("u_noSwap", noOfColors);
        }
        else if ( testCase == cTestCaseGPUCPU )
        {
            state->setUniformVec3v("u_swap", noOfColors, mSwap);
            state->setUniformInt("u_noSwap", noOfColors);
        }
        else if ( testCase == cTestCaseRTable )
        {
            auto size = sprite->getTexture()->getContentSizeInPixels();
            state->setUniformVec2( "u_spriteSize", Vec2( (float)size.width, (float)size.height ) );
            state->setUniformTexture( "u_swapTexture", mSwapTexture );
        }
        else if( testCase == cTestCaseTone )
        {
          cocos2d::Vec3 tintVal( tintColor.r/255.0f, tintColor.g/255.0f, tintColor.b/255.0f );
          state->setUniformVec3("u_tintColor", tintVal);
        }
        else if( testCase == cTestCaseTone2 )
        {
          state->setUniformTexture("u_texGrad", mGradinetTexture);
        }
        else if ( testCase == cTestCaseHSL ) 
        {
            state->setUniformVec3v("u_swap", noOfColors, mSwapInfo);
        }
        else if ( testCase == cTestLayerGradShader  )
        {
          Vec4 sCol( layer_startColor.r / 255.0, layer_startColor.g / 255.0, layer_startColor.b / 255.0, layer_startColor.a / 255.0 );
          Vec4 eCol( layer_endColor.r / 255.0, layer_endColor.g / 255.0, layer_endColor.b / 255.0, layer_endColor.a / 255.0 );

          Vec2 cpt( spriteSize.width / 2.0f, spriteSize.height / 2.0f );
          float rad = std::min( cpt.x, cpt.y ) / 2.0f;

          cpt = Vec2( 0.5, 0.5 );
          rad = 0.5;

          state->setUniformVec4( "u_startColor", sCol );
          state->setUniformVec4( "u_endColor", eCol );
          state->setUniformFloat( "u_expand", layer_expand );
          state->setUniformVec2( "u_center", cpt );
          state->setUniformFloat( "u_radius", rad );
        }
     }

    this->addChild(sprite);
    
    return true;
}

void HelloWorld::menuCloseCallback(Ref* sender)
{
    Director::getInstance()->end();

#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    exit(0);
#endif
}
