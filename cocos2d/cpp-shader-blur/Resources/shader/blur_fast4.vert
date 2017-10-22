    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    
    varying vec2 blurCoordinates[9];
    
    uniform vec2  u_texelOffset;
    
    float rand(vec2 co)
    {
        return normalize(fract(sin(dot(co.xy ,vec2(92.,80.))) + cos(dot(co.xy ,vec2(41.,62.))) * 5.1));
    }
    
    void main()
    {
        gl_Position  = CC_MVPMatrix * a_position;
    	  vec2 rand = rand(a_texCoord.st);

        blurCoordinates[0]  = a_texCoord.st;
        blurCoordinates[1]  = a_texCoord.st + vec2( 0.0, -rand.y) * u_texelOffset;
        blurCoordinates[2]  = a_texCoord.st + vec2(-rand.x,  0.0) * u_texelOffset;
        blurCoordinates[3]  = a_texCoord.st + vec2(+rand.x,  0.0) * u_texelOffset;
        blurCoordinates[4]  = a_texCoord.st + vec2( 0.0, +rand.y) * u_texelOffset;
        blurCoordinates[5]  = a_texCoord.st + vec2(-rand.x, -rand.y) * u_texelOffset;
        blurCoordinates[6]  = a_texCoord.st + vec2(+rand.x, -rand.y) * u_texelOffset;
        blurCoordinates[7]  = a_texCoord.st + vec2(-rand.x, +rand.y) * u_texelOffset;
        blurCoordinates[8]  = a_texCoord.st + vec2(+rand.x, +rand.y) * u_texelOffset;
    }
