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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.032015;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.063559;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.063559;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.061709;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.061709;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.058513;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.058513;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.054187;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.054187;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.049009;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.049009;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.043290;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.043290;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.037345;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.037345;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.477087) * 0.031465;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.477087) * 0.031465;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.474136) * 0.025891;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.474136) * 0.025891;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.471184) * 0.020807;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.471184) * 0.020807;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.468241) * 0.016330;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.468241) * 0.016330;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.465294) * 0.012518;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.465294) * 0.012518;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.462351) * 0.009371;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.462351) * 0.009371;
}

