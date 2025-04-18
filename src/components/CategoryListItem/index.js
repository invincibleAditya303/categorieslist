import {CategoryListItemContainer, CategoryListItemImage, CategoryListItemTextContainer, CategoryListItemTitle, CategoryListItemText} from './styledComponents'

const CategoryListItem = props =>  {
    const {categoryDetails} = props
    const {categoryName, categoryImage, itemCount} = categoryDetails

    return (
        <CategoryListItemContainer>
            <CategoryListItemImage src={categoryImage} alt={categoryName} />
            <CategoryListItemTextContainer>
                <CategoryListItemTitle>{categoryName}</CategoryListItemTitle>
                <CategoryListItemText>{itemCount}</CategoryListItemText>
            </CategoryListItemTextContainer>
        </CategoryListItemContainer>
    )
}    

export default CategoryListItem