module.exports = function(app){

    const plaid = require('plaid');

    const client = new plaid.Client({
        clientID: process.env.PLAID_CLIENT_ID,
        secret: process.env.PLAID_SECRET,
        env: plaid.environments.sandbox,
    });

    app.post('/create_link_token', async (req, res) => {
        try {
            // Get the client_user_id by searching for the current user
            // Create the link_token with all of your configurations
            const tokenResponse = await client.createLinkToken({
                user: {
                    client_user_id: '1sjsla2w3ksmxal2', //this would be the users unique id from firebase, sent from the front end
                },
                client_name: 'Payup',
                products: ["auth"],
                country_codes: ['US'],
                language: 'en'
            });
            res.json(tokenResponse);
        } catch (e) {
            // Display error on client
            return res.send({ error: e.message });
        }
    });

}