#ifdef GL_ES
precision mediump float;
#endif

varying vec4 cc_FragColor;
varying vec2 cc_FragTexCoord1;

#define MAX_SWAP 11
uniform vec3  u_orig[MAX_SWAP];
uniform vec3  u_swap[MAX_SWAP];
uniform float u_deviation[MAX_SWAP];
uniform int   u_noSwap;

void main()
{
    vec4 originalColor = texture2D(CC_Texture0, cc_FragTexCoord1);
	vec4 swapColor     = vec4( originalColor.rgb, 1.0 );
	  
	for ( int i = 0; i < MAX_SWAP ; ++ i )
	{
	    vec3  deltaCol = abs( originalColor.rgb - u_orig[i] );
		float hit      = step( deltaCol.x + deltaCol.y + deltaCol.z, u_deviation[i] * 3.0 );
		swapColor.rgb  = mix( swapColor.rgb, u_swap[i].rgb, hit );
	}
	  
	gl_FragColor    = vec4( swapColor.rgb, originalColor.a );
}