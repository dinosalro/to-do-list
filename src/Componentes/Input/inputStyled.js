import styled from "styled-components";

export const ContainerInput = styled.div`
display: flex;
margin-bottom:20px ;
input{
    height: 30px;
    width: 100%;
    border: none;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}

button{
    height: 30px;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: none;
    margin-left: 4px;
    background-color: pink;

    :hover{
        background-color: #34CB55;
    }

}


`