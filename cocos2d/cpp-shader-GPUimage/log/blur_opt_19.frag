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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.022562;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.044968;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.044968;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.044350;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.044350;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.043259;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.043259;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.041730;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.041730;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.039812;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.039812;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.037563;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.037563;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.035052;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.035052;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.489269) * 0.032348;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.489269) * 0.032348;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.487883) * 0.029524;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.487883) * 0.029524;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.486500) * 0.026650;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.486500) * 0.026650;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.485115) * 0.023790;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.485115) * 0.023790;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.483732) * 0.021004;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.483732) * 0.021004;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.482349) * 0.018340;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.482349) * 0.018340;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 27.480965) * 0.015837;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 27.480965) * 0.015837;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 29.479580) * 0.013525;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 29.479580) * 0.013525;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 31.478201) * 0.011424;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 31.478201) * 0.011424;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 33.476818) * 0.009543;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 33.476818) * 0.009543;
}

