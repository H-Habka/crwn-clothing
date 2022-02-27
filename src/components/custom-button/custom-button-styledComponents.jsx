import styled, {css} from 'styled-components'

const googleSignInStyles = css`
    background-color: #4285f4;
      color:white;
      
      &:hover{
        background-color: #357ae8;
        border:none;
      }
    }
`

const convertedButtonStyle = css`
    background-color: white;
      color: black;
      border: 1px solid black;


      &:hover{
        background-color: black;
        color: white;
        border: none;
      }
    }
`

const customButtonStyles = (props) => {
    return props.isGoogleSignIn ? googleSignInStyles
    : props.inverted? convertedButtonStyle: null
}

export const CustomButtonJSX = styled.button`
    min-width: 167px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    overflow: hidden;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }

    ${customButtonStyles}

`