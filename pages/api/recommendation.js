async function recommendation(request, response) {
    response.json({
        recommendations: [{
            title: "O lobo de Wall Street",
            description: "Descrição do filme",
            release: "2014",
            duration: "1h30min"
        },
        {
            title: "Filme 2",
            description: "Descrição do filme",
            release: "2014",
            duration: "1h30min"
        },
        {
            title: "Filme 3",
            description: "Descrição do filme",
            release: "2014",
            duration: "1h30min"
        },
        {
            title: "Filme 4",
            description: "Descrição do filme",
            release: "2014",
            duration: "1h30min"
        }
        ]
    });
}

export default recommendation;