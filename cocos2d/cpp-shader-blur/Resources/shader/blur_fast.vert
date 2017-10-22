attribute vec4 a_position;
attribute vec2 a_texCoord;

varying vec2 blurCoordinates[5];

uniform vec2  u_texelOffset;

void main()
{
    gl_Position     = CC_MVPMatrix * a_position;
	  
    blurCoordinates[0] = a_texCoord.xy;
	  blurCoordinates[1] = a_texCoord.xy + u_texelOffset * 1.407333;
	  blurCoordinates[2] = a_texCoord.xy - u_texelOffset * 1.407333;
	  blurCoordinates[3] = a_texCoord.xy + u_texelOffset * 3.294215;
	  blurCoordinates[4] = a_texCoord.xy - u_texelOffset * 3.294215;
}
