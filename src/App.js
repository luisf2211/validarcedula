import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';

function App() {

  const [cedula, setCedula] = useState("");  
  const [handler, setHandler] = useState();  
  const [value, setValue] = useState();  
  
  async function consultar() {
    
    if (cedula !== '') {

        setValue(null); // Se enviara primero null para mostrar el spinner de carga mientras el servidor responde con la data. 

        const response = await fetch(`https://api.digital.gob.do/v3/cedulas/${cedula}/validate`); 

        const data = await response.json(); 
        
        setHandler(true); // Mostrar componenente del Alert.
        
        setValue(data.valid); // Validar si es true o false.
        setCedula(""); // Vaciar el input
    }

  }

  return (
    <div className="App">
        <br/>
        <br/>
        <div className='container'>
        <h1>
        🇩🇴 Validar cédula 🇩🇴
        </h1>
        <div>
          <p>
            Digita tu cédula electoral
          </p>  
            <br/>
            <br/>
          <div className="input-group mb-3">
            <input type="text" 
              onChange={e => setCedula(e.target.value)}  
              className="form-control " 
              value={cedula}
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"
            />
            <button onClick={consultar} className="btn btn-primary">Consultar</button>
          </div>
          <div>
            {handler ? (<Alert isValid={value}/>) : (<h1></h1>)}
          </div>     
        </div>
      </div>
    </div>
  );
}

export default App;
