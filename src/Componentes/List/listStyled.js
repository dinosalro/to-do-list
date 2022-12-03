import styled from "styled-components";

export const ContainerList = styled.ul`

li{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;

    div:first-child{
        display: flex;
        align-items: center;
        font-size: large;
        input{
            margin-right: 4px;
            
        }
    }

    div:last-child{
        button{
    height: 30px;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: none;
    margin-left: 4px;
    background-color: #F4C464;

    :hover{
        background-color: #EC1414;
    }

}
    }

}


`