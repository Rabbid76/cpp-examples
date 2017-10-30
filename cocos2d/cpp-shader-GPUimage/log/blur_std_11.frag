#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.019854;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.022197;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.024613;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.027067;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.029520;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.031931;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034255;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.036446;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.038457;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.040245;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.041770;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.042996;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.043894;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.044441;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.044625;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.044441;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.043894;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.042996;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.041770;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.040245;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.038457;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.036446;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034255;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.031931;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.029520;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.027067;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.024613;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.022197;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.019854;
}

