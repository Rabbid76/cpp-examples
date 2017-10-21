#ifdef GL_ES
precision mediump float;
#endif

varying vec4 cc_FragColor;
varying vec2 cc_FragTexCoord1;

const float Epsilon = 1e-10;

vec3 RGBtoHCV( in vec3 RGB )
{
   vec4 P = (RGB.g < RGB.b) ? vec4(RGB.bg, -1.0, 2.0/3.0) : vec4(RGB.gb, 0.0, -1.0/3.0);
   vec4 Q = (RGB.r < P.x) ? vec4(P.xyw, RGB.r) : vec4(RGB.r, P.yzx);
   float C = Q.x - min(Q.w, Q.y);
   float H = abs((Q.w - Q.y) / (6.0 * C + Epsilon) + Q.z);
   return vec3(H, C, Q.x);
}

vec3 RGBtoHSV(in vec3 RGB)
{
    vec3 HCV = RGBtoHCV(RGB);
    float S = HCV.y / (HCV.z + Epsilon);
    return vec3(HCV.x, S, HCV.z);
}

vec3 HUEtoRGB(in float H)
{
    float R = abs(H * 6.0 - 3.0) - 1.0;
    float G = 2.0 - abs(H * 6.0 - 2.0);
    float B = 2.0 - abs(H * 6.0 - 4.0);
    return clamp( vec3(R,G,B), 0.0, 1.0 );
}

vec3 HSVtoRGB(in vec3 HSV)
{
    vec3 RGB = HUEtoRGB(HSV.x);
    return ((RGB - 1.0) * HSV.y + 1.0) * HSV.z;
}

#define MAX_SWAP 20
uniform vec3  u_orig[MAX_SWAP];
uniform vec3  u_swap[MAX_SWAP];
uniform float u_deviation[MAX_SWAP];
uniform int   u_noSwap;

void main()
{
    vec4 originalColor = texture2D(CC_Texture0, cc_FragTexCoord1);
	vec3 originalHSV   = RGBtoHSV( originalColor.rgb );
	vec4 swapColor     = vec4( originalColor.rgb, 1.0 );
	  
	for ( int i = 0; i < MAX_SWAP ; ++ i )
	{
	    if ( i >= u_noSwap )
		    break;
        if ( all( lessThanEqual( abs(originalColor.rgb - u_orig[i]), vec3(u_deviation[i]) ) ) )
		{
            vec3 swapHSV  = RGBtoHSV( u_swap[i].rgb );
		    swapColor.rgb = HSVtoRGB( vec3( swapHSV.x, originalHSV.y, originalHSV.z ) );
            break;
		}
	}
	  
	vec3 finalColor    = mix( originalColor.rgb, swapColor.rgb, swapColor.a );
    gl_FragColor       = vec4( finalColor.rgb, originalColor.a );
}