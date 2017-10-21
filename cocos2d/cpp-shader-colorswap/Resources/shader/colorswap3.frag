#ifdef GL_ES
precision mediump float;
#endif

varying vec4 cc_FragColor;
varying vec2 cc_FragTexCoord1;

#define MAX_SWAP 11
uniform vec3  u_swap[MAX_SWAP];
uniform int   u_noSwap;

void main()
{
    vec4  originalColor = texture2D(CC_Texture0, cc_FragTexCoord1);
	float fIndex        = originalColor.a * 255.0 - 0.5;
	float maxIndex      = float(u_noSwap) + 0.5; 
	int   iIndex        = int( clamp( fIndex, 0.0, maxIndex ) );
	float isSwap        = step( 0.0, fIndex ) * step( fIndex, maxIndex );
	vec3  swapColor     = mix( originalColor.rgb, u_swap[iIndex], isSwap );
    gl_FragColor        = vec4( swapColor.rgb, max(originalColor.a, isSwap) );
}