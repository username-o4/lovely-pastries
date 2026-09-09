function openPanel(name, price, description) {
    const phoneNumber = "2349063759348";

    const message = `Hello Lovely's Pastries, I would like to place an order for:

🍰 *Item:* ${name}
💰 *Price:* ${price}

Please confirm availability. Thanks!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    document.getElementById('panelTitle').innerHTML = `
        <h2>${name}</h2>
        <div class="panel-price">${price}</div>
        <p class="panel-description">${description}</p>
        <a href="${whatsappUrl}" target="_blank" class="order-btn">
            Place Order via WhatsApp
        </a>
    `;

    document.getElementById('sidePanel').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePanel() {
    document.getElementById('sidePanel').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}
