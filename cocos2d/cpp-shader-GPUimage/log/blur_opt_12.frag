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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.034671;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.068744;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.068744;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.066402;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.066402;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.062385;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.062385;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.057009;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.057009;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.050671;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.050671;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.043806;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.043806;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.036836;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.036836;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.473117) * 0.030127;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.473117) * 0.030127;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.469654) * 0.023967;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.469654) * 0.023967;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.466198) * 0.018544;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.466198) * 0.018544;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.462742) * 0.013956;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.462742) * 0.013956;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.459293) * 0.010216;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.459293) * 0.010216;
}

