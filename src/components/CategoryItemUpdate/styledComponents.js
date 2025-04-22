import styled from 'styled-components'

export const CategoryItemContainer = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: #91903f;
    display: flex;
`

export const CategoryItemUpdateContainer = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width < 776px) {
        width: 100%;
    }
`

export const CategoryItemFormContainer = styled.form`
    height: 50%;
    width:50%;
    background-color: #c6d9f7;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (width < 776px) {
        height: 60%;
        width: 60%;
    }
`

export const CategoryItemInputContainer = styled.div`
    hieght: 7vh;
    width: 30vw;
    margin-top: 15px;
`

export const CategoryItemLabelHeading = styled.label`
    font-size: 18px;
    font-family: "Roboto";

    @media (width < 776px) {
        font-size: 12px;
    }
`

export const CategoryItemInputText = styled.input`
    height: 6vh;
    width: 25vw;
    background-color: transparent;
    font-size: 18px;
    font-family: "Roboto";
    padding-left: 10px;
    border-radius: 6px;
    border: 2px #7f0cf2 solid;
    outline: none;

    @media (width < 776px) {
        width: 30vw;    
        font-size: 12px;
    }
`

export const CategoryItemEditButton = styled.button`
    height: 5vh;
    width: 5vw;
    background-color: #2563eb;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 4px;
    border-width: 0px;
    margin-top: 10px;
    curosr: pointer;
    outline: none;

    @media (width < 776px) {
        width: 7vw;
        font-size: 10px;
    }
`

export const MsgText = styled.p`
    color: #279123;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;

    @media (width < 776px) {
        font-size: 10px;
    }
`

export const ErrText = styled.p`
    color: #e04226;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;
`