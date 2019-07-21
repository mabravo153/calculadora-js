//esta practiva es recomendable hacerla, verificar que todo el documento js corre luego que/haya cargado 
//el html, esto lo hacemos para evitar que os salgan errores ocacionados por
//algun elemento que no haya cargado en el html



(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    //todo el codigo de js lo pondremos aqui

    

    
     
     while (true){

      let valorIngresado = prompt('Ingresa un numero: 1. suma, 2. resta, 3. multiplicacion, 4. division');

      if (valorIngresado == null || undefined) {
        
        alert('estas saliendo');
        break;

      } else if (isNaN(valorIngresado) != true) {
        
        let num1 = prompt('ingresa un numero: ');
        let num2 = prompt('ingresa otro numero: ');

        switch (valorIngresado) {
          case "1":
            alert(Number(num1) + Number(num2))
            break;
          case '2':
            alert(Number(num1) - Number(num2))
            break;
          case '3':
            alert(Number(num1) * Number(num2))
            break;
          case '4':
            alert(Number(num1) / Number(num2))
            break;

          default:
            alert('numero incorrecto')
            break;
        }

      }else{
        continue
      }

     }
 
  });
})();

 