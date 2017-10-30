#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.025819;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.027415;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.028982;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.030501;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.031959;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.033337;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034620;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035794;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.036843;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.037755;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.038517;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.039121;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.039558;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.039823;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.039911;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.039823;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.039558;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.039121;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.038517;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.037755;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.036843;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.035794;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034620;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.033337;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.031959;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.030501;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.028982;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.027415;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.025819;
}

