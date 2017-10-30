#ifdef GL_ES
varying highp vec2 blurCoordinates[5];
uniform highp vec2 u_texelOffset;
#else
varying vec2 blurCoordinates[5];
uniform vec2 u_texelOffset;
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.398943;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.295963;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.295963;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.004566;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.004566;
}

