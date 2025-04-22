import styled from "styled-components";

export const CategoryPopupContainer = styled.div`
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    border-radius: 8px;

    @media (width < 776px) {
        justify-content: center;
    }
`

export const CategoryImageContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width < 776px) {
        display: none;
    }
`

export const CategoryImage = styled.img`
    height: 30vh;
    width: 20vw;
`

export const CategoryFormContainer = styled.form`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    border: 2px #332155 solid;
    margin-right: 15px;

    @media (width < 776px) {
        width: 95%;
        margin-right: 0px;
    }
`

export const CategoryInputContainer = styled.div`
    height: 10vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 4px;
    margin-top: 15px;

    @media (width < 776px) {
        width: 30vw;
    }
`

export const CategoryLabelHeading = styled.label`
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 3px;

    @media (width < 776px) {
        font-size: 10px;
    }
`

export const CategoryInputText = styled.input`
    height: 9vh;
    width: 100%;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 5px;
    border-width: 0px;
    border: 2px #332155 solid;

    @media (width < 776px) {
        font-size: 10px;
    }
`

export const CategorySubmitButton = styled.button`
    height: 36px;
    width: 80px;
    background-color: #2a5787;
    color: #ffffff;
    font-size: 14px;
    font-family: "Roboto";
    padding: 5px;
    margin-top: 10px;
    border-width: 0px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
        height: 22px;
        font-size: 8px;
        padding: 3px;
    }
`

export const CategoryAdditionSuccessMsg = styled.p`
    color: #279123;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;

    @media (width < 776px) {
        font-size: 10px;
        padding-bottom: 3px;
    }
`

export const CategoryAdditionFailureMsg = styled.p`
    color: #e04226;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;

    @media (width < 776px) {
        font-size: 10px;
        padding-bottom: 3px;
    }
`