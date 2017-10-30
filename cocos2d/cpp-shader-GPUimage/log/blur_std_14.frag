#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.024699;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.026460;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.028203;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.029907;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.031553;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.033120;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034588;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035937;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.037149;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.038206;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.039093;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.039798;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.040309;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.040618;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.040722;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.040618;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.040309;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.039798;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.039093;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.038206;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.037149;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.035937;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034588;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.033120;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.031553;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.029907;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.028203;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.026460;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.024699;
}

