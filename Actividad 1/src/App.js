import './App.css';
import imagen1 from "./imagenes/rey_sisebuto.png"
import imagen2 from "./imagenes/rey_atanagildo.png"
import imagen3 from "./imagenes/rey_leogivildo.png"
function App() {
  let nombres = ["Sisebuto", "Atanagildo", "Leogivildo"]
  return (
    <div className='cards'>
      <div className='card'>
        <img src={imagen1}/>
        <p>{nombres[0]}</p>
      </div>

      <div className='card'>
        <img src={imagen2}/>
        <p>{nombres[1]}</p>
      </div>

      <div className='card'>
        <img src={imagen3}/>
        <p>{nombres[2]}</p>
      </div>
    </div>
  );
}

export default App;
