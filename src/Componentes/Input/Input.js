import React from 'react'
import { ContainerInput } from './inputStyled'

const Input = (props) => {
const [text, setText] = React.useState("")
const [contador, setContador] = React.useState(0)

function addTask(){
    setContador(contador+1)
    const novaTask = {texto: text, id: contador}
    props.setTask([...props.task, novaTask ])
    setText("")
    console.log(props.task)
  }

  return (
    <ContainerInput>
      <input onChange={(event) => {setText(event.target.value)}} value={text} onKeyDown={(event) => {if(event.key === "Enter"){ addTask()}}} type='text' placeholder='Digite uma tarefa'/>
      <button onClick={addTask}  >🐸</button>
    </ContainerInput>
  )
}

export default Input
