#include "HelloWorldScene.h"
#include "PostProcess.hpp"

#include <math.h>

USING_NS_CC;

Scene* HelloWorld::createScene()
{
    // 'scene' is an autorelease object
    auto scene = Scene::create();
    
    // 'layer' is an autorelease object
    auto layer = HelloWorld::create();

    // add layer as a child to scene
    scene->addChild(layer);

    // return the scene
    return scene;
}

// on "init" you need to initialize your instance
bool HelloWorld::init()
{
  if ( !Layer::init() )
    return false;

  m_blurFast = true;
    
  Size visibleSize = Director::getInstance()->getVisibleSize();
  Vec2 origin = Director::getInstance()->getVisibleOrigin();

	m_gameLayer = Layer::create();
	this->addChild(m_gameLayer, 0);

  if ( m_blurFast )
  {
    // blur fast layer
	  m_blurFast_PostProcessLayer = PostProcess::create("shader/blur_fast.vert", "shader/blur_fast.frag");
	  m_blurFast_PostProcessLayer->setAnchorPoint(Point::ZERO);
	  m_blurFast_PostProcessLayer->setPosition(Point::ZERO);
	  this->addChild(m_blurFast_PostProcessLayer, 1);
  }
  else
  {
    // blur X layer
	  m_blurX_PostProcessLayer = PostProcess::create("shader/blur.vert", "shader/blur.frag");
	  m_blurX_PostProcessLayer->setAnchorPoint(Point::ZERO);
	  m_blurX_PostProcessLayer->setPosition(Point::ZERO);
	  this->addChild(m_blurX_PostProcessLayer, 1);

    // blur y layer
	  m_blurY_PostProcessLayer = PostProcess::create("shader/blur.vert", "shader/blur.frag");
	  m_blurY_PostProcessLayer->setAnchorPoint(Point::ZERO);
	  m_blurY_PostProcessLayer->setPosition(Point::ZERO);
	  this->addChild(m_blurY_PostProcessLayer, 2);
  }

	auto closeItem = MenuItemImage::create(
                                           "CloseNormal.png",
                                           "CloseSelected.png",
                                           CC_CALLBACK_1(HelloWorld::menuCloseCallback, this));
    
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


void HelloWorld::menuCloseCallback(Ref* pSender)
{
    Director::getInstance()->end();

#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    exit(0);
#endif
}

void HelloWorld::update(float delta)
{
  static bool blur = true;
  if ( blur == false )
    return;

  Size visibleSize = Director::getInstance()->getVisibleSize();
  std::chrono::high_resolution_clock::time_point currentTime = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double, std::milli> deltaTime = currentTime - _startTime;
  double blurStrength = (deltaTime.count() / 3000.0);
  blurStrength = (blurStrength - (int)blurStrength ) * 2.0;
  blurStrength = (blurStrength) > 1.0 ? (2.0 - blurStrength) : blurStrength;


  if ( m_blurFast )
  {
    cocos2d::GLProgramState &blurFaststate = m_blurFast_PostProcessLayer->ProgramState();
    blurFaststate.setUniformVec2( "u_texelOffset", Vec2( 1.0f/visibleSize.width, 1.0f/visibleSize.height ) ); 
    blurFaststate.setUniformFloat( "u_blurStrength", (float)blurStrength );
      
    m_blurFast_PostProcessLayer->draw(m_gameLayer);
  }
  else
  {
    // blur in X direction
  
    cocos2d::GLProgramState &blurXstate = m_blurX_PostProcessLayer->ProgramState();
    blurXstate.setUniformVec2( "u_blurOffset", Vec2( 1.0f/visibleSize.width, 0.0 ) ); 
    blurXstate.setUniformFloat( "u_blurStrength", (float)blurStrength );
  
	  m_blurX_PostProcessLayer->draw(m_gameLayer);

    // blur in Y direction

    cocos2d::GLProgramState &blurYstate = m_blurY_PostProcessLayer->ProgramState();
    blurYstate.setUniformVec2( "u_blurOffset", Vec2( 0.0, 1.0f/visibleSize.height ) );
    blurYstate.setUniformFloat( "u_blurStrength", (float)blurStrength );

	  m_blurY_PostProcessLayer->draw(m_blurX_PostProcessLayer);
  }
}
