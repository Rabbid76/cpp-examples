#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.008019;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.010563;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.013632;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.017238;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.021357;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.025927;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.030838;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035938;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.041036;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.045911;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.050327;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.054053;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.056883;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.058651;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.059253;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.058651;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.056883;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.054053;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.050327;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.045911;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.041036;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.035938;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.030838;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.025927;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.021357;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.017238;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.013632;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.010563;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.008019;
}

