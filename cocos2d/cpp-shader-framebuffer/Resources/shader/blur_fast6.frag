varying vec2 blurCoordinates[5];


void main()
{
    vec4 sum = vec4(0.0);
    sum += texture2D(CC_Texture0, blurCoordinates[0]) * 4.0;
    sum += texture2D(CC_Texture0, blurCoordinates[1]) * 2.0;
    sum += texture2D(CC_Texture0, blurCoordinates[2]) * 2.0;
    sum += texture2D(CC_Texture0, blurCoordinates[3]) * 1.0;
    sum += texture2D(CC_Texture0, blurCoordinates[4]) * 1.0;
    sum /= 10.0; 
	  gl_FragColor = sum;
}
