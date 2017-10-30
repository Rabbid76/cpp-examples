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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.040892;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.080769;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.080769;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.076840;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.076840;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.070242;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.070242;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.061699;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.061699;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.052076;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.052076;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.042234;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.042234;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.032912;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.032912;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.461327) * 0.024645;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.461327) * 0.024645;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.456362) * 0.017732;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.456362) * 0.017732;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.451405) * 0.012260;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.451405) * 0.012260;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.446457) * 0.008144;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.446457) * 0.008144;
}

