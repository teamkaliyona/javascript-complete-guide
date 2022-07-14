//console.log(document.getElementById('heading'));
//let heading = document.getElementById('heading').innerText;
//console.log(heading);

//console.log(document.querySelector('ul'));
//console.log(document.querySelector('.list'));

//console.log(document.querySelectorAll('li'));
//console.log(document.getElementsByTagName('li'));

//Manipulating DOMs
document.getElementById('heading').innerText = 'Namaskara';

document.querySelector('ul').firstElementChild.textContent = 'Java';

document.querySelector('ul').lastElementChild.innerHTML = '<h3> JavaScript </h3>';

document.querySelector('.list').style.background = 'violet';
