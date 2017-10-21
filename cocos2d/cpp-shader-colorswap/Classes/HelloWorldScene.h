#ifndef __HELLOWORLD_SCENE_H__
#define __HELLOWORLD_SCENE_H__

#include "cocos2d.h"

#define MAX_COLOR 20

class HelloWorld : public cocos2d::Scene
{
public:
    virtual bool init() override;
    static cocos2d::Scene* scene();
    void menuCloseCallback(Ref* sender);
    CREATE_FUNC(HelloWorld);
    void InitSwapInfo( int i, const cocos2d::Color3B &sourceCol, const cocos2d::Color3B &swapCol, float deviation );
private:
    cocos2d::Texture2D* mSwapTexture;
    cocos2d::Texture2D* mGradinetTexture;
    cocos2d::GLProgram* mProgram;
    cocos2d::Vec3 mSource[MAX_COLOR];
    cocos2d::Vec3 mSwap[MAX_COLOR];
    float mDeviation[MAX_COLOR];
    cocos2d::Vec3 mSwapInfo[MAX_COLOR];
};

#endif // __HELLOWORLD_SCENE_H__
