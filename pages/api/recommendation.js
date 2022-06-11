async function recommendation(request, response) {
    response.json({
        title: "O lobo de Wall Street",
        description: "Descrição do filme",
        release: "2014",
        duration: "1h30min"
    });
}

export default recommendation;