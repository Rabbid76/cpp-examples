#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.017551;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.020088;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.022762;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.025536;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.028363;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.031190;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.033957;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.036602;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.039060;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.041268;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.043168;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.044706;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.045837;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.046530;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.046763;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.046530;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.045837;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.044706;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.043168;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.041268;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.039060;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.036602;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.033957;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.031190;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.028363;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.025536;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.022762;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.020088;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.017551;
}

