import { Link } from 'react-router-dom'

import {CategoryListItemContainer, CategoryListItemImage, CategoryListItemTextContainer, CategoryListItemTitle, CategoryListItemText} from './styledComponents'

const CategoryListItem = props =>  {
    const {categoryDetails} = props
    const {categoryId, categoryName, categoryImage, itemCount} = categoryDetails

    return (
        <Link to={`/categories/${categoryId}`}>
            <CategoryListItemContainer>
                <CategoryListItemImage src={categoryImage} alt={categoryName} />
                <CategoryListItemTextContainer>
                    <CategoryListItemTitle>{categoryName}</CategoryListItemTitle>
                    <CategoryListItemText>{itemCount}</CategoryListItemText>
                </CategoryListItemTextContainer>
            </CategoryListItemContainer>
        </Link>
    )
}    

export default CategoryListItem