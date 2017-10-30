#ifdef GL_ES
varying highp vec2 blurCoordinates[13];
uniform highp vec2 u_texelOffset;
#else
varying vec2 blurCoordinates[13];
uniform vec2 u_texelOffset;
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.080780;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.153750;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.153750;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.126131;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.126131;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.088315;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.088315;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.052777;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.052777;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.026919;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.026919;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.011718;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.011718;
}

