import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
    console.log("payment successful!")
    sessionStorage.setItem()
  }
 

  
 
  render() {
  const {p,img} = this.props;
  console.log(p)
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51NKgQXSCotXdXBTWNDDVsTyY0kLythcKrSk1C0Gh3uoXhYFTgbW4X9w6msBO2baOJaHMrfCuHugypQGKemYr2lR400vupqbFv7"
        image={img}
        panelLabel="pay"
        amount={p*100} 
  currency="INR"
  email={sessionStorage.getItem("user")}
  shippingAddress
      billingAddress
      />
    )
  }
}