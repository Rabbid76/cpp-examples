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
	static PostProcess* create( const cocos2d::Size &size, bool fileNames, const std::string& vertexShader, const std::string& fragmentShader );
  static PostProcess* create( const cocos2d::Size &size, const PostProcessShader & shader );
  void changeShader( const PostProcessShader & shader );
	void draw(cocos2d::Layer* layer);
  cocos2d::GLProgram      & Program( void )      { return _shader.Program(); }
  cocos2d::GLProgramState & ProgramState( void ) { return _shader.ProgramState(); }
  cocos2d::Size             Size( void ) const   { return _size; }
private:
   virtual bool init( const cocos2d::Size &size, bool fileNames, const std::string& vertexShader, const std::string& fragmentShader );
   virtual bool init( const cocos2d::Size &size, const PostProcessShader & shader);
   virtual bool initbuffer( const cocos2d::Size &size );
private:
  PostProcessShader       _shader;
  cocos2d::Size           _size;
  cocos2d::RenderTexture *_renderTexture;
	cocos2d::Sprite        *_sprite;
};


#endif // PostProcess_h
