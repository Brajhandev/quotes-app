import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import quotes from "./db/quotes.json";
import { getRandomQuotes } from "./utils/getRandomQuotes";
import bg1 from "./assets/fondo1.jpg";
import bg2 from "./assets/fondo2.jpg";
import bg3 from "./assets/fondo3.jpg";
import bg4 from "./assets/fondo4.jpg";

function App() {
  const imagesBg = ['bg-bg1', 'bg-bg2', 'bg-bg3', 'bg-bg4'];
  const [quote, setQuote] = useState(getRandomQuotes(quotes));

 

  const handleChange = () => {
    setQuote(getRandomQuotes(quotes));
  };

  // console.log(Math.floor(Math.random() * imagesBg.length))
console.log(Math.floor(Math.random() * imagesBg.length));

  return (
    <div
      className={`App flex flex-col justify-center items-center 
      ${imagesBg[Math.floor(Math.random() * imagesBg.length)]}`}
    >
      <ContainerInfo quote={quote} handleChange={handleChange} />
    </div>
  );
}

export default App;
