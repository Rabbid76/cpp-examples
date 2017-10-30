#ifdef GL_ES
varying highp vec2 blurCoordinates[21];
#else
varying vec2 blurCoordinates[21];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.004420;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.008003;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.013613;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.021754;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.032657;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.046053;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.061011;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.075929;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.088770;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.097495;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.100590;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.097495;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.088770;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.075929;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.061011;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.046053;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.032657;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.021754;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.013613;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.008003;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.004420;
}

