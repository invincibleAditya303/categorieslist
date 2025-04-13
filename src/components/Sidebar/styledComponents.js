import styled from 'styled-components'

export const SideBarContainer = styled.div`
  height: 90vh;
  width: 20vw;
  background-color: #1f2854;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LinkListContainer = styled.ul`
  height: 10vh;
  width: 15vw;
  padding-left: 0px;
  margin-left: 15px;
`

export const LinkItemContainer = styled.li`
  width: 100%;
  color: #475569;
  display: flex;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  padding-left: 0px;
`

export const LinkItemTitle = styled.p`
  font-size:16px;
  font-family: "Roboto";
  padding-left: 8px;
`

export const ContactUsContainer = styled.div`
  height: 20vh;
  width: 15vw;
  display:  flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  margin-bottom: 20px;
`

export const ContactHeading = styled.p`
  color: #00306e;
  font-size: 18px;
  font-family: "Roboto";
  font-weight: bold;
`

export const SocialMediaContainer = styled.ul`
  width: 12vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0px;
`

export const SocialMediaItem = styled.li`
  list-style-type: none;
`

export const SocialMediaImage = styled.img`
  height: 3vh;
  width: 3vw;
`

export const ContactUsText = styled.p`
  color: #00306e;
  font-size: 14px;
  font-family: "Roboto";
`