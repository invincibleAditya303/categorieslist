import { Component } from "react";

import Cookies from 'js-cookie'

import Sidebar from '../Sidebar'

import Navbar from '../Navbar'

import { CategoryItemContainer, CategoryItemEditButton, CategoryItemFormContainer, CategoryItemInputContainer, CategoryItemInputText, CategoryItemLabelHeading, CategoryItemUpdateContainer, MsgText } from './styledComponents'

const apisStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
    failure: 'FAILURE',
  }

class CategoryItemUpdate extends Component {
    state = {categoryItemName: '', categoryItemCount: 0, categoryItemImage: '',  showMsg: false, msg: '', apiStatus: apisStatusConstants.initial}

    

    onEditCategory = async event => {
        event.preventDefault()

        const {categoryItemName, categoryItemCount, categoryItemImage} = this.state
        const formData = new FormData()

            formData.append('categoryName', categoryItemName)
            formData.append('itemCount', categoryItemCount)
            formData.append('categoryImage', categoryItemImage)
        

        const jwtToken = Cookies.get('userDetails')
        const {match} = this.props
        const {params} = match
        const {categoryId} = params
        const apiUrl = process.env.REACT_APP_API_URL
        const editCategoryUrl = `${apiUrl}/categories/${categoryId}`
        const options  = {
            method: 'PUT',
            body: formData,
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }
        
        const response = await fetch(editCategoryUrl, options)
        console.log(response)
        const msg = await response.json()

        this.setState({showMsg: true, msg})
    }
    
    onChooseCategoryImage = event => {
        this.setState({CategoryItemImage: event.target.files[0]})
    }
    
    onChangeCategoryItemCount = event => {
        this.setState({categoryItemCount: event.target.value})
    }
    
    onChangeCategoryItemName = event => {
        this.setState({categoryItemName: event.target.value})
    }
   

    render() {
        const {categoryItemName, categoryItemCount, showMsg, msg} = this.state

        return (
            <>
                <Navbar />
                <CategoryItemContainer>
                    <Sidebar />
                    <CategoryItemUpdateContainer>
                    <CategoryItemFormContainer onSubmit={this.onEditCategory}>
                            <CategoryItemInputContainer>
                                <CategoryItemLabelHeading htmlFor="category item name">Category Name</CategoryItemLabelHeading>
                                <CategoryItemInputText type='text' placeholder="Enter Category" id='category item name' value={categoryItemName} onChange={this.onChangeCategoryItemName} />
                            </CategoryItemInputContainer>
                            <CategoryItemInputContainer>
                                <CategoryItemLabelHeading htmlFor="category item count">Item Count</CategoryItemLabelHeading>
                                <CategoryItemInputText type='text' placeholder="Enter Item Count" id='category item count' value={categoryItemCount} onChange={this.onChangeCategoryItemCount} />
                            </CategoryItemInputContainer>
                            <CategoryItemInputContainer>
                                <CategoryItemLabelHeading htmlFor="category item image">Category Image</CategoryItemLabelHeading>
                                <CategoryItemInputText type='file' placeholder="Enter Category Image" id='category item image' onChange={this.onChooseCategoryImage} />
                            </CategoryItemInputContainer>
                            <CategoryItemEditButton type='submit'>Edit</CategoryItemEditButton>
                            {showMsg && <MsgText>{msg}</MsgText>}
                        </CategoryItemFormContainer>
                    </CategoryItemUpdateContainer>
                </CategoryItemContainer>
            </>
        )
    }
}

export default CategoryItemUpdate