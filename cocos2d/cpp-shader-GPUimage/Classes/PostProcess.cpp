#include "PostProcess.h"

using namespace cocos2d;

bool PostProcess::init(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader)
{
	  if (!Layer::init())
	  	return false;
    if ( !_shader.init( fileNames, vertexShader, fragmentShader ) )
      return false;
    if ( !initbuffer() )
      return false;
	  return true;
}

bool PostProcess::init(const PostProcessShader & shader)
{
	  if (!Layer::init())
	  	return false;
    _shader = shader;
    if ( !initbuffer() )
      return false;
	  return true;
}

bool PostProcess::initbuffer(void)
{
    auto visibleSize = Director::getInstance()->getVisibleSize();
    
	  _renderTexture = RenderTexture::create(visibleSize.width, visibleSize.height);
	  _renderTexture->retain();
    
	  _sprite = Sprite::createWithTexture(_renderTexture->getSprite()->getTexture());
	  _sprite->setTextureRect(Rect(0, 0, _sprite->getTexture()->getContentSize().width,
	  _sprite->getTexture()->getContentSize().height));
	  _sprite->setAnchorPoint(Point::ZERO);
	  _sprite->setPosition(Point::ZERO);
	  _sprite->setFlippedY(true);
	  _sprite->setGLProgram(&Program());
    _sprite->setGLProgramState(&ProgramState());
	  this->addChild(_sprite);

    return true;
}

void PostProcess::changeShader( const PostProcessShader & shader )
{ 
  _shader = shader;
  _sprite->setGLProgram(&Program());
  _sprite->setGLProgramState(&ProgramState());
}

void PostProcess::draw(cocos2d::Layer* layer)
{
	  _renderTexture->beginWithClear(0.0f, 0.0f, 0.0f, 0.0f);
	  layer->visit();
    _renderTexture->end();
}

PostProcess* PostProcess::create(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader)
{
	  if ( auto p = new (std::nothrow) PostProcess() )
    {
      if ( p->init(fileNames, vertexShader, fragmentShader) )
      {
        p->autorelease();
	  	  return p;
      }
      delete p;
    }
    return nullptr;
}

PostProcess* PostProcess::create(const PostProcessShader & shader)
{
	  if ( auto p = new (std::nothrow) PostProcess() )
    {
      if ( p->init(shader) )
      {
        p->autorelease();
	  	  return p;
      }
      delete p;
    }
    return nullptr;
}
