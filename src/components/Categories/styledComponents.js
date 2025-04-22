import styled from "styled-components";

export const CategoriesBgContainer = styled.div`
    min-height: 90vh;
    width: 100vw;
    display: flex;
`

export const CategoriesContainer = styled.div`
    min-height: 100%;
    width: 80%;

    @media (width < 776px) {
        width: 100%;
    }
`

export const CategoriesHeadingContainer = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (width < 776px) {
        height: 7vh;
    }
`

export const CategoriesHeading = styled.h1`
    font-size: 28px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 20px;

    @media (width < 776px) {
        font-size: 14px;
        padding-left: 10px;
    }
`

export const AddCategoryButton = styled.button`
    height: 7vh;
    width: 10vw;
    background-color: #1c3094;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-width: 0px;
    border-radius: 6px;
    margin-right: 25px;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
        height: 5vh;
        width: 20vw;    
        font-size: 8px;
        margin-right: 10px;
    }
`

export const CategoryPopupBgContainer = styled.div`
    height: 60vh;
    width: 50vw;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;

    @media (width < 776px) {
        justify-content: center;
    }
`

export const CloseButton = styled.button`
    height: 5vh;
    width: 2vw;
    background-color: transparent;
    color: #ffffff;
    display: ${props => props.ismobile ? 'none' : 'flex'};
    align-self: flex-end;
    margin-right: 5px;
    border-width: 0px;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
        display: ${props => props.ismobile ? 'flex' : 'none'};
    }
`

export const CategoriesListContainer = styled.ul`
    min-height: 80vh;
    width: 100%;
    background-color: #b5c8eb;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    padding-left: 0px;

    @media (width < 776px) {
        justify-content: center;
        margin-left: 0px;
    }
`

export const CategoriesFailureContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CategoriesFailureHeading = styled.h1`
    color: #ffffff;
    font-size: 42px;
    font-family: 'Roboto';
    font-weight: 700;

    @media (width < 776px) {
        font-size: 18px;
    }
`

export const CategoriesFailureText = styled.p`
    color: #f8fafc;
    font-size: 22px;
    font-family: 'Roboto';

    @media (width < 776px) {
        font-size: 12px;
    }
`

export const CategoriesFailureImg = styled.img`
    height: 40vh;
    width: 50vw;
`

export const RetryButton = styled.button`
    height: 42px;
    width: 90px;
    background-color: #4f46e5;
    color: #ffffff;
    font-size: 18px;
    font-family: 'Roboto';
    text-align: center;
    padding-top: auto;
    border-width: 0px;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
        height: 24px;
        font-size: 10px;
        padding: 3px;
    }
`