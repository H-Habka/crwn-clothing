import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) =>{
    
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_51KXKXYHGrma2FkdHNOBoZrFtk48UYldXbepMaiS4sAdetFT272B8ZJx2nogWCgBLLlciO8PDexZVOmSh5ephy3Lo00tCDD2DgM'

    const onToken = token => {
        alert("payment successful")
    }

    return (

    <StripeCheckout 
        label='pay now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay Now'
        token={onToken}
        stripeKey={publishablekey}
    />

  )}

export default StripeButton