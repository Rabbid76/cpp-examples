#include "BlurScene.h"
#include "PostProcess.hpp"

#include <math.h>

USING_NS_CC;

Scene* BlurScene::scene()
{
    auto scene = BlurScene::create();
    auto layer = BlurLayer::create();
    scene->addChild(layer);
    return scene;
}

void BlurScene::render( Renderer* renderer, const Mat4* eyeTransforms, const Mat4* eyeProjections, unsigned int multiViewCount )
{
  Scene::render( renderer, eyeTransforms, eyeProjections, multiViewCount );
}

// on "init" you need to initialize your instance
bool BlurLayer::init()
{
  if ( !Layer::init() )
    return false;
  //this->_visible = false;

  Size visibleSize = Director::getInstance()->getVisibleSize();
  Vec2 origin = Director::getInstance()->getVisibleOrigin();

	m_gameLayer = Layer::create();
  m_gameLayer->setVisible( false );
  this->addChild(m_gameLayer, 0);

  // blur layer even
	m_blur_PostProcessLayerEven = PostProcess::create("shader/blur_fast2.vert", "shader/blur_fast2.frag");
  m_blur_PostProcessLayerEven->setVisible( false );
	m_blur_PostProcessLayerEven->setAnchorPoint(Point::ZERO);
	m_blur_PostProcessLayerEven->setPosition(Point::ZERO);
	this->addChild(m_blur_PostProcessLayerEven, 1);

  // blur layer odd
  m_blur_PostProcessLayerOdd = PostProcess::create("shader/blur_fast2.vert", "shader/blur_fast2.frag");
  m_blur_PostProcessLayerOdd->setVisible( false );
	m_blur_PostProcessLayerOdd->setAnchorPoint(Point::ZERO);
	m_blur_PostProcessLayerOdd->setPosition(Point::ZERO);
	this->addChild(m_blur_PostProcessLayerOdd, 1);
  
  
	auto closeItem = MenuItemImage::create(
                                           "CloseNormal.png",
                                           "CloseSelected.png",
                                           CC_CALLBACK_1(BlurLayer::menuCloseCallback, this));
    
	closeItem->setPosition(Vec2(origin.x + visibleSize.width - closeItem->getContentSize().width/2 ,
                                origin.y + closeItem->getContentSize().height/2));

    // create menu, it's an autorelease object
    auto menu = Menu::create(closeItem, NULL);
    menu->setPosition(Vec2::ZERO);

  m_gameLayer->addChild(menu, 1);
  
    auto label = Label::createWithTTF("Hello World", "fonts/Marker Felt.ttf", 24);
    
    // position the label on the center of the screen
    label->setPosition(Vec2(origin.x + visibleSize.width/2,
                            origin.y + visibleSize.height - label->getContentSize().height));

	m_gameLayer->addChild(label, 1);

    // add "HelloWorld" splash screen"
    auto sprite = Sprite::create("HelloWorld.png");

    // position the sprite on the center of the screen
    sprite->setPosition(Vec2(visibleSize.width/2 + origin.x, visibleSize.height/2 + origin.y));

	m_gameLayer->addChild(sprite, 0);

	this->scheduleUpdate();
    
  _startTime = std::chrono::high_resolution_clock::now();

    return true;
}


void BlurLayer::menuCloseCallback(Ref* pSender)
{
    Director::getInstance()->end();

#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    exit(0);
#endif
}

void BlurLayer::update(float delta)
{
  Size visibleSize = Director::getInstance()->getVisibleSize();
  std::chrono::high_resolution_clock::time_point currentTime = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double, std::milli> deltaTime = currentTime - _startTime;
  double blurTrigger = (deltaTime.count() / 5000.0);
  blurTrigger = (blurTrigger - (int)blurTrigger ) * 2.0;

  bool even = (m_blurTick % 2) == 0;
  if ( m_blur )
  {
    cocos2d::GLProgramState &blurFaststate1 = m_blur_PostProcessLayerEven->ProgramState();
    blurFaststate1.setUniformVec2( "u_texelOffset", Vec2( 1.0f/visibleSize.width, 1.0f/visibleSize.height ) );
    cocos2d::GLProgramState &blurFaststate2 = m_blur_PostProcessLayerOdd->ProgramState();
    blurFaststate2.setUniformVec2( "u_texelOffset", Vec2( -1.0f/visibleSize.width, -1.0f/visibleSize.height ) );
      
    if ( m_blurTick == 0 )
    {
      m_gameLayer->setVisible( true );
      m_blur_PostProcessLayerEven->draw(m_gameLayer);
    }
    else if ( even )
    {
      m_blur_PostProcessLayerEven->draw(m_blur_PostProcessLayerOdd);
    }
    else
    {
      m_blur_PostProcessLayerOdd->draw(m_blur_PostProcessLayerEven);
    }
    ++m_blurTick;
  }

  m_blur = blurTrigger < 1.0;
  if ( m_blur == false )
    m_blurTick = 0;
  
  m_gameLayer->setVisible( !m_blur );
  m_blur_PostProcessLayerEven->setVisible( m_blur && even );
  m_blur_PostProcessLayerOdd->setVisible( m_blur && !even );
}
