#ifdef GL_ES
varying highp vec2 blurCoordinates[9];
uniform highp vec2 u_texelOffset;
#else
varying vec2 blurCoordinates[9];
uniform vec2 u_texelOffset;
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.133571;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.233308;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.233308;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.135928;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.135928;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.051383;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.051383;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.012595;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.012595;
}

