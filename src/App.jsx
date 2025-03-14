import { useState } from "react";

function App() {
  
  const [pets, setPets] = useState(["Dog", "Cat", "Rabbit", "Hamster"]);

  return (
    <div>
      <h1>My Furry Friends</h1>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet}</li>
        ))}
      </ul>
      <button onClick={() => setPets([...pets, "New Pet"])}>Add a Pet</button>
    </div>
  );
}

export default App;