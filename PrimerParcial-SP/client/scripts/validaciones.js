export const validarCampoVacio = (e) => {
    const input = e.target;
    input.value.trim() ? clearError(input) : setError(input, "Campo requerido");
  };
  

  export const validarString = (e) => {
    const pattern = /^[a-zA-Z-' ]*$/; 
    const input = e.target;
    const string = input.value.trim();
    if (validarLongitudMaxima(input, 25)) {
      setError(input, "Debe tener menos de 25 caracteres");
    } 
    else{
      pattern.test(string) ? clearError(input) : setError(input, "Titulo Invalido");
    }
      
    
  };


  export const validarPrecio = (e) => {
    const pattern = /^[0-9]*$/; 
    const input = e.target;
    const precio = input.value.trim();
  
    if (validarCantidadPrecio(input, 50000,0)){
      setError(input, "El precio debe ser entre 50000 y 0");
    }else{
      pattern.test(precio) ? clearError(input) : setError(input, "Precio Invalido");

    }
      
    
  };

  export const validarNumero = (e) => {
    const pattern = /^[0-9]*$/; 
    const input = e.target;
    const numero = input.value.trim();
  
    
      pattern.test(numero) ? clearError(input) : setError(input, "Cantidad Invalida");
    
  };

  
  
  const validarLongitudMaxima = (input, maximo) =>
  input.value.trim().length > maximo;

  const validarCantidadPrecio = (input, maximo,minimo) =>
  parseInt(input.value.trim()) > maximo 

  const setError = (input, mensaje) => {
    const $small = input.nextElementSibling;
    $small.textContent = mensaje || `${input.name} requerido`;
    input.classList.add("inputError");
    $small.classList.add("danger");
  };
  const clearError = (input, mensaje) => {
    const $small = input.nextElementSibling;
    $small.textContent = "";
    input.classList.remove("inputError");
    $small.classList.remove("danger");
  };
  