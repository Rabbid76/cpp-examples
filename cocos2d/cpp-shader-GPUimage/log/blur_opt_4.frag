#ifdef GL_ES
varying highp vec2 blurCoordinates[11];
uniform highp vec2 u_texelOffset;
#else
varying vec2 blurCoordinates[11];
uniform vec2 u_texelOffset;
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.100590;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.186265;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.186265;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.136940;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.136940;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.078710;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.078710;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035367;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.035367;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.012422;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.012422;
}

