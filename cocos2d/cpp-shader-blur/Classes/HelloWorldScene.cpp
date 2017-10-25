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

  const char * vertShader = m_blurFast ? "shader/blur_fast.vert" : "shader/blur.vert";
  const char * fragShader = m_blurFast ? "shader/blur_fast.frag" : "shader/blur.frag";

  // blur pass 1
	m_blurPass1_PostProcessLayer = PostProcess::create(vertShader, fragShader);
	m_blurPass1_PostProcessLayer->setAnchorPoint(Point::ZERO);
	m_blurPass1_PostProcessLayer->setPosition(Point::ZERO);
	this->addChild(m_blurPass1_PostProcessLayer, 1);

  // blur pass 2
	m_blurPass2_PostProcessLayer = PostProcess::create(vertShader, fragShader);
	m_blurPass2_PostProcessLayer->setAnchorPoint(Point::ZERO);
	m_blurPass2_PostProcessLayer->setPosition(Point::ZERO);
	this->addChild(m_blurPass2_PostProcessLayer, 2);

	auto closeItem = MenuItemImage::create("CloseNormal.png", "CloseSelected.png", CC_CALLBACK_1(HelloWorld::menuCloseCallback, this));
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
  m_gameLayer->setVisible( !blur );
  m_blurPass1_PostProcessLayer->setVisible( false );
  m_blurPass2_PostProcessLayer->setVisible( blur );

  if ( blur == false )
    return;

  Size visibleSize = Director::getInstance()->getVisibleSize();
  std::chrono::high_resolution_clock::time_point currentTime = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double, std::milli> deltaTime = currentTime - _startTime;
  double blurStrength = (deltaTime.count() / 3000.0);
  blurStrength = (blurStrength - (int)blurStrength ) * 2.0;
  if ( m_blurFast )
    blurStrength = (blurStrength) > 1.0 ? 1.0 : 0.0;
  else
    blurStrength = (blurStrength) > 1.0 ? (2.0 - blurStrength) : blurStrength;
  
  // blur pass 1
  cocos2d::GLProgramState &blurPass1state = m_blurPass1_PostProcessLayer->ProgramState();
  if ( m_blurFast )
  {
    blurPass1state.setUniformVec2( "u_blurOffset", Vec2( blurStrength/visibleSize.width, blurStrength/visibleSize.height ) );
  }
  else
  {
    blurPass1state.setUniformVec2( "u_blurOffset", Vec2( 1.0f/visibleSize.width, 0.0 ) ); 
    blurPass1state.setUniformFloat( "u_blurStrength", (float)blurStrength );
  }
  m_gameLayer->setVisible( true );
  m_blurPass1_PostProcessLayer->draw(m_gameLayer);
  m_gameLayer->setVisible( false );

  // blur pass 2
  cocos2d::GLProgramState &blurPass2state = m_blurPass2_PostProcessLayer->ProgramState();
  if ( m_blurFast )
  {
     blurPass2state.setUniformVec2( "u_blurOffset", Vec2( blurStrength/visibleSize.width, -blurStrength/visibleSize.height ) );
  }
  else
  {
    blurPass2state.setUniformVec2( "u_blurOffset", Vec2( 0.0, 1.0f/visibleSize.height ) );
    blurPass2state.setUniformFloat( "u_blurStrength", (float)blurStrength );
  }
  m_blurPass1_PostProcessLayer->setVisible( true );
  m_blurPass2_PostProcessLayer->draw(m_blurPass1_PostProcessLayer);
  m_blurPass1_PostProcessLayer->setVisible( false );
}
