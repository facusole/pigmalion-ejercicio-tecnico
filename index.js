// Examen técnico trainee Pigmalion — Facundo Solé

// En esta función se asume que los recursos de la PC son ilimitados

function sumaDeDosNúmeros(numeros, sumaRequerida) {
    // Se recorre el array de números.
    for (let i = 0; i < numeros.length; i++) {
      // Se toma el primer valor y se compara con el resto del array. Devuelve true si se encuentra la suma requerida.
      for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] + numeros[j] === sumaRequerida) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  // En esta función los recursos no son ilimitados se utiliza un set para reducir el tiempo de ejecución a una complejidad lineal, recorriendo el array de números una sola vez.
  function twoSumToX(numbersArray, requiredSum) {
    let set = new Set();
  
    // Se recorre el array de números.
    for (const number of numbersArray) {
      let substractionResult = requiredSum - number;
  
      // Si el substractionResult ya se encuentra en la set, se devuelve true y se termina la ejecución. Si no está, se guarda substractionResult en la hashTable.
      if (set.has(substractionResult)) return true;
  
      set.add(number);
    }
  
    return false;
  }
  
  sumaDeDosNúmeros([1, 4, 3, 9], 8);
  sumaDeDosNúmeros([1, 4, 3, 4], 8);
  
  twoSumToX([1, 4, 3, 9], 8);
  twoSumToX([1, 4, 3, 4], 8);
  