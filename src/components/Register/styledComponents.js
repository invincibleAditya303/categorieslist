import styled  from "styled-components";

export const RegisterBgContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RegisterContainer = styled.form`
    height: 70vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 2px #585d75 solid;
`

export const InputContainer = styled.div`
    height: 7vh;
    width: 70%;
    margin-top: 20px;
`

export const LabelHeading = styled.label`
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 400;
`

export const InputText = styled.input`
    height: 5vh;
    width: 100%;
    background-color: transparent;
    font-size: 18px;
    font-family: "Roboto";
    padding-left: 5px;
    border-radius: 5px;
    border: 2px #000000 solid;
    outline: none;
`

export const SubmitButton = styled.button`
    height: 5vh;
    width: 5vw;
    background-color: #2a5787;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    margin-top: 15px;
    border-width: 0px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
`