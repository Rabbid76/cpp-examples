#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.027571;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.028889;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.030166;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.031391;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.032552;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.033640;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034644;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035555;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.036364;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.037062;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.037644;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.038103;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.038434;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.038634;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.038701;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.038634;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.038434;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.038103;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.037644;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.037062;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.036364;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.035555;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034644;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.033640;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.032552;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.031391;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.030166;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.028889;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.027571;
}

