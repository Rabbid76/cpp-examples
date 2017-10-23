varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
//CC_Time[1] is time

uniform vec2 u_blurOffsetY;

#define MAX_BLUR_WIDHT 20

void main()
{
    vec4 color   = texture2D(CC_Texture0, v_texCoord);
    
    float blurWidth = (sin(CC_Time[1]) + 1.0) * 0.5 * float(MAX_BLUR_WIDHT);
    
    vec4 blurColor = vec4(color.rgb, 1.0);
    for (int i = 1; i <= MAX_BLUR_WIDHT; ++ i)
    {
        if ( float(i) > blurWidth )
          break;
        
        float weight = 1.0 - float(i) / float(MAX_BLUR_WIDHT);
        weight = weight * weight * (3.0 - 2.0 * weight); // smoothstep
    
        vec4 sampleColor = texture2D(CC_Texture0, v_texCoord + u_blurOffsetY * float(i));
        blurColor += vec4(sampleColor.rgb, 1.0) * weight; 
    }
	
    gl_FragColor = vec4(blurColor.rgb / blurColor.w, color.a);
}