    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    
    varying vec2 cc_FragTexCoord1;
    
    void main()
    {
        gl_Position      = CC_PMatrix * a_position;
        cc_FragTexCoord1 = a_texCoord;
    }