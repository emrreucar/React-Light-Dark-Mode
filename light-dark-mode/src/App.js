import React, { useState } from 'react';
import Icerik from './components/icerik';
import './App.css';

export const TemaVerisi = React.createContext();

const tema = {
  dark: {
    color: "#fff",
    backgroundColor: "#000",
  },

  light: {
    color: "#000",
    backgroundColor: "#fff",
  },
}



function App() {

  const [deger, setDeger] = useState(tema.dark);

  function degistir(){
    if(tema.dark === deger){
      setDeger(tema.light);
    }
    else{
      setDeger(tema.dark);
    }
  }
  

  return (
    <div className="App">

    <button onClick={degistir}>
      {tema.dark === deger ? "Açık Mod" : "Koyu Mod"}
    </button>

      <TemaVerisi.Provider value = {deger}>
        <Icerik/>
      </TemaVerisi.Provider>
      
    </div>
  );
}

export default App;
