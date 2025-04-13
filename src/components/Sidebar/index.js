import {Link, withRouter} from 'react-router-dom'

import {MdPlaylistAdd} from 'react-icons/md'

import {AiFillHome} from 'react-icons/ai'

import {FaFirefoxBrowser} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {
  SideBarContainer,
  LinkListContainer,
  LinkItemContainer,
  LinkItemTitle,
  ContactUsContainer,
  ContactHeading,
  SocialMediaContainer,
  SocialMediaItem,
  SocialMediaImage,
  ContactUsText,
} from './styledComponents'

const SideBar = () => (
        <SideBarContainer>
          <LinkListContainer>

              <LinkItemContainer>
                <AiFillHome size={22} />
                <LinkItemTitle>Dashboard</LinkItemTitle>
              </LinkItemContainer>
            
              <LinkItemContainer>
                <FaFirefoxBrowser size={22} />
                <LinkItemTitle>Product</LinkItemTitle>
              </LinkItemContainer>
            
              <LinkItemContainer>
                <SiYoutubegaming size={22} />
                <LinkItemTitle>Customers</LinkItemTitle>
              </LinkItemContainer>

            
              <LinkItemContainer>
                <MdPlaylistAdd size={26} />
                <Link to="/categories">
                    <LinkItemTitle>Categories</LinkItemTitle>
                </Link>
              </LinkItemContainer>
            
          </LinkListContainer>
          <ContactUsContainer>
            <ContactHeading>
              CONTACT US
            </ContactHeading>
            <SocialMediaContainer>
              <SocialMediaItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaItem>
            </SocialMediaContainer>
            <ContactUsText>
              Enjoy! Now to see more categories!
            </ContactUsText>
          </ContactUsContainer>
        </SideBarContainer>
)

export default withRouter(SideBar)