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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.037231;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.073698;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.073698;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.070721;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.070721;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.065661;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.065661;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.058986;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.058986;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.051269;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.051269;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.043116;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.043116;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.035083;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.035083;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.468019) * 0.027620;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.468019) * 0.027620;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.463907) * 0.021039;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.463907) * 0.021039;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.459797) * 0.015506;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.459797) * 0.015506;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.455696) * 0.011057;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.455696) * 0.011057;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.451599) * 0.007629;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.451599) * 0.007629;
}

