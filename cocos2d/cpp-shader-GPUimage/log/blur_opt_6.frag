#ifdef GL_ES
varying highp vec2 blurCoordinates[15];
uniform highp vec2 u_texelOffset;
#else
varying vec2 blurCoordinates[15];
uniform vec2 u_texelOffset;
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.067540;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.130499;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.130499;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.113686;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.113686;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.088692;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.088692;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.061965;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.061965;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.038768;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.038768;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.021721;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.021721;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.010898;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.010898;
}

