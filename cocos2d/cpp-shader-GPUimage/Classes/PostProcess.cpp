#include "PostProcess.h"

using namespace cocos2d;

bool PostProcess::init( bool linear, const cocos2d::Size &size, bool fileNames, const std::string& vertexShader, const std::string& fragmentShader )
{
	  if (!Layer::init())
	  	return false;
    if ( !_shader.init( fileNames, vertexShader, fragmentShader ) )
      return false;
    if ( !initbuffer( linear, size ) )
      return false;
	  return true;
}

bool PostProcess::init( bool linear, const cocos2d::Size &size, const PostProcessShader & shader )
{
	  if (!Layer::init())
	  	return false;
    _shader = shader;
    if ( !initbuffer( linear, size ) )
      return false;
	  return true;
}

bool PostProcess::initbuffer( bool linear, const cocos2d::Size &size )
{
    _size = size;
    
	  _renderTexture = RenderTexture::create(size.width, size.height);
	  _renderTexture->retain();
    
    Texture2D *texture = _renderTexture->getSprite()->getTexture();
    if ( linear )
        texture->setAntiAliasTexParameters();
	  _sprite = Sprite::createWithTexture(texture);
	  _sprite->setTextureRect(Rect(0, 0, _sprite->getTexture()->getContentSize().width, _sprite->getTexture()->getContentSize().height));
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

PostProcess* PostProcess::create( bool linear, const cocos2d::Size &size, bool fileNames, const std::string& vertexShader, const std::string& fragmentShader )
{
	  if ( auto p = new (std::nothrow) PostProcess() )
    {
      if ( p->init( linear, size, fileNames, vertexShader, fragmentShader ) )
      {
        p->autorelease();
	  	  return p;
      }
      delete p;
    }
    return nullptr;
}

PostProcess* PostProcess::create( bool linear, const cocos2d::Size &size, const PostProcessShader & shader )
{
	  if ( auto p = new (std::nothrow) PostProcess() )
    {
      if ( p->init( linear, size, shader ) )
      {
        p->autorelease();
	  	  return p;
      }
      delete p;
    }
    return nullptr;
}
