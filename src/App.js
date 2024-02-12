import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
 console.log('value changed', value);
  },[value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

 const onChange = (e) =>{
  setValue(e.target.value)
 }

const clear = () => {
  setValue('')
}

  return {
    bind: {value,onChange},
    value,
    clear
  }
}

function App() {
  // const [name, setName] = useState("");

 const input = useInput('')
 const lastName = useInput('')

 useLogger(input.value)

  // const [lastName, setLastName] = useState("");

  // const changeHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const changeLastNameHandler= (e) => {
  //   setLastName(e.target.value);
  // };

  return (
    <div className={"container pt-3"}>
       <input type="text" {...input.bind}  />  
         {/*value={input.value} onChange={input.onChange} */} 
         <input type="text" {...lastName.bind}  /> 
       {/* //тоже самое */}
      {/* <input type="text" value={lastName} onChange={changeLastNameHandler} /> */}
      <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>

      <hr/>
      <h1>{input.value} {lastName.value}</h1>
    </div>
  );
}

export default App;
