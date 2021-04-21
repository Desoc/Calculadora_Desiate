
function calcular(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var opcion = document.getElementById("opcion").value;

  switch(opcion){
    case 'Sumar' :
      suma = num1 + num2;
      alert('El resultado de la suma es: '+suma);
      break;
    case 'Restar':
      resta = num1 - num2;
      alert('El resultado de la resta es: '+resta);
      break;
    case 'Multiplicar':
      multiplicar = num1 * num2;
      alert('El resultado de la multiplicacion es: '+multiplicar);
      break;
    case 'Dividir':
      dividir = num1 / num2;
      alert('El resultado de la division es: '+dividir);
      break;
    default:
      alert('Selecciona una operacion')
      break;
  }

}
document.querySelector('#enviar').addEventListener('click', function () { calcular() });