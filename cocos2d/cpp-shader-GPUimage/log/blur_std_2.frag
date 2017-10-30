#ifdef GL_ES
varying highp vec2 blurCoordinates[13];
#else
varying vec2 blurCoordinates[13];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.002218;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.008773;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.027023;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.064825;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.121109;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.176213;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.199676;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.176213;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.121109;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.064825;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.027023;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.008773;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.002218;
}

