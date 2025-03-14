import {useState} from "react";

function App() {
  const [message, setMessage] = useState ("My first fluffy website");
  return (
    <div>
      <h1>Furry Friends List</h1>
      <p>My first React website!</p>
    </div>
  );
}

export default App;