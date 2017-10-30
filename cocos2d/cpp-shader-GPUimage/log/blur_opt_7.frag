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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.058055;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.113199;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.113199;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.102271;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.102271;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.085191;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.085191;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.065427;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.065427;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.046329;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.046329;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.030246;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.030246;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.018206;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.018206;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.421572) * 0.010104;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.421572) * 0.010104;
}

