import {Link, withRouter} from 'react-router-dom'

import { FaRegFolder } from "react-icons/fa6"

import { FaHome } from "react-icons/fa"

import { FaPowerOff } from "react-icons/fa"

import {NavbarContainer, WebsiteTitleContainer, WebsiteLogo, WebsiteTitle, LogoutButton, NavbarMobileContainer, NavbarMobileIconsContainer} from './styledComponents'

const Navbar = props => {
    const {onClickLogout} = props
    const onClickLogoutButton = () => onClickLogout()
    return (
        <>
            <NavbarContainer>
                <WebsiteTitleContainer>
                    <WebsiteLogo src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1744568132/shopping-cart-3d-render-icon_gmd4xd.jpg" alt="website logo" />
                        <WebsiteTitle>fastcart</WebsiteTitle>
                </WebsiteTitleContainer>
                <LogoutButton type='button' onClick={onClickLogoutButton}>Logout</LogoutButton>
            </NavbarContainer>
            <NavbarMobileContainer>
                <WebsiteLogo src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1744568132/shopping-cart-3d-render-icon_gmd4xd.jpg" alt="website logo" />
                <NavbarMobileIconsContainer>
                    <FaHome size={20} color="#ffffff" />
                    <Link to='/categories'>
                        <FaRegFolder size={20} color="#ffffff" />
                    </Link>
                    <LogoutButton type="button" onClick={onClickLogoutButton}>
                        <FaPowerOff size={20} />
                    </LogoutButton>
                </NavbarMobileIconsContainer>
            </NavbarMobileContainer>
        </>
    )
}

export default withRouter(Navbar)