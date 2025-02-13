// POST method response to Cart page
app.post("/cart", (req, res) => {
    const price = purchase.price;
    const item = purchase.item;
    const quantity = req.body.quantity;
    const final = quantity * price;

    res.send(`
        ${htmlTop}
        <h2>Purchase Confirmation</h2>
        <h3>Thank you for buying from the Pokemon Inventory Shop.</h3>
        <p>You just bought a <strong>${item}</strong>, which does the following function: <strong>${company}</strong>.
        The price for one of the item is at <strong>$${price}</strong> and you purchased <strong>${quantity}</strong>.
        The total checkout price is <strong>$${final}</strong>.
        </p>
        ${htmlBottom}
        `);
});

let htmlTop = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <title>Pokemon Inventory Shop</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <script src='index.js'></script>
        <link rel="stylesheet" href="index.css" />
    </head>
    <body>
        <header>
            <h1>Pokemon Inventory Shop</h1>
        </header>
        <nav>
            <a href="index.html">Home</a>
            <a href="cart.html">Cart</a>
        </nav>
        <main>
            <div id="shop">
                <h2>Available Items to Purchase</h2>
            </div>
        </main>
        `;

let htmlBottom = `
        </main>
    </body>
    </html>
    `;
