import React, { useEffect, useRef, useState } from "react";

function App() {
//  const[rederCount, setRenderCount]= useState(1)
 const[value, setValue]= useState('initial')
 const rederCount = useRef(1)
 const inputRef = useRef(null) // использование инпутов
 const prevValue = useRef('')  // использование предыдущего состояния


//  useEffect(() => {
//    setRenderCount(prev => prev + 1) 
     //useEffect вызывается постоянно,так как нет зависимости ...такой способ не подходит нужно использовать useRef
//  })



 useEffect(() => {
  rederCount.current++
}) // это обьект,те состояния которые мы определяем через хук useRef они сохраняются между рендерами компонента,
    //  но при этом когда меняем данные мы не вызываем рендер компонента
    // если мы хотим сохранить что-то между рендерами мы используем useRef и не хотим перерисовывать

 useEffect(() => {
   prevValue.current = value
 }, [value])


const focus = () => inputRef.current.focus()

  return (
    <div>
     <h1>Количество рендеров: {rederCount.current}</h1>
     <h2>Прошлое состояние: {prevValue.current}</h2>
     <input type='text' onChange={(e) =>{setValue(e.target.value)}} value={value} />
     <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  );
}

export default App;
