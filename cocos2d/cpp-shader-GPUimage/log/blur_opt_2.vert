#ifdef GL_ES
precision mediump float;
#endif
attribute vec4 a_position;
attribute vec4 a_texCoord;
uniform vec2 u_texelOffset;
#ifdef GL_ES
varying highp vec2 blurCoordinates[7];
#else
varying vec2 blurCoordinates[7];
#endif
void main()
{
  gl_Position = CC_MVPMatrix * a_position;
#ifdef GL_ES
  highp vec2 texelSpacing = u_texelOffset;
#else
  vec2 texelSpacing = u_texelOffset;
#endif
  blurCoordinates[0] = a_texCoord.xy;
  blurCoordinates[1] = a_texCoord.xy + texelSpacing * 1.407333;
  blurCoordinates[2] = a_texCoord.xy - texelSpacing * 1.407333;
  blurCoordinates[3] = a_texCoord.xy + texelSpacing * 3.294215;
  blurCoordinates[4] = a_texCoord.xy - texelSpacing * 3.294215;
  blurCoordinates[5] = a_texCoord.xy + texelSpacing * 5.201813;
  blurCoordinates[6] = a_texCoord.xy - texelSpacing * 5.201813;
}

