import React from 'react'
import {ContainerList} from './listStyled'

const List = (props) => {

   function removerTask(id){
    const filtrado = props.task.filter((tarefa) =>{ return tarefa.id !== id })
    props.setTask(filtrado)
   }

  return (
    <ContainerList>
      {props.task.filter((tarefa) =>{
        return (tarefa.texto !== "")
      }).map((tarefa) => {
        return(
      
            <>
            <li key={tarefa.id}> 
            <div>
            <input type="checkbox" /> 
            {tarefa.texto}
            </div>
            <div>
            <button onClick={() => {removerTask(tarefa.id)}}>🍄</button>
            </div>
            </li>
            <hr/>
            </>
          
          
        )
      })}
    </ContainerList>
  )
}

export default List
