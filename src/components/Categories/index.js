import {Component} from 'react'

import Cookies from 'js-cookie'

import {RingLoader} from 'react-spinners'

import Popup from 'reactjs-popup'

import { IoMdClose } from "react-icons/io"

import {CategoriesBgContainer, CategoriesContainer, CategoriesHeadingContainer, CategoriesHeading, AddCategoryButton, CategoryPopupBgContainer, CloseButton, CategoriesListContainer, CategoriesFailureContainer, CategoriesFailureHeading, CategoriesFailureImg, CategoriesFailureText, RetryButton} from './styledComponents'

import SideBar from '../Sidebar'

import Navbar from '../Navbar'

import CategoryListItem from '../CategoryListItem'

import CategoryPopupContainer from '../CategoryPopup'

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

        const apiUrl = process.env.REACT_APP_API_URL
        const categoriesUrl = `${apiUrl}/categories`
        const jwtToken = Cookies.get('userDetails')
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            credentials: 'include',
        }
        const response = await fetch(categoriesUrl, options)

        console.log(response)
        console.log(response.ok)
        
        if (response.ok) {
            const data = await response.json()
            const updatedData = data.map(eachCategory => ({
                categoryId: eachCategory.category_id,
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
                    <CategoryListItem categoryDetails={eachCategory} key={eachCategory.categoryId} />
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
            <>
                <Navbar onClickLogout={this.onClickLogout} />
                <CategoriesBgContainer>
                    <SideBar />
                    <CategoriesContainer>
                        <CategoriesHeadingContainer>
                            <CategoriesHeading>Categories</CategoriesHeading>
                            <Popup
                                modal
                                trigger={
                                    <AddCategoryButton type='button'>+ Add Category</AddCategoryButton>
                                }
                                position='top center'
                            >
                                {close => (
                                    <CategoryPopupBgContainer>
                                        <CloseButton type='button' onClick={() => close()}>
                                            <IoMdClose size={30} />
                                        </CloseButton>
                                        <CloseButton type='button' onClick={() => close()} ismobile>
                                            <IoMdClose size={42} />
                                        </CloseButton>
                                        <CategoryPopupContainer />
                                    </CategoryPopupBgContainer>
                                )}
                            </Popup>
                        </CategoriesHeadingContainer>
                        {this.renderStatusView()}
                    </CategoriesContainer>
                </CategoriesBgContainer>
            </>
        )
    }
}

export default Categories