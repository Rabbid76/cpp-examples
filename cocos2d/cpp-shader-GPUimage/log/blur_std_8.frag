#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.011593;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.014315;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.017403;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.020829;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.024542;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.028470;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.032513;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.036556;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.040464;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.044095;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.047307;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.049966;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.051956;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.053188;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.053606;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.053188;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.051956;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.049966;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.047307;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.044095;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.040464;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.036556;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.032513;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.028470;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.024542;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.020829;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.017403;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.014315;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.011593;
}

