import { Component } from 'react'

import {RegisterBgContainer, RegisterContainer, InputContainer, LabelHeading, InputText, SubmitButton } from './styledComponents'

class Register extends Component {
    state = {username: '', name: '', password: '',  gender: ''}

    onSubmitForm = async event => {
        event.preventDefault()

        const {username, name, password, gender} = this.state
        const newProfile = {username, name, password, gender}
        
        const apiUrl = 'https://categorymanagement-e3c554d18fdf.herokuapp.com/register'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProfile),
        }

        const response = await fetch(apiUrl, options)

        if (response.ok) {
            const result = response.json()
            console.log(`Success: ${result}`)
            this.setState({username: '', name: '', password: '',  gender: ''})
        } else {
            console.log(`error: ${response.status}`)
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
        const {username, name, password, gender} = this.state
        return (
            <RegisterBgContainer>
                <RegisterContainer onSubmit={this.onSubmitForm}>
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
                        <InputText type="text" placeholder="Enter Password" id="password" value={password} onChange={this.onChangePassword} />
                    </InputContainer>
                    <InputContainer>
                        <LabelHeading htmlFor='gender'>Gender</LabelHeading>
                        <InputText type="text" placeholder="Enter Gender" id="gender" value={gender} onChange={this.onChangeGender} />
                    </InputContainer>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </RegisterContainer>
            </RegisterBgContainer>
        )
    }
}

export default Register