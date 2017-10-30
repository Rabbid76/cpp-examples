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
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.027762;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.055216;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.055216;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.054004;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.054004;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.051889;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.051889;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.048979;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.048979;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.045418;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.045418;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.041375;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.041375;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.037029;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.037029;
#ifdef GL_ES
highp vec2 texelSpacing = u_texelOffset;
#else
vec2 texelSpacing = u_texelOffset;
#endif
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 15.482785) * 0.032556;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 15.482785) * 0.032556;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 17.480564) * 0.028119;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 17.480564) * 0.028119;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 19.478348) * 0.023860;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 19.478348) * 0.023860;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 21.476128) * 0.019889;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 21.476128) * 0.019889;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 23.473911) * 0.016287;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 23.473911) * 0.016287;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 25.471697) * 0.013103;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 25.471697) * 0.013103;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 27.469484) * 0.010356;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 27.469484) * 0.010356;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] + texelSpacing * 29.467270) * 0.008041;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0] - texelSpacing * 29.467270) * 0.008041;
}

