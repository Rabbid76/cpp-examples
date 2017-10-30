#ifdef GL_ES
varying highp vec2 blurCoordinates[25];
#else
varying vec2 blurCoordinates[25];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.004535;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.007183;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.010932;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.015986;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.022460;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.030318;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.039320;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.048996;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.058658;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.067473;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.074569;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.079180;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.080780;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.079180;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.074569;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.067473;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.058658;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.048996;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.039320;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.030318;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.022460;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.015986;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.010932;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.007183;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.004535;
}

