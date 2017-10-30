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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.050920;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.099877;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.099877;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.092400;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.092400;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.080322;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.080322;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.065609;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.065609;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.050356;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.050356;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.036317;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.036317;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.024611;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.024611;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.439748) * 0.015671;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.439748) * 0.015671;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.432064) * 0.009376;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.432064) * 0.009376;
}

