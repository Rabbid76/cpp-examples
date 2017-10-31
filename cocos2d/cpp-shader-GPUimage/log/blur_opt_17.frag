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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.024856;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.049497;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.049497;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.048649;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.048649;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.047159;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.047159;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.045086;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.045086;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.042513;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.042513;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.039536;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.039536;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.036262;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.036262;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.486594) * 0.032803;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.486594) * 0.032803;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.484867) * 0.029266;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.484867) * 0.029266;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.483137) * 0.025752;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.483137) * 0.025752;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.481409) * 0.022349;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.481409) * 0.022349;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.479683) * 0.019129;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.479683) * 0.019129;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.477955) * 0.016148;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.477955) * 0.016148;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 27.476229) * 0.013444;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 27.476229) * 0.013444;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 29.474503) * 0.011040;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 29.474503) * 0.011040;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 31.472776) * 0.008941;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 31.472776) * 0.008941;
}

