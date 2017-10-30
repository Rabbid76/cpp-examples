#ifdef GL_ES
varying highp vec2 blurCoordinates[9];
#else
varying vec2 blurCoordinates[9];
#endif
void main()
{
  gl_FragColor = vec4(0.0);
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[0]) * 0.000134;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[1]) * 0.004432;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[2]) * 0.053991;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[3]) * 0.241971;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[4]) * 0.398943;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[5]) * 0.241971;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[6]) * 0.053991;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[7]) * 0.004432;
  gl_FragColor += texture2D(CC_Texture0, blurCoordinates[8]) * 0.000134;
}

