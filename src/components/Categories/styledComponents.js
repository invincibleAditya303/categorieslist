import styled from "styled-components";

export const CategoriesBgContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
`

export const CategoriesContainer = styled.div`
    min-height: 100%;
    width: 80%;
`

export const NavbarContainer = styled.div`
    height: 10vh;
    width: 100%;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const WebsiteTitleContainer = styled.div`
    height: 100%;
    width: 15vw;
    display: flex;
    align-items: center;
    margin-left: 15px;
`

export const WebsiteLogo = styled.img`
    height: 7vh;
    width: 10vw;
`

export const WebsiteTitle = styled.p`
    color: #ffffff;
    font-size: 48px;
    font-family: "Bree Serif";
    font-weight: bold;
`

export const LogoutButton = styled.button`
    height: 7vh;
    width: 7vw;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    font-family: "Roboto";
    padding: 7px;
    margin-right: 20px;
    border-radius: 6px;
    border: 2px #332155 solid;
    cursor: pointer;
    outline: none;
`

export const CategoriesHeading = styled.h1`
    font-size: 28px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 15px;
`

export const CategoriesListContainer = styled.ul`
    min-height: 80vh;
    width: 100%;
    background-color: #b5c8eb;
    display: flex;
    flex-wrap: wrap;
    margin-left: 15px;
    padding-left: 0px;
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
`

export const CategoriesFailureText = styled.p`
    color: #f8fafc;
    font-size: 22px;
    font-family: 'Roboto';
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
`