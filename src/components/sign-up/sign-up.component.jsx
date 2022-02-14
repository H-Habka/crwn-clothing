import React from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            name:'',
            email : '',
            password: '',
            confirming: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.password === this.state.confirming){
            this.setState({name: '', email : '' , password : '', confirming: ''})
        }else{
            alert("error")
        }
    }

    handleChange = event => {
        event.preventDefault();
        const { value, name } = event.target;

        this.setState({ [name] : value})
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span> sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='name'
                        type='text' 
                        lable='Display Name'
                        value={this.state.name} 
                        handleChange={this.handleChange}
                        required />

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

                    <FormInput 
                        name='confirming'
                        type='password' 
                        lable='Confirm Password'
                        value={this.state.confirming}
                        handleChange={this.handleChange}
                        required />

                    <CustomButton type="submit" value='Submit Form'> Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp