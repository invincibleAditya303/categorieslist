import { Component } from "react";

import Cookies from 'js-cookie'

import {CategoryPopupContainer, CategoryImageContainer, CategoryImage, CategoryFormContainer, CategoryInputContainer, CategoryLabelHeading, CategoryInputText, CategorySubmitButton, CategoryAdditionSuccessMsg, CategoryAdditionFailureMsg} from './styledComponents'

class CategoryPopup extends Component {
    state = {categoryName: '', itemCount: 0, categoryImage: null, showSuccessMsg: false, successMsg: '', showErrMsg: '', errMsg: ''}

    onSubmitCategory = async event => {
        event.preventDefault()

        const {categoryName, itemCount, categoryImage} = this.state
        const formData = new FormData()
        formData.append('categoryName', categoryName)
        formData.append('itemCount', itemCount)
        formData.append('categoryImage', categoryImage)
        
        const jwtToken = Cookies.get('userDetails')
        const apiUrl = 'https://categorymanagement-e3c554d18fdf.herokuapp.com/categories'
        const options = {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
        }

        const response = await fetch(apiUrl, options)
        console.log(response)

        if (response.ok) {
            const successMsg = await response.json()
            this.setState({categoryName: '', itemCount: 0, categoryImage: '', showSuccessMsg: true, successMsg})
        } else {
            const errMsg = await response.json()
            this.setState({showErrMsg: true, errMsg})
        }
    }

    onChooseImage = event => {
        this.setState({categoryImage: event.target.files[0]})
    }
    
    onChangeItemCount = event => {
        this.setState({itemCount: event.target.value})
    }
    
    onChangeCategoryName = event => {
        this.setState({categoryName: event.target.value})
    }

    render() {
        const {categoryName, itemCount, showSuccessMsg, successMsg, showErrMsg, errMsg} = this.state
        return (
            <CategoryPopupContainer>
                <CategoryImageContainer>
                    <CategoryImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1745058273/5464026_1_cocc64.jpg" alt="add category" />
                </CategoryImageContainer>
                <CategoryFormContainer onSubmit={this.onSubmitCategory}>
                    <CategoryInputContainer>
                        <CategoryLabelHeading htmlFor="category-name">Category Name</CategoryLabelHeading>
                        <CategoryInputText type='text' placeholder='Enter category' id="category-name" value={categoryName} onChange={this.onChangeCategoryName} />
                    </CategoryInputContainer>
                    <CategoryInputContainer>
                        <CategoryLabelHeading htmlFor="item-count">Item Count</CategoryLabelHeading>
                        <CategoryInputText type='text' placeholder='Enter item count' id="item-count" value={itemCount} onChange={this.onChangeItemCount} />
                    </CategoryInputContainer>
                    <CategoryInputContainer>
                        <CategoryLabelHeading htmlFor="category-image">Category Image</CategoryLabelHeading>
                        <CategoryInputText type='file' placeholder='Upload image' id="category-image" onChange={this.onChooseImage} required />
                    </CategoryInputContainer>
                    <CategorySubmitButton type="submit">Submit</CategorySubmitButton>
                    {showSuccessMsg && <CategoryAdditionSuccessMsg>{successMsg}</CategoryAdditionSuccessMsg>}
                    {showErrMsg && <CategoryAdditionFailureMsg>{errMsg}</CategoryAdditionFailureMsg>}
                </CategoryFormContainer>
            </CategoryPopupContainer>
        )
    }
}

export default CategoryPopup