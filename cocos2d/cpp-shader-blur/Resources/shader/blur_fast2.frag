varying vec2 blurCoordinates[9];


void main()
{
    vec4 col0 = texture2D(CC_Texture0, blurCoordinates[0]);
    vec4 col1 = texture2D(CC_Texture0, blurCoordinates[1]);
    vec4 col2 = texture2D(CC_Texture0, blurCoordinates[2]);
    vec4 col3 = texture2D(CC_Texture0, blurCoordinates[3]);
    vec4 col4 = texture2D(CC_Texture0, blurCoordinates[4]);
    vec4 col5 = texture2D(CC_Texture0, blurCoordinates[5]);
    vec4 col6 = texture2D(CC_Texture0, blurCoordinates[6]);
    vec4 col7 = texture2D(CC_Texture0, blurCoordinates[7]);
    vec4 col8 = texture2D(CC_Texture0, blurCoordinates[8]);
       
    vec4 sum = (1.0 * col0 + 2.0 * col1 + 1.0 * col2 + 
          2.0 * col3 + 4.0 * col4 + 2.0 * col5 +
          1.0 * col6 + 2.0 * col7 + 1.0 * col8) / 16.0; 
	  gl_FragColor = sum;
}
