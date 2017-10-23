varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform vec2  u_blurOffset;
uniform float u_blurStrength;

#define MAX_BLUR_WIDHT 10

void main()
{
    vec4 color   = texture2D(CC_Texture0, v_texCoord);
    
    float blurWidth = u_blurStrength * float(MAX_BLUR_WIDHT);
    vec4 blurColor  = vec4(color.rgb, 1.0);
    for (int i = 1; i <= MAX_BLUR_WIDHT; ++ i)
    {
        if ( float(i) >= blurWidth )
          break;
        
        float weight = 1.0 - float(i) / blurWidth;
        weight = weight * weight * (3.0 - 2.0 * weight); // smoothstep
    
        vec4 sampleColor1 = texture2D(CC_Texture0, v_texCoord + u_blurOffset * float(i));
        vec4 sampleColor2 = texture2D(CC_Texture0, v_texCoord - u_blurOffset * float(i));
        blurColor += vec4(sampleColor1.rgb + sampleColor2.rgb, 2.0) * weight; 
    }
	
    gl_FragColor = vec4(blurColor.rgb / blurColor.w, color.a);
}
