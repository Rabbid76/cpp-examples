#ifdef GL_ES
precision mediump float;
#endif
attribute vec4 a_position;
attribute vec4 a_texCoord;
uniform vec2 u_texelOffset;
#ifdef GL_ES
varying highp vec2 blurCoordinates[17];
#else
varying vec2 blurCoordinates[17];
#endif
void main()
{
  gl_Position = CC_MVPMatrix * a_position;
#ifdef GL_ES
  highp vec2 texelSpacing = u_texelOffset;
#else
  vec2 texelSpacing = u_texelOffset;
#endif
  blurCoordinates[0] = a_texCoord.xy + texelSpacing * -8;
  blurCoordinates[1] = a_texCoord.xy + texelSpacing * -7;
  blurCoordinates[2] = a_texCoord.xy + texelSpacing * -6;
  blurCoordinates[3] = a_texCoord.xy + texelSpacing * -5;
  blurCoordinates[4] = a_texCoord.xy + texelSpacing * -4;
  blurCoordinates[5] = a_texCoord.xy + texelSpacing * -3;
  blurCoordinates[6] = a_texCoord.xy + texelSpacing * -2;
  blurCoordinates[7] = a_texCoord.xy + texelSpacing * -1;
  blurCoordinates[8] = a_texCoord.xy;
  blurCoordinates[9] = a_texCoord.xy + texelSpacing * 1;
  blurCoordinates[10] = a_texCoord.xy + texelSpacing * 2;
  blurCoordinates[11] = a_texCoord.xy + texelSpacing * 3;
  blurCoordinates[12] = a_texCoord.xy + texelSpacing * 4;
  blurCoordinates[13] = a_texCoord.xy + texelSpacing * 5;
  blurCoordinates[14] = a_texCoord.xy + texelSpacing * 6;
  blurCoordinates[15] = a_texCoord.xy + texelSpacing * 7;
  blurCoordinates[16] = a_texCoord.xy + texelSpacing * 8;
}

