#include "PostProcess.hpp"

using namespace cocos2d;

bool PostProcess::init(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader)
{
	  if (!Layer::init()) {
	  	return false;
	  }
    
    if ( fileNames )
	      _program = GLProgram::createWithFilenames(vertexShader, fragmentShader);
    else
        _program = GLProgram::createWithByteArrays(vertexShader.data(), fragmentShader.data());
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_COLOR, GLProgram::VERTEX_ATTRIB_POSITION);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_POSITION, GLProgram::VERTEX_ATTRIB_COLOR);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_TEX_COORD, GLProgram::VERTEX_ATTRIB_TEX_COORD);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_TEX_COORD1, GLProgram::VERTEX_ATTRIB_TEX_COORD1);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_TEX_COORD2, GLProgram::VERTEX_ATTRIB_TEX_COORD2);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_TEX_COORD3, GLProgram::VERTEX_ATTRIB_TEX_COORD3);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_NORMAL, GLProgram::VERTEX_ATTRIB_NORMAL);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_BLEND_WEIGHT, GLProgram::VERTEX_ATTRIB_BLEND_WEIGHT);
	  _program->bindAttribLocation(GLProgram::ATTRIBUTE_NAME_BLEND_INDEX, GLProgram::VERTEX_ATTRIB_BLEND_INDEX);
	  _program->link();
    
    _progState = GLProgramState::getOrCreateWithGLProgram(_program);
    
	  _program->updateUniforms();
    
	  auto visibleSize = Director::getInstance()->getVisibleSize();
    
	  _renderTexture = RenderTexture::create(visibleSize.width, visibleSize.height);
	  _renderTexture->retain();
    
	  _sprite = Sprite::createWithTexture(_renderTexture->getSprite()->getTexture());
	  _sprite->setTextureRect(Rect(0, 0, _sprite->getTexture()->getContentSize().width,
	  _sprite->getTexture()->getContentSize().height));
	  _sprite->setAnchorPoint(Point::ZERO);
	  _sprite->setPosition(Point::ZERO);
	  _sprite->setFlippedY(true);
	  _sprite->setGLProgram(_program);
    _sprite->setGLProgramState(_progState);
	  this->addChild(_sprite);
    
	  return true;
}

void PostProcess::draw(cocos2d::Layer* layer)
{
	  _renderTexture->beginWithClear(0.0f, 0.0f, 0.0f, 0.0f);
	  layer->visit();
    _renderTexture->end();
}

PostProcess* PostProcess::create(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader)
{
	  auto p = new (std::nothrow) PostProcess();
	  if (p && p->init(fileNames, vertexShader, fragmentShader)) {
	  	p->autorelease();
	  	return p;
	  }
	  delete p;
	  return nullptr;
}
