#ifndef __HELLOWORLD_SCENE_H__
#define __HELLOWORLD_SCENE_H__

#include "cocos2d.h"
#include <chrono>

class PostProcess;

class HelloWorld : public cocos2d::Layer
{
private:
	Layer* m_gameLayer;
	PostProcess* m_blurX_PostProcessLayer;
  PostProcess* m_blurY_PostProcessLayer;
	PostProcess* m_blurFast_PostProcessLayer;
  bool         m_blurFast;

public:
    static cocos2d::Scene* createScene();

    virtual bool init();
    
    // a selector callback
    void menuCloseCallback(cocos2d::Ref* pSender);
    
    // implement the "static create()" method manually
    CREATE_FUNC(HelloWorld);

    virtual void update(float delta) override;

private: 

  std::chrono::high_resolution_clock::time_point _startTime;
};

#endif // __HELLOWORLD_SCENE_H__

