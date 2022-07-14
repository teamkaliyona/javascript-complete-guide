function requestToFillForm() {
  document.getElementById('msg').innerText = 'Please fill the form';
}

function changeColor() {
  document.querySelector('input').style.background= 'yellow';
}

function isMandatory() {
  let data = document.getElementById('course').value;
  if(data === ""){
    document.getElementById('course').style.background= 'red';
  } else {
    document.getElementById('course').style.background= 'white';
  }
}

function submitMessage(){
  document.write('<h2> Thank you for filling the form </h2>');
}