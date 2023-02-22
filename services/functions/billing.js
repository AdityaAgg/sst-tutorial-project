import Stripe from "stripe";
import handler from "../util/handler";
import { calculateCost } from "../util/cost";

export const main = handler(async (event) => {
    console.log("xerus");
    const { storage, source } = JSON.parse(event.body);
    const amount = calculateCost(storage);
    const description = "Scratch charge";
    console.log("apple");
    // Load our secret key from the  environment variables
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    console.log("bannana");
    await stripe.charges.create({
        source,
        amount,
        description,
        currency: "usd",
    });

    return { status: true };
});
