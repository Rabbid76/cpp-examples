#ifndef PostProcess_h
#define PostProcess_h

#include <PostProcessShader.h>

#include <string>
#include "cocos2d.h"

class PostProcess : public cocos2d::Layer
{
private:
	PostProcess(void) {}
  virtual ~PostProcess() {}
public:
	static PostProcess* create(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader);
  static PostProcess* create(const PostProcessShader & shader);
  void changeShader( const PostProcessShader & shader );
	void draw(cocos2d::Layer* layer);
  cocos2d::GLProgram      & Program( void )      { return _shader.Program(); }
  cocos2d::GLProgramState & ProgramState( void ) { return _shader.ProgramState(); }
private:
   virtual bool init(bool fileNames, const std::string& vertexShader, const std::string& fragmentShader);
   virtual bool init(const PostProcessShader & shader);
   virtual bool initbuffer(void);
private:
  PostProcessShader       _shader;
  cocos2d::RenderTexture *_renderTexture;
	cocos2d::Sprite        *_sprite;
};


#endif // PostProcess_h
