#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.023366;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.025309;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.027252;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.029171;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.031041;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.032836;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034530;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.036096;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.037512;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.038753;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.039798;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.040631;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.041237;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.041604;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.041728;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.041604;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.041237;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.040631;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.039798;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.038753;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.037512;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.036096;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034530;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.032836;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.031041;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.029171;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.027252;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.025309;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.023366;
}

