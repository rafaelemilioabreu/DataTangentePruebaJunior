import React, { useState } from 'react';
import Form from './Components/Form';
import Grid from './Components/Grid';
import NavBar from './Components/NavBar';


function App() {
  const [nombre, setNombre] = useState<string>("")
  return (
    <div>
      <NavBar nombre={nombre} />
      <Form setNombre={setNombre} />

      {nombre !== "" && <Grid />}
    </div>
  );
}

export default App;
