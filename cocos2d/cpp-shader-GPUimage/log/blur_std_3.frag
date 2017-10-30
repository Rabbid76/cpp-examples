#ifdef GL_ES
varying highp vec2 blurCoordinates[17];
#else
varying vec2 blurCoordinates[17];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.003816;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.008779;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.018077;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.033306;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.054913;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.081015;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.106955;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.126353;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.133571;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.126353;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.106955;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.081015;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.054913;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.033306;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.018077;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.008779;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.003816;
}

