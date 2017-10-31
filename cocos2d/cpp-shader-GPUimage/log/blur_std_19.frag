#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.028855;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.029954;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.031009;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.032013;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.032958;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.033837;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034643;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035370;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.036013;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.036566;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.037024;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.037385;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.037645;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.037802;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.037854;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.037802;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.037645;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.037385;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.037024;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.036566;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.036013;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.035370;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034643;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.033837;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.032958;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.032013;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.031009;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.029954;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.028855;
}

