console.log('');

const apellido ='Cardenas';
let nombre ='Andres';

let variableNum = 11;

console.log('señor ' + apellido +' su multiplicacion es :'+(11*7));

console.log(` 
STRING TEMPLATE
: Señor ${apellido}
 su multiplicacion es :
  ${variableNum*7}`
  );

  console.log(`llamando una funcion ==> ${fx_randomico('XYZ')}`);


  function fx_randomico(parmString){
      return `Numero Random ${Math.random() *100} parametro >>>> ${parmString}`
  }
