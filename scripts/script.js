// Check if the current page is index.html before adding anime cards
if (document.querySelector('body').classList.contains('index-page')) {
    const animeList = [
        "Fairy Tail",
        "Naruto",
        "Boruto",
        "One Piece",
        "DragonBall",
        "Gintama",
        // Add the rest of your anime here...
    ];

    const container = document.querySelector('main');

    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        const animeImage = document.createElement('img');
        animeImage.src = `images/${anime.replace(/\s+/g, '-').toLowerCase()}.jpg`;
        animeImage.alt = anime;

        const animeTitle = document.createElement('h2');
        animeTitle.textContent = anime;

        animeCard.appendChild(animeImage);
        animeCard.appendChild(animeTitle);
        container.appendChild(animeCard);
    });
}
