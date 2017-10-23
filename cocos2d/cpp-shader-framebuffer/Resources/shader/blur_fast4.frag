    varying vec2 texCoord;
    
    uniform vec2  u_texelOffset;

    float rand(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }
    
    void main()
    {
        float rnd = rand(texCoord)*2.0-1.0;
        vec2 disp = (sign(rnd)*sin(abs(rnd)), sign(rnd)*cos(abs(rnd)));
        vec4 sum = vec4(0.0);
        sum += texture2D(CC_Texture0, texCoord);
        sum += texture2D(CC_Texture0, texCoord + disp * u_texelOffset);
        sum += texture2D(CC_Texture0, texCoord - 0.5 * disp * u_texelOffset);
        sum /= 3.0;
    	  gl_FragColor = vec4(sum.rgb, 1.0);
    }
