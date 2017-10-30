attribute vec4 a_position;
attribute vec4 a_texCoord;
varying vec2 texCoord;
void main()
{
  gl_Position = CC_MVPMatrix * a_position;
  texCoord = a_texCoord.xy;
}

