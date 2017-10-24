attribute vec4 a_position;
attribute vec2 a_texCoord;

varying vec2 blurCoordinates[9];

uniform vec2  u_texelOffset;

void main()
{
    gl_Position     = CC_MVPMatrix * a_position;
	  
    blurCoordinates[0] = a_texCoord.st + vec2( 0.0,  0.0) * u_texelOffset.st;
    blurCoordinates[1] = a_texCoord.st + vec2(+1.0,  0.0) * u_texelOffset.st;
    blurCoordinates[2] = a_texCoord.st + vec2(-1.0,  0.0) * u_texelOffset.st;
    blurCoordinates[3] = a_texCoord.st + vec2( 0.0, +1.0) * u_texelOffset.st;
    blurCoordinates[4] = a_texCoord.st + vec2( 0.0, -1.0) * u_texelOffset.st;
    blurCoordinates[5] = a_texCoord.st + vec2(-1.0, -1.0) * u_texelOffset.st;
    blurCoordinates[6] = a_texCoord.st + vec2(+1.0, -1.0) * u_texelOffset.st;
    blurCoordinates[7] = a_texCoord.st + vec2(-1.0, +1.0) * u_texelOffset.st;
    blurCoordinates[8] = a_texCoord.st + vec2(+1.0, +1.0) * u_texelOffset.st;
}
