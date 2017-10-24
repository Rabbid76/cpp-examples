varying vec2 blurCoordinates[9];


void main()
{
    vec4 sum = vec4(0.0);
    sum += texture2D(CC_Texture0, blurCoordinates[0]) * 4.0;
    sum += texture2D(CC_Texture0, blurCoordinates[1]) * 2.0;
    sum += texture2D(CC_Texture0, blurCoordinates[2]) * 2.0;
    sum += texture2D(CC_Texture0, blurCoordinates[3]) * 2.0;
    sum += texture2D(CC_Texture0, blurCoordinates[4]) * 2.0;
    sum += texture2D(CC_Texture0, blurCoordinates[5]) * 1.0;
    sum += texture2D(CC_Texture0, blurCoordinates[6]) * 1.0;
    sum += texture2D(CC_Texture0, blurCoordinates[7]) * 1.0;
    sum += texture2D(CC_Texture0, blurCoordinates[8]) * 1.0;
    sum /= 16.0; 
	  gl_FragColor = sum;
}
