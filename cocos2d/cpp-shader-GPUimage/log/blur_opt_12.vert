#ifdef GL_ES
precision mediump float;
#endif
attribute vec4 a_position;
attribute vec4 a_texCoord;
uniform vec2 u_texelOffset;
#ifdef GL_ES
varying highp vec2 blurCoordinates[15];
#else
varying vec2 blurCoordinates[15];
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
  blurCoordinates[1] = a_texCoord.xy + texelSpacing * 1.497396;
  blurCoordinates[2] = a_texCoord.xy - texelSpacing * 1.497396;
  blurCoordinates[3] = a_texCoord.xy + texelSpacing * 3.493924;
  blurCoordinates[4] = a_texCoord.xy - texelSpacing * 3.493924;
  blurCoordinates[5] = a_texCoord.xy + texelSpacing * 5.490452;
  blurCoordinates[6] = a_texCoord.xy - texelSpacing * 5.490452;
  blurCoordinates[7] = a_texCoord.xy + texelSpacing * 7.486982;
  blurCoordinates[8] = a_texCoord.xy - texelSpacing * 7.486982;
  blurCoordinates[9] = a_texCoord.xy + texelSpacing * 9.483513;
  blurCoordinates[10] = a_texCoord.xy - texelSpacing * 9.483513;
  blurCoordinates[11] = a_texCoord.xy + texelSpacing * 11.480045;
  blurCoordinates[12] = a_texCoord.xy - texelSpacing * 11.480045;
  blurCoordinates[13] = a_texCoord.xy + texelSpacing * 13.476581;
  blurCoordinates[14] = a_texCoord.xy - texelSpacing * 13.476581;
}

