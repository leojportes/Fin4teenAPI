
// Recommendations endpoint
async function recommendation(request, response) {

    response.json({
        recommendations: [{
            movies: [{
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
            }],
            tvshow: [{
                title: "Série 1",
                description: "Descrição do Série",
                release: "2014",
                duration: "1h30min"
            },
            {
                title: "Série 2",
                description: "Descrição do Série",
                release: "2014",
                duration: "1h30min"
            },
            {
                title: "Série 3",
                description: "Descrição do Série",
                release: "2014",
                duration: "1h30min"
            },
            {
                title: "Série 4",
                description: "Descrição do Série",
                release: "2022",
                duration: "1h30min"
            }],
            books: [{
                title: "Livro 1",
                description: "Descrição do Livro",
                release: "2017",
                pages: "1h30min"
            },
            {
                title: "Livro 2",
                description: "Descrição do Livro",
                release: "2014",
                pages: "1h30min"
            },
            {
                title: "Livro 3",
                description: "Descrição do Livro",
                release: "2011",
                pages: "400 pages"
            },
            {
                title: "Livro 4",
                description: "Descrição do Livro",
                release: "2010",
                pages: "345 pages"
            }],
        }]
    });

}

export default recommendation;