#ifdef GL_ES
varying highp vec2 blurCoordinates[29];
#else
varying vec2 blurCoordinates[29];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.028260;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.029463;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.030622;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.031728;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.032773;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.033748;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.034645;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.035457;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.036175;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[9]) * 0.036795;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[10]) * 0.037309;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[11]) * 0.037714;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[12]) * 0.038006;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[13]) * 0.038183;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[14]) * 0.038242;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[15]) * 0.038183;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[16]) * 0.038006;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[17]) * 0.037714;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[18]) * 0.037309;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[19]) * 0.036795;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[20]) * 0.036175;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[21]) * 0.035457;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[22]) * 0.034645;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[23]) * 0.033748;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[24]) * 0.032773;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[25]) * 0.031728;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[26]) * 0.030622;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[27]) * 0.029463;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[28]) * 0.028260;
}

