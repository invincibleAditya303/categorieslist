import {Component} from 'react'

import Cookies from 'js-cookie'

import {RingLoader} from 'react-spinners'

import {CategoriesBgContainer, CategoriesContainer,NavbarContainer,WebsiteTitleContainer,WebsiteLogo, WebsiteTitle, LogoutButton, CategoriesHeading, CategoriesListContainer, CategoriesFailureContainer, CategoriesFailureHeading, CategoriesFailureImg, CategoriesFailureText, RetryButton} from './styledComponents'

import SideBar from '../Sidebar'

import CategoryListItem from '../CategoryListItem'

const apisStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
    failure: 'FAILURE',
  }

class Categories extends Component {
    state = {categoriesList: [], apiStatus: apisStatusConstants.initial}

    componentDidMount() {
        this.getCategoriesList()
    }

    onClickRetry = () => {
        this.getCategoriesList()
    }

    onClickLogout = () => {
        const {history} = this.props
        Cookies.remove('userDetails')
        history.replace('/login')
        
    }

    getCategoriesList = async () => {
        this.setState({apiStatus: apisStatusConstants.inProgress})

        const apiUrl = 'https://categorymanagement-e3c554d18fdf.herokuapp.com/categories'
        const jwtToken = Cookies.get('userDetails')
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            credentials: 'include',
        }
        const response = await fetch(apiUrl, options)

        console.log(response)
        console.log(response.ok)
        
        if (response.ok) {
            const data = await response.json()
            const updatedData = data.map(eachCategory => ({
                id: eachCategory.id,
                categoryName: eachCategory.category_name,
                itemCount: eachCategory.item_count,
                categoryImage: eachCategory.category_image
            }))

            this.setState({categoriesList: updatedData, apiStatus: apisStatusConstants.success})
        } else {
            this.setState({apiStatus: apisStatusConstants.failure})
        }
    }

    renderLoaderView = () => (
        <RingLoader color="#36d7b7"  size={30} />
    )

    renderFailureView = () => (
        <CategoriesFailureContainer>
            <CategoriesFailureImg src="https://assets.ccbp.in/frontend/react-js/failure-img.png" alt="failuere view" />
            <CategoriesFailureHeading>Oops! Something went Wrong</CategoriesFailureHeading>
            <CategoriesFailureText>We cannot seem to find the page you are looking for</CategoriesFailureText>
            <RetryButton type='button' onClick={this.onClickRetry}>Retry</RetryButton>
        </CategoriesFailureContainer>
    )

    renderSuccessView = () => {
        const {categoriesList} = this.state

        return (
            <CategoriesListContainer>
                {categoriesList.map(eachCategory => 
                    <CategoryListItem categoryDetails={eachCategory} key={eachCategory.id} />
                )}
            </CategoriesListContainer>
        )
    }

    renderStatusView = () => {
        const {apiStatus} = this.state
        console.log(apiStatus)
    
        switch (apiStatus) {
          case apisStatusConstants.success:
            return this.renderSuccessView()
          case apisStatusConstants.inProgress:
            return this.renderLoaderView()
          case apisStatusConstants.failure:
            return this.renderFailureView()
          default:
            return null
        }
      }


    render() {
        return (
            <CategoriesBgContainer>
                <SideBar />
                <CategoriesContainer>
                    <NavbarContainer>
                        <WebsiteTitleContainer>
                            <WebsiteLogo src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1744568132/shopping-cart-3d-render-icon_gmd4xd.jpg" alt="website logo" />
                            <WebsiteTitle>fastcart</WebsiteTitle>
                        </WebsiteTitleContainer>
                        <LogoutButton type='button' onClick={this.onClickLogout}>Logout</LogoutButton>
                    </NavbarContainer>
                    <CategoriesHeading>Categories</CategoriesHeading>
                    {this.renderStatusView()}
                </CategoriesContainer>
            </CategoriesBgContainer>
        )
    }
}

export default Categories