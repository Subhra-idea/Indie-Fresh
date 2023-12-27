// const stripe = require("stripe")(
//   "sk_test_51OR4S5SHVayUefR4ppQoj1CfbPNgPONOGA4rJeT61v7rdvVXaRwmgQCjrA2RO8MubCQ0Te2G7BscQQZ0xKfZjdeW00ag8d4Sp2"
// );
import Stripe from "stripe";
export const checkout = async (req, res) => {
  const stripe = new Stripe('sk_test_51OR4S5SHVayUefR4ppQoj1CfbPNgPONOGA4rJeT61v7rdvVXaRwmgQCjrA2RO8MubCQ0Te2G7BscQQZ0xKfZjdeW00ag8d4Sp2');
    // Stripe.api_key="sk_test_51OR4S5SHVayUefR4ppQoj1CfbPNgPONOGA4rJeT61v7rdvVXaRwmgQCjrA2RO8MubCQ0Te2G7BscQQZ0xKfZjdeW00ag8d4Sp2"
  const hotels  = req.body;
  console.log(hotels.price)
  const lineitems =[{
    price_data: {
      currency: "inr",
      
     product_data:{
      name: hotels.name,
      description: "snsjdnfdjnsdjfn"

     },
     unit_amount: hotels.price*100
    },
    quantity:1
  }];
  const stripeAddress= Stripe.AddressParam = {
    line1: hotels.name,
  
    city: hotels.name,
    country: "India",
    postal_code: 700070,
    state: "west bengal",
  };
  // Stripe.checkout.sessions.create({})
  const customer = await stripe.customers.create({
    name: 'Jenny Rosen',
    address: {
      line1: '510 Townsend St',
      postal_code: '700070',
      city: 'Kolkata',
      state: 'wB',
      country: 'India',
    },
  });
  const session = await  stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items:lineitems,
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: 'http://localhost:3000/',
    });
    // mode: "payment",
    // success_url: "http://localhost:3000/",
    // cancel_url: "http://localhost:3000/",
  // });
  res.json({ success: true, id: session.id });
};
