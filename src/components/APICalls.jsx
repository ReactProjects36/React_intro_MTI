import { useState, useEffect } from "react";

export default function ApiCalls() {
  let [joke, setJoke] = useState("");
  let [punchline , setPunchline] = useState("")
  async function getJoke() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let data = await fetch(URL);
    let result = await data.json();
    setJoke(result.setup);
    setPunchline(result.punchline)
  }
  return (
    <div>
      <h3>Joke : {loke} </h3>
      <p>Punchline : {punchline}</p>
      <button onClick={getJoke}>Get Joke </button>
    </div>
  );
}
