import { Component } from 'react'

import {RegisterBgContainer, RegisterContainer, RegisterImageContainer, RegisterImage, RegisterFormContainer, InputContainer, LabelHeading, InputText, RegisterButton, RegisterSuccessButton, RegisterErrorButton } from './styledComponents'

class Register extends Component {
    state = {username: '', name: '', password: '',  gender: '', showSuccessMsg: false, successMsg: '', showErrMsg: false, errMsg: ''}

    onSubmitForm = async event => {
        event.preventDefault()

        const {username, name, password, gender} = this.state
        const newProfile = {username, name, password, gender}
        
        const apiUrl = process.env.REACT_APP_API_URL
        const registerUrl = `${apiUrl}/register`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProfile),
        }

        const response = await fetch(registerUrl, options)

        if (response.ok) {
            const successMsg = await response.json()

            this.setState({username: '', name: '', password: '',  gender: '', showSuccessMsg: true, showErrMsg: false, successMsg})
        } else {
            const errMsg = await response.json()

            this.setState({showErrMsg: true, showSuccessMsg: false, errMsg})
        }
    }

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

    onChangeName = event => {
        this.setState({name: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    onChangeGender = event => {
        this.setState({gender: event.target.value})
    }

    render() {
        const {username, name, password, gender, showSuccessMsg, successMsg, showErrMsg, errMsg} = this.state
        return (
            <RegisterBgContainer>
                <RegisterContainer>
                    <RegisterImageContainer>
                        <RegisterImage src='https://res.cloudinary.com/dtrjr55q7/image/upload/v1745240119/Mobile-login_1_ztgsll.jpg' alt='register user' />
                    </RegisterImageContainer>
                    <RegisterFormContainer onSubmit={this.onSubmitForm}>
                        <InputContainer>
                            <LabelHeading htmlFor='username'>Userame</LabelHeading>
                            <InputText type="text" placeholder="Enter Username" id="username" value={username} onChange={this.onChangeUsername} />
                        </InputContainer>
                        <InputContainer>
                            <LabelHeading htmlFor='name'>Name</LabelHeading>
                            <InputText type="text" placeholder="Enter Name" id="name" value={name} onChange={this.onChangeName} />
                        </InputContainer>
                        <InputContainer>
                            <LabelHeading htmlFor='password'>Password</LabelHeading>
                            <InputText type="password" placeholder="Enter Password" id="password" value={password} onChange={this.onChangePassword} />
                        </InputContainer>
                        <InputContainer>
                            <LabelHeading htmlFor='gender'>Gender</LabelHeading>
                            <InputText type="text" placeholder="Enter Gender" id="gender" value={gender} onChange={this.onChangeGender} />
                        </InputContainer>
                        <RegisterButton type='submit'>Register</RegisterButton>
                        {showSuccessMsg && <RegisterSuccessButton>{successMsg}</RegisterSuccessButton>}
                        {showErrMsg && <RegisterErrorButton>{errMsg}</RegisterErrorButton>}
                    </RegisterFormContainer>
                </RegisterContainer>
            </RegisterBgContainer>
        )
    }
}

export default Register