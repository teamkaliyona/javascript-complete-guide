let hour = 17;

if(hour >= 5 && hour <=10) {
  document.write('Shubodaya');
} else if(hour>=16 && hour <=20){
  document.write('Shubasanje');
} else {
  document.write('Shubaratri');
}

//switch

let signalColor = 'blue';

switch(signalColor) {
  case 'red':
    document.write('<p>Please Stop</p>');
    break;
  case 'yellow':
      document.write('<p>Get Ready</p>');
      break;
  case 'green':
      document.write('<p>You can go</p>');
      break;
  default:
      document.write('<p>Confused. Please wait for proper signal</p>');
  
}