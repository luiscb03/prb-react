import './App.css';

function accionar() {
    const text = document.getElementById("texto").value
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const vocales = ["a", "e", "i", "o", "u"]

    let contadorNumeros = 0
    let contadorVocales = 0

    const cadena = text.split("")
    console.log(cadena)

    for (let i = 0; i < cadena.length; i++) {
      if(vocales.includes(cadena[i])){
        contadorVocales += 1
      }
      // if(numeros.includes(cadena[i])){
      //   contadorNumeros += 1
      // }
    }

    for(var i in numeros){
        if(cadena.includes(i)){
          contadorNumeros += 1
        }
      }

  alert("La cantidad de numeros es: "+contadorNumeros+"\nLa cantidad de vocales es: "+contadorVocales)
}

function App() {
  return (
    <div className="App">
      <input type='text' id='texto'></input>
      <button id='boton' onClick={accionar}> Aceptar </button>
    </div>
  );
}

export default App;
