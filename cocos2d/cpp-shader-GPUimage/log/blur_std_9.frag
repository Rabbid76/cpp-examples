#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.014803;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.017488;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.020406;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.023519;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.026774;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.030106;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.033437;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.036681;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.039746;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.042539;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.044969;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.046954;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.048426;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.049331;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.049637;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.049331;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.048426;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.046954;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.044969;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.042539;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.039746;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.036681;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.033437;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.030106;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.026774;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.023519;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.020406;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.017488;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.014803;
}

