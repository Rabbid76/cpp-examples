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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.045355;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.089325;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.089325;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.083994;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.083994;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.075187;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.075187;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.064070;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.064070;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.051974;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.051974;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.040137;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.040137;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.029506;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.029506;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.452305) * 0.020649;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.452305) * 0.020649;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.446198) * 0.013757;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.446198) * 0.013757;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.440104) * 0.008724;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.440104) * 0.008724;
}

