import axios from 'axios';
const stripe = Stripe(
  'pk_test_51SX1Sp3mudEZMaVWMtg1TMM2WSdFgfwVdEQOSJHrVYSuDSt2TjnsoOHYYxynGFgwq4YkstjeE04g8HUOBilPI0yk000tZqxM27',
);

export const bookTour = async (tourId) => {
  try {
    // Get chechout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
  }
};
