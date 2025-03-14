import {useState} from "react";
import { puppyList } from "../data"; // Import the puppyList data

function App() {
  const [puppies, setpuppies] = useState (puppyList);

  // Console log the puppies daata to check if its loading 
  console.log(puppies);
  return (
    <div className="App">
      <h1>Furry Friends List</h1>
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{}</p>
      }

      )}
      <p>My first React website!</p>
    </div>
  );
}

export default App;