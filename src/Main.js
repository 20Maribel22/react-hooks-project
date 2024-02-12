import React from "react";
import { useAlert } from "./Alert/AlertContext";

function Main() {
    const {show} = useAlert()
  return (
    <>
    <h1>Привет в мире с Context</h1>
    <button onClick={ () => show('Этот текст из Main.js')} className="btn btn-success">Показать alert</button>
    </>
  )
  
}

export default Main