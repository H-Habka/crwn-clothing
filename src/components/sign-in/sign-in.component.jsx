import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
// import { useNavigate } from 'react-router-dom';
// import GoogleLogin from 'react-google-login';



class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email : '',
            password: ''
        }
    }

    // ResponseGoogle = (res)=>{

    // }

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


                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in</CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn> Sign in with google</CustomButton>
                    </div>
                    {/* <GoogleLogin 
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <CustomButton
                                type="button"
                                onClick={renderProps.onClick}
                            >hello</CustomButton>
                        )}
                        onSuccess={this.ResponseGoogle}
                        onFailure={this.ResponseGoogle}
                        cookiePolicy="single_host_origin"
                        /> */}
                    
                </form>
            </div>
        )
    }
}


export default SignIn