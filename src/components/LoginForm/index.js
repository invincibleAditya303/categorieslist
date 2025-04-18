import { Component } from 'react'

import {Redirect, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {LoginBgContainer, LoginContainer, LoginImageContainer, LoginImage, LoginFormContainer, LoginHeading, InputContainer, LabelHeading, InputText, LoginButton, ErrorMsg} from './styledComponents'

class Login extends Component {
    state = {username: '', password: '', showSubmitError: false, errMsg: ''}

    onSubmitSuccess = jwtToken => {
        const {history} = this.props
        Cookies.set('userDetails', jwtToken, {expires: 30})
        history.replace('/categories')
    }

    onSubmitFailure = errMsg => {
        this.setState({showSubmitError: true, errMsg})
    }

    onSubmitEvent = async event => {
        event.preventDefault()
        const {username, password} = this.state
        const userDetails = {username, password}
        const url='https://categorymanagement-e3c554d18fdf.herokuapp.com/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include'
        }

        const response = await fetch(url, options)
        console.log(response.ok)
        const data = await response.json()
        console.log(data)

        if (response.ok) {
            this.onSubmitSuccess(data)
        }
        else {
            this.onSubmitFailure(data)
        }
    }
    
    onChangePassword = event => {
        this.setState({password: event.target.value})
    }
    
    onChangeUsername = event => {this.setState({username: event.target.value})}

    render() {
        const {username, password, showSubmitError, errMsg} = this.state
        const jwtToken = Cookies.get('userDetails')

        if (jwtToken !== undefined) {
            <Redirect to='/categories' />
        }

        return (
            <LoginBgContainer>
                <LoginContainer>
                    <LoginImageContainer>
                        <LoginImage src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png' alt='website login' />
                    </LoginImageContainer>
                    <LoginFormContainer onSubmit={this.onSubmitEvent}>
                        <LoginHeading>Category Managment</LoginHeading>
                        <InputContainer>
                            <LabelHeading>USERNAME</LabelHeading>
                            <InputText type='text' placeholder='Enter Username' value={username} onChange={this.onChangeUsername} />
                        </InputContainer>
                        <InputContainer>
                            <LabelHeading>PASSWORD</LabelHeading>
                            <InputText type='password' placeholder='Enter Password' value={password} onChange={this.onChangePassword} />
                        </InputContainer>
                            <LoginButton type='submit'>Login</LoginButton>
                        {showSubmitError && <ErrorMsg>{errMsg}</ErrorMsg>}
                    </LoginFormContainer>
                </LoginContainer>
                <Link to='/register' target="_blank">
                    <LoginButton>Signup</LoginButton>
                </Link>
            </LoginBgContainer>
        )
    }
}

export default Login