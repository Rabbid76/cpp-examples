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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.026429;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.052601;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.052601;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.051585;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.051585;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.049804;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.049804;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.047341;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.047341;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.044302;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.044302;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.040816;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.040816;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.037022;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.037022;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.484867) * 0.033061;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.484867) * 0.033061;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.482916) * 0.029066;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.482916) * 0.029066;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.480965) * 0.025158;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.480965) * 0.025158;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.479017) * 0.021438;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.479017) * 0.021438;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.477066) * 0.017986;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.477066) * 0.017986;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.475119) * 0.014855;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.475119) * 0.014855;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 27.473169) * 0.012080;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 27.473169) * 0.012080;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 29.471224) * 0.009670;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 29.471224) * 0.009670;
}

