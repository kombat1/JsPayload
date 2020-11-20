let hack = document.getElementsByTagName('body');
for (i=0;i<3;i++){
hack = document.createElement('div');
hack.className = 'hack'+i;
hack.innerHTML = '<img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'><img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'>';
hack.innerHTML = '<img src=\'https://media.tenor.com/images/de5baa5883f340e36d84e5251175f677/tenor.gif\'>
document.body.prepend(hack);}
