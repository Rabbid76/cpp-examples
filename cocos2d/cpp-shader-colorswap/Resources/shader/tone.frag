    #ifdef GL_ES
    precision mediump float;
    #endif
    
    varying vec2 cc_FragTexCoord1;

    uniform vec3 u_tintColor;

    void main()
    {
        float normTint = 0.30 * u_tintColor.r + 0.59 * u_tintColor.g + 0.11 * u_tintColor.b;
        vec4  texColor = texture2D( CC_Texture0, cc_FragTexCoord1 );
        vec3  mixColor = u_tintColor * texColor / normTint;
    	gl_FragColor   = vec4( mixColor.rgb, texColor.a );
    }

    /*
    void main()
    {
        float normTint = 0.30 * u_tintColor.r + 0.59 * u_tintColor.g + 0.11 * u_tintColor.b;
        vec4  texColor = texture2D( CC_Texture0, cc_FragTexCoord1 );
        float gray     = 0.30 * texColor.r + 0.59 * texColor.g + 0.11 * texColor.b;
    	vec3  mixColor = u_tintColor * gray / normTint;
    	gl_FragColor   = vec4( mixColor.rgb, texColor.a );
    }
    */