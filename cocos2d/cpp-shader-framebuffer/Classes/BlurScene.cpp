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
  //m_gameLayer->setCameraMask((unsigned short)CameraFlag::USER1);
	this->addChild(m_gameLayer, 0);

  // blur fast layer
	m_blur_PostProcessLayer = PostProcess::create("shader/blur_fast5.vert", "shader/blur_fast5.frag");
	m_blur_PostProcessLayer->setAnchorPoint(Point::ZERO);
	m_blur_PostProcessLayer->setPosition(Point::ZERO);
	this->addChild(m_blur_PostProcessLayer, 1);
  

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
  //update( delta );
  static bool blur = true;
  if ( blur == false )
    return;

  Size visibleSize = Director::getInstance()->getVisibleSize();
  std::chrono::high_resolution_clock::time_point currentTime = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double, std::milli> deltaTime = currentTime - _startTime;
  double blurStrength = (deltaTime.count() / 3000.0);
  blurStrength = (blurStrength - (int)blurStrength ) * 2.0;
  blurStrength = (blurStrength) > 1.0 ? (2.0 - blurStrength) : blurStrength;


  cocos2d::GLProgramState &blurFaststate = m_blur_PostProcessLayer->ProgramState();
  blurFaststate.setUniformVec2( "u_texelOffset", Vec2( blurStrength*10.0f/visibleSize.width, blurStrength*10.0f/visibleSize.height ) ); 
  //blurFaststate.setUniformFloat( "u_blurStrength", (float)blurStrength );
      
  m_gameLayer->setVisible( true );
  m_blur_PostProcessLayer->draw(m_gameLayer);
  m_gameLayer->setVisible( false );
}
