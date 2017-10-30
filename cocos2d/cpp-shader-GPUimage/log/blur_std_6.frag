#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.004439;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.006459;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.009141;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.012581;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.016841;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.021927;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.027767;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.034198;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.040965;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.047727;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.054082;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.059604;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.063890;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.066609;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.067540;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.066609;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.063890;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.059604;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.054082;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.047727;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.040965;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.034198;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.027767;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.021927;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.016841;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.012581;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.009141;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.006459;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.004439;
}

