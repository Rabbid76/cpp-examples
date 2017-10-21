#ifdef GL_ES
precision mediump float;
#endif

varying vec4 cc_FragPos;
varying vec4 cc_FragColor;
varying vec2 cc_FragTexCoord1;

uniform vec4 u_startColor;
uniform vec4 u_endColor;
uniform vec2 u_center;
uniform float u_radius;
uniform float u_expand;


void main()
{
   vec2 texC = cc_FragTexCoord1;
   vec4 originalColor = texture2D(CC_Texture0, texC); 
   
   float d = distance(texC, u_center) / u_radius;
   vec4 col = vec4( 0.0, 0.0, 0.0, 1.0 );
    if (d <= 1.0)
    {
        if (d <= u_expand)
        {
            col = u_startColor;
        }
        else
        {
            col = mix(u_startColor, u_endColor, (d - u_expand) / (1.0 - u_expand));
        }
    }
    else
    {
        col = vec4(0.0, 0.0, 0.0, 0.0);
    }
	
    vec4 mixCol = mix( originalColor, col, step( 0.5, texC.y ) );
    gl_FragColor = vec4( mixCol.rgb, mixCol.a );
}