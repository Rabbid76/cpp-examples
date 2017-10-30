#ifdef GL_ES
varying highp vec2 blurCoordinates[7];
uniform highp vec2 u_texelOffset;
#else
varying vec2 blurCoordinates[7];
uniform vec2 u_texelOffset;
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.199676;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.297323;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.297323;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.091848;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.091848;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.010991;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.010991;
}

