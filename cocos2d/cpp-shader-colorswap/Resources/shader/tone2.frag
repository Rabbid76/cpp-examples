    #ifdef GL_ES
    precision mediump float;
    #endif

    varying vec2 cc_FragTexCoord1;

    uniform sampler2D u_texGrad;

    /*
    void main()
    {
        vec4  texColor   = texture2D( CC_Texture0, cc_FragTexCoord1 );
        vec4  lookUpCol  = texture2D( u_texGrad, vec2( texColor.r, 0.5 ) );
        float lookUpGray = 0.30 * lookUpCol.r + 0.59 * lookUpCol.g + 0.11 * lookUpCol.b;
        lookUpCol       *= texColor.r / lookUpGray;
        float alpha      = step( 0.5, texColor.a );
        gl_FragColor     = vec4( lookUpCol.rgb * alpha / max( texColor.a, 0.01), alpha );
    }
    */


    void main()
    {
        vec4  texColor  = texture2D( CC_Texture0, cc_FragTexCoord1 );
        vec4  lookUpCol = texture2D( u_texGrad, vec2( texColor.r / max(texColor.a, 0.01), 0.0 ) );
        //gl_FragColor    = vec4( mix( texColor.rgb, lookUpCol.rgb, texColor.a ), texColor.a ); 

        //float alpha     = step( 0.5, texColor.a ) * lookUpCol.a;
        float alpha     = texColor.a * lookUpCol.a;
        vec4 finlaColor = vec4( lookUpCol.rgb * alpha, alpha );
        
        vec4 testLookUp = texture2D( u_texGrad, vec2( cc_FragTexCoord1.x, 0.0 ) );
        float testMix = step( 0.48, cc_FragTexCoord1.y ) * step( cc_FragTexCoord1.y, 0.52 );
        gl_FragColor = mix( finlaColor, testLookUp, testMix );
     }  
