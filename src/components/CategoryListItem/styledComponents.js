import styled from "styled-components";

export const CategoryListItemContainer = styled.li`
    height: 31vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    list-style-type: none;

    @media (width < 776px) {
        height: 30vh;
        width: 40vw;
    }
`

export const CategoryListItemImage = styled.img`
    height: 20vh;
    width: 100%;
`

export const CategoryListItemTextContainer = styled.div`
    height: 11vh;
    width: 100%;
    background-color: #ffffff;

    @media (width < 776px) {
        height: 1ovh;
    }
`

export const CategoryListItemTitle = styled.p`
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 10px;

    @media (width < 776px) {
        font-size: 10px;
    }
`

export const CategoryListItemText = styled.p`
    font-size: 14px;
    font-family: "Roboto";
    padding-left: 10px;

    @media (width < 776px) {
        font-size: 8px;
    }
`