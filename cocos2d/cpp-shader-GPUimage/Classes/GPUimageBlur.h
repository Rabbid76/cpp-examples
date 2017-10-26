#ifndef __GPUimageBlur_SCENE_H__
#define __GPUimageBlur_SCENE_H__

#include "cocos2d.h"
#include <chrono>

#include <PostProcessShader.h>

class PostProcess;

class GPUimageBlur : public cocos2d::Layer
{
public:
    static cocos2d::Scene* createScene();

    virtual bool init();
    
    // a selector callback
    void menuCloseCallback(cocos2d::Ref* pSender);
    
    // implement the "static create()" method manually
    CREATE_FUNC(GPUimageBlur);

    virtual void update(float delta) override;

    std::string GenerateVertexShaderString( int radius, float sigma );
    std::string GenerateFragmentShaderString( int radius, float sigma );
    std::string GenerateOptimizedVertexShaderString( int radius, float sigma );
    std::string GenerateOptimizedFragmentShaderString( int radius, float sigma );

private: 

  cocos2d::Layer                 *m_gameLayer;
  std::vector<PostProcessShader>  m_blurShader1;
  std::vector<PostProcessShader>  m_blurShader2;
  PostProcess*                    m_blurPass1;
  PostProcess*                    m_blurPass2;

	bool  m_optimized;
  int   m_maxRadius;
  float m_sigma;
  float m_stride;

  std::chrono::high_resolution_clock::time_point _startTime;
};

#endif // __GPUimageBlur_SCENE_H__

