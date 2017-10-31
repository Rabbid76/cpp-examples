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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.023460;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.046739;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.046739;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.046023;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.046023;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.044764;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.044764;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.043004;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.043004;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.040808;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.040808;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.038249;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.038249;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.035410;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.035410;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.488041) * 0.032381;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.488041) * 0.032381;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.486500) * 0.029248;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.486500) * 0.029248;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.484959) * 0.026094;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.484959) * 0.026094;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.483416) * 0.022994;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.483416) * 0.022994;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.481874) * 0.020015;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.481874) * 0.020015;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.480337) * 0.017207;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.480337) * 0.017207;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 27.478796) * 0.014613;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 27.478796) * 0.014613;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 29.477253) * 0.012257;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 29.477253) * 0.012257;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 31.475714) * 0.010155;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 31.475714) * 0.010155;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 33.474178) * 0.008310;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 33.474178) * 0.008310;
}

