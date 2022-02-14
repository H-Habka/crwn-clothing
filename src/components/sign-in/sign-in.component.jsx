import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email : '' , password : ''})
    }

    handleChange = event => {
        event.preventDefault();
        const { value, name } = event.target;

        this.setState({ [name] : value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I already have account</h2>
                <span> sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email' 
                        lable='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required />

                    <FormInput 
                        name='password'
                        type='password' 
                        lable='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />

                    <CustomButton type="submit" value='Submit Form'> Sign in</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignIn