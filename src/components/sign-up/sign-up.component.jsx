import React from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth , createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email : '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName , email, password, confirmPassword}  = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName:'',
                email : '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error)
        }
    }

    handleChange = event => {
        event.preventDefault();
        const { value, name } = event.target;

        this.setState({ [name] : value})
    }

    render() {
        const {displayName , email, password, confirmPassword}  = this.state;
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span> sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput 
                        name='displayName'
                        type='text' 
                        lable='Display Name'
                        value={displayName} 
                        handleChange={this.handleChange}
                        required />

                    <FormInput 
                        name='email'
                        type='email' 
                        lable='email'
                        value={email} 
                        handleChange={this.handleChange}
                        required />

                    <FormInput 
                        name='password'
                        type='password' 
                        lable='password'
                        value={password}
                        handleChange={this.handleChange}
                        required />

                    <FormInput 
                        name='confirmPassword'
                        type='password' 
                        lable='Confirm Password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required />

                    <CustomButton type="submit" value='Submit Form'> Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp