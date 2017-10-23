#ifndef __BLUR_SCENE_H__
#define __BLUR_SCENE_H__

#include "cocos2d.h"
#include <chrono>

class PostProcess;


// http://discuss.cocos2d-x.org/t/how-can-i-add-a-post-process-shader/33352/2
// http://discuss.cocos2d-x.org/t/big-window-small-framebuffer/23711/3
// http://discuss.cocos2d-x.org/t/implementing-shader-on-whole-scene-not-on-a-single-sprite-solved/28506
// http://discuss.cocos2d-x.org/t/frame-buffer-cameras-scene-transitions-black-flicker/35738
// http://discuss.cocos2d-x.org/t/rendertexture-problem/1268/5

class BlurScene
  : public cocos2d::Scene
{
public:
  CREATE_FUNC(BlurScene);
  static cocos2d::Scene* scene();
  virtual void render( cocos2d::Renderer* renderer, const cocos2d::Mat4* eyeTransforms, const cocos2d::Mat4* eyeProjections, unsigned int multiViewCount ) override;
};

class BlurLayer 
  : public cocos2d::Layer
  //: public cocos2d::Scene
{
private:
	cocos2d::Layer* m_gameLayer;
	PostProcess* m_blur_PostProcessLayer1;
  PostProcess* m_blur_PostProcessLayer2;
  cocos2d::RenderTexture *m_renderTexture1;
  
public:
    virtual bool init();
    
    // a selector callback
    void menuCloseCallback(cocos2d::Ref* pSender);
    
    // implement the "static create()" method manually
    CREATE_FUNC(BlurLayer);

    virtual void update(float delta) override;

private: 

  std::chrono::high_resolution_clock::time_point _startTime;
};

#endif // __BLUR_SCENE_H__

