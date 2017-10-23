attribute vec4 a_position;
attribute vec2 a_texCoord;

varying vec2 blurCoordinates[13];

uniform vec2  u_texelOffset;

void main()
{
    gl_Position     = CC_MVPMatrix * a_position;
	  
    blurCoordinates[0]  = a_texCoord.st + vec2( 0.0,  0.0) * u_texelOffset;
    blurCoordinates[1]  = a_texCoord.st + vec2( 0.0, -1.0) * u_texelOffset;
    blurCoordinates[2]  = a_texCoord.st + vec2(-1.0,  0.0) * u_texelOffset;
    blurCoordinates[3]  = a_texCoord.st + vec2(+1.0,  0.0) * u_texelOffset;
    blurCoordinates[4]  = a_texCoord.st + vec2( 0.0, +1.0) * u_texelOffset;
    blurCoordinates[5]  = a_texCoord.st + vec2(-1.0, -1.0) * u_texelOffset;
    blurCoordinates[6]  = a_texCoord.st + vec2(+1.0, -1.0) * u_texelOffset;
    blurCoordinates[7]  = a_texCoord.st + vec2(-1.0, +1.0) * u_texelOffset;
    blurCoordinates[8]  = a_texCoord.st + vec2(+1.0, +1.0) * u_texelOffset;
    blurCoordinates[9]  = a_texCoord.st + vec2(+1.0, +1.0) * u_texelOffset;
    blurCoordinates[10] = a_texCoord.st + vec2(+2.0, +0.0) * u_texelOffset;
    blurCoordinates[11] = a_texCoord.st + vec2(-2.0, +0.0) * u_texelOffset;
    blurCoordinates[12] = a_texCoord.st + vec2( 0.0, +2.0) * u_texelOffset;
}
