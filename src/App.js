import './App.css';
import { useState, useEffect } from 'react';  // useState() y useEffect() son hooks de React | useState() es para crear un estado y useEffect() es para ejecutar código cuando se renderiza el componente

function App() {

  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {  // useEffect() se ejecuta cuando se renderiza el componente
    const url = 'https://randomuser.me/api/';
    const peticion = fetch(url);  // fetch () es para hacer peticiones a una API

    peticion  // fetch () devuelve una promesa
      .then((response) => response.json())  // response.json() es para convertir la respuesta en un objeto
      .then((data) => {
        setNombre(`${data.results[0].name.first} ${data.results[0].name.last}`)
        setImagen(data.results[0].picture.large)
      }) // data.results[0].name.first es para acceder a la propiedad name.first del objeto data que es el que contiene la respuesta de la API (en este caso, la API devuelve un objeto con una propiedad results que es un array con un objeto que contiene la propiedad name que es un objeto con las propiedades first y last)
      .catch((error) => console.log(error));  // catch() es para capturar errores
  }, []);  // [] es para que solo se ejecute una vez

  return (
    <>
      <h1>Empleado del mes: </h1>
      {nombre}
      <div><img src={imagen} alt='IMG'></img></div>
    </>
  );
}

export default App;
