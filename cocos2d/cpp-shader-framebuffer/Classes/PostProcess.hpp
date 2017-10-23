#ifndef POST_PROCESS_HPP
#define POST_PROCESS_HPP

#include <string>
#include "cocos2d.h"

class PostProcess : public cocos2d::Layer
{
private:
	PostProcess(void) {}
  virtual ~PostProcess() {}
public:
	static PostProcess* create(const std::string& vertexShaderFile, const std::string& fragmentShaderFile);
	virtual bool init(const std::string& vertexShaderFile, const std::string& fragmentShaderFile);
	void draw(cocos2d::Layer* layer);
  cocos2d::GLProgram      & Program( void )      { return *_program; }
  cocos2d::GLProgramState & ProgramState( void ) { return *_progState; }
private:
  cocos2d::GLProgram       *_program;
  cocos2d::GLProgramState  *_progState;
	cocos2d::RenderTexture   *_renderTexture;
	cocos2d::Sprite          *_sprite;
};


#endif // POST_PROCESS_HPP
