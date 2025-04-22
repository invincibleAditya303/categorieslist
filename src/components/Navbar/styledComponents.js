import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (width < 776px) {
        display: none;
    }
`

export const NavbarMobileContainer = styled(NavbarContainer)`
    display: none;

    @media (width < 776px) {
        height: 7vh;
        width: 100vw;
        display: flex;
    }
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

    @media (width < 776px) {
        height: 5vh;
        width: 7vw;
        margin-left: 5px;
    }
`

export const NavbarMobileIconsContainer = styled.div`
    height: 5vh;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    margin-right: 30px;
    border-radius: 6px;
    border: 2px #332155 solid;
    cursor: pointer;
    outline: none;

    @media (width < 776px) {
        height: 5vh;
        width: 5vw;
        padding: 0px;
        margin-right: 0px;
        border-radius: 0px;
        border-width: 0px;
    }
`