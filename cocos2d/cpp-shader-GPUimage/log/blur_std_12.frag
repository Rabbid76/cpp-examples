#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.021770;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.023910;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.026078;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.028246;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.030383;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.032455;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034429;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.036269;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.037944;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.039421;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.040673;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.041673;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.042403;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.042847;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.042996;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.042847;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.042403;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.041673;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.040673;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.039421;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.037944;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.036269;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034429;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.032455;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.030383;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.028246;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.026078;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.023910;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.021770;
}

