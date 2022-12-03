import React from "react";
import Banner from "./Componentes/Banner/Banner";
import Input from "./Componentes/Input/Input";
import List from "./Componentes/List/List";
import GlobalStyled from "./GlobalStyled";
import {Container, ContainerMain} from './appStyled'


function App() {

  const [task, setTask] = React.useState([])


   return (
    <Container>
      <GlobalStyled/>
      <Banner/>
      <ContainerMain>
      <Input setTask={setTask} task={task} />
      <List setTask={setTask} task={task}/>
      </ContainerMain>
    </Container>
  );
}

export default App;
