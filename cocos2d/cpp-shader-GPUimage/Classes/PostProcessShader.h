#ifndef PostProcessShader_h
#define PostProcessShader_h

#include <string>
#include "cocos2d.h"

class PostProcessShader
{
public:
	PostProcessShader(void) {}
  virtual ~PostProcessShader() {}
	virtual bool init(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader);
  cocos2d::GLProgram      & Program( void )      { return *_program; }
  cocos2d::GLProgramState & ProgramState( void ) { return *_progState; }
private:
  cocos2d::GLProgram      *_program;
  cocos2d::GLProgramState *_progState;
};

#endif // PostProcessShader_h
