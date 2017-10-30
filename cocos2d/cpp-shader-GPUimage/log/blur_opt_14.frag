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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.029737;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.059096;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.059096;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.057610;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.057610;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.055027;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.055027;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.051500;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.051500;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.047227;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.047227;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.042434;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.042434;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.037359;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.037359;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.480239) * 0.032227;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.480239) * 0.032227;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.477694) * 0.027239;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.477694) * 0.027239;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.475149) * 0.022558;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.475149) * 0.022558;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.472605) * 0.018305;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.472605) * 0.018305;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.470062) * 0.014554;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.470062) * 0.014554;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.467518) * 0.011339;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.467518) * 0.011339;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 27.464981) * 0.008655;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 27.464981) * 0.008655;
}

