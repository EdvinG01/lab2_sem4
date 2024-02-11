//EVENTO FOCUS
document.getElementById('cuadro3').addEventListener('focus', function() {
  this.style.backgroundColor = 'purple';
  document.getElementById('info3').innerText = "Cuando se recibe un enfoque, se proporciona un resultado que es el cambio de color de este cuadro.";
});

//EVENTO MOUSEOVER
document.getElementById('cuadro1').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'blue';
  document.getElementById('info1').innerText = "Este cuadro cambia de color cuando el puntero/cursor se mueve sobre el";
});

//EVENTO CLICK
document.getElementById('cuadro2').addEventListener('click', function() {
  this.style.backgroundColor = 'red';
  document.getElementById('info2').innerText = "Aqui el cuadro cambia de color al hacer click";
});