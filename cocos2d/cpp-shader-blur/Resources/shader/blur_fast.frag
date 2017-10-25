varying vec2 blurCoordinates[5];

uniform float u_blurStrength;
 
void main()
{
    vec4 sum = vec4(0.0);
	  sum += texture2D(CC_Texture0, blurCoordinates[0]) * 0.204164;
	  sum += texture2D(CC_Texture0, blurCoordinates[1]) * 0.304005;
	  sum += texture2D(CC_Texture0, blurCoordinates[2]) * 0.304005;
	  sum += texture2D(CC_Texture0, blurCoordinates[3]) * 0.093913;
	  sum += texture2D(CC_Texture0, blurCoordinates[4]) * 0.093913;
	  gl_FragColor = sum;
}
