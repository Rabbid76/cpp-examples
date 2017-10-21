#ifdef GL_ES
precision mediump float;
#endif

varying vec4 cc_FragColor;
varying vec2 cc_FragTexCoord1;

uniform sampler2D u_swapTexture;   // lookup texture with 256 swap colors
uniform vec2 u_spriteSize;

void main()
{
    vec2 texS = 1.0 / u_spriteSize;
    vec2 texF = fract( cc_FragTexCoord1 * u_spriteSize + 0.5 );
    vec2 texC = (cc_FragTexCoord1 * u_spriteSize + 0.5 - texF) / u_spriteSize; 

    vec4 originalColor = texture2D(CC_Texture0, texC);
    vec4 swapColor     = texture2D(u_swapTexture, originalColor.rg);
    vec3 finalColor00  = mix(originalColor.rgb, swapColor.rgb, swapColor.a);

    originalColor     = texture2D(CC_Texture0, texC+vec2(texS.x, 0.0));
    swapColor         = texture2D(u_swapTexture, originalColor.rg);
    vec3 finalColor10 = mix(originalColor.rgb, swapColor.rgb, swapColor.a);

    originalColor     = texture2D(CC_Texture0, texC+vec2(0.0,texS.y));
    swapColor         = texture2D(u_swapTexture, originalColor.rg);
    vec3 finalColor01 = mix(originalColor.rgb, swapColor.rgb, swapColor.a);
    
    originalColor     = texture2D(CC_Texture0, texC+texS.xy);
    swapColor         = texture2D(u_swapTexture, originalColor.rg);
    vec3 finalColor11 = mix(originalColor.rgb, swapColor.rgb, swapColor.a);

    vec3 finalColor0 = mix( finalColor00, finalColor10, texF.x );
    vec3 finalColor1 = mix( finalColor01, finalColor11, texF.x );
    vec3 finalColor  = mix( finalColor0, finalColor1, texF.y );

    gl_FragColor = vec4(finalColor.rgb, originalColor.a);
}