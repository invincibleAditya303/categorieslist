import {Component} from 'react'

import {CategoriesBgContainer, CategoriesContainer, CategoriesHeading} from './styledComponents'

import SideBar from '../Sidebar'

class Categories extends Component {

    render() {
        return (
            <CategoriesBgContainer>
                <SideBar />
                <CategoriesContainer>
                    <CategoriesHeading>Categories</CategoriesHeading>
                </CategoriesContainer>
            </CategoriesBgContainer>
        )
    }
}

export default Categories