function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
}

function applyDarkModeFromLocalStorage() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', applyDarkModeFromLocalStorage);

if (document.body.classList.contains('anime-page')) {
    let watchedAnimeList = [];
    let queueAnimeList = [];

    fetch('anime.json')
        .then(response => response.json())
        .then(data => {
            watchedAnimeList = data;
            queueAnimeList = [{en: "Red Cat Ramen", jp: "赤い猫のラーメン", romaji: "Ramen Aka Neko", genre: ["Comedy"], type: "TV"}];
            initializeAnimePage();
        })
        .catch(error => console.error('Error loading anime list:', error));

    function initializeAnimePage() {
        const container = document.querySelector('main');
        const counter = document.getElementById('animeCounter');

        const searchBar = document.getElementById('searchBar');
        const watchedButton = document.getElementById('watchedButton');
        const queueButton = document.getElementById('queueButton');
        const langENButton = document.getElementById('langEN');
        const langJPButton = document.getElementById('langJP');
        const langROMButton = document.getElementById('langROM');
        const titleElement = document.querySelector('header h1');

        let currentList = watchedAnimeList;
        let currentLang = 'EN';

        searchBar.addEventListener('input', filterAnimeList);
        watchedButton.addEventListener('click', () => switchList('watched'));
        queueButton.addEventListener('click', () => switchList('queue'));
        document.querySelectorAll('input[name="genre"], input[name="type"]').forEach(checkbox => {
            checkbox.addEventListener('change', filterAnimeList);
        });
        langENButton.addEventListener('click', () => switchLanguage('EN'));
        langJPButton.addEventListener('click', () => switchLanguage('JP'));
        langROMButton.addEventListener('click', () => switchLanguage('ROM'));

        function switchList(list) {
            if (list === 'watched') {
                currentList = watchedAnimeList;
                watchedButton.classList.add('active');
                queueButton.classList.remove('active');
                titleElement.textContent = 'Watched Animes';
            } else if (list === 'queue') {
                currentList = queueAnimeList;
                queueButton.classList.add('active');
                watchedButton.classList.remove('active');
                titleElement.textContent = 'Watchlist';
            }
            updateTotalCounter();
            filterAnimeList();
        }

        function switchLanguage(lang) {
            currentLang = lang;
            langENButton.classList.toggle('active', lang === 'EN');
            langJPButton.classList.toggle('active', lang === 'JP');
            langROMButton.classList.toggle('active', lang === 'ROM');
            updateAnimeTitles();
        }

        function updateAnimeTitles() {
            const animeCards = document.querySelectorAll('.anime-card');
            animeCards.forEach(card => {
                const titleElement = card.querySelector('h2');
                const englishTitle = titleElement.getAttribute('data-en-title');
                const japaneseTitle = titleElement.getAttribute('data-jp-title');
                const romajiTitle = titleElement.getAttribute('data-romaji-title');
                if (currentLang === 'EN') {
                    titleElement.textContent = englishTitle;
                } else if (currentLang === 'JP') {
                    titleElement.textContent = japaneseTitle;
                } else {
                    titleElement.textContent = romajiTitle;
                }
            });
        }

        function displayAnimeList(list) {
            container.innerHTML = '';
            list.forEach(anime => {
                const animeCard = document.createElement('div');
                animeCard.classList.add('anime-card');

                const animeImage = document.createElement('img');
                const formattedAnime = formatTitle(anime.en);

                const imageSrc = `images/${formattedAnime}.jpg`;
                imageExists(imageSrc, function (exists) {
                    animeImage.src = exists ? imageSrc : 'images/default.jpg';
                });

                animeImage.alt = anime.en;
                const animeTitle = document.createElement('h2');
                animeTitle.setAttribute('data-en-title', anime.en);
                animeTitle.setAttribute('data-jp-title', anime.jp);
                animeTitle.setAttribute('data-romaji-title', anime.romaji);
                if (currentLang === 'EN') {
                    animeTitle.textContent = anime.en;
                } else if (currentLang === 'JP') {
                    animeTitle.textContent = anime.jp;
                } else {
                    animeTitle.textContent = anime.romaji;
                }

                animeCard.appendChild(animeImage);
                animeCard.appendChild(animeTitle);
                container.appendChild(animeCard);
            });
        }

        function filterAnimeList() {
            const searchText = searchBar.value.toLowerCase();
            const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(cb => cb.value);
            const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

            const filteredList = currentList.filter(anime =>
                (selectedGenres.length === 0 || anime.genre.some(genre => selectedGenres.includes(genre))) &&
                (selectedTypes.length === 0 || selectedTypes.includes(anime.type)) &&
                (searchText === '' || anime.en.toLowerCase().includes(searchText) || anime.jp.toLowerCase().includes(searchText) || anime.romaji.toLowerCase().includes(searchText))
            );

            displayAnimeList(filteredList);
        }

        function imageExists(url, callback) {
            const img = new Image();
            img.onload = () => callback(true);
            img.onerror = () => callback(false);
            img.src = url;
        }

        function formatTitle(title) {
            return title.replace(/[^\w\s-]/g, '').toLowerCase().replace(/[\s-]+/g, '');
        }

        function updateTotalCounter() {
            if (currentList === watchedAnimeList) {
                counter.textContent = `Total Watched Anime: ${watchedAnimeList.length}`;
            } else {
                counter.textContent = `Total Queued Anime: ${queueAnimeList.length}`;
            }
        }

        // Initialize the total counter and the list display
        updateTotalCounter();
        switchList('watched');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const banners = [
        { img: 'images/bannergintama.jpg', title: 'Gintama', description: 'The Amanto, vicious aliens from outer space, has taken over the country of Japan. It has suppressed all the samurais by prohibiting the usage of samurai swords. Sakata Gintoki is one of the few remaining samurai. Along with Shimura… Gintama is a rare case that is rated G for everyone. Every single episode in the series has unique storyline and actions. The story follows Gintoki as he assists victims of the the Amanto’s invasion by fighting with the shinsengumi and the aliens.' },
        { img: 'images/bannersg.jpg', title: 'Steins;Gate', description: 'The story of Steins;Gate takes place in Akihabara and is about a group of friends who have managed to customize their microwave into a device that can send text messages to the past. As they perform different experiments, an organization named SERN who has been doing their own research on time travel tracks them down and now the characters have to find a way to avoid being captured by them.' },
        { img: 'images/bannermia.jpg', title: 'Made In Abyss', description: 'The enormous cave system, known as the Abyss, is the only unexplored place in the world. Nobody knows how deep down goes this titanic pit, inhabited by strange and wondrous creatures and full of mysterious ancient relics which purpose in unknown to modern man. Generations of bold adventurers have been drawn by the cryptic depths of the Abyss. In course of time those bold enough to explore the dangerous pit came to be known as "Cave Raiders." In Oosu, the town at the edge of the Abyss, there lives a little orphan named Riko, who dreams of becoming as great a cave raider as her mother was and solving the great mystery of the pit. One day exploring the murky depths she stumbles upon a little boy, who turns out to be a robot...' },
        { img: 'images/bannerhxh.jpg', title: 'Hunter X Hunter', description: 'Hunter X Hunter revolves around Gon Freecss whose goal in life is to find his father Ging, a renowned hunter. In order to find his father, Gon must become a hunter himself and sets out to do so. Along the way, he meets Kurapika, Leorio, and Killua. Together they set out to take the Hunter Exam and Gon’s quest to become a legendary hunter begins.' },
        { img: 'images/bannerdn.jpg', title: 'Death Note', description: 'Death Note follows Light Yagami, a high school student who discovers a mysterious notebook that grants him the power to kill anyone whose name he writes in it. Using the alias Kira, Light embarks on a mission to rid the world of criminals, attracting the attention of the genius detective L. A tense cat-and-mouse game ensues as L attempts to uncover Kira\'s identity and stop his reign of terror. The series explores themes of justice, morality, and the corrupting influence of power.' },
        { img: 'images/bannerjojo.jpg', title: 'Jojo', description: 'JoJo\'s Bizarre Adventure follows the adventures of the Joestar family, whose members possess unique supernatural abilities. Each part of the series focuses on a different member of the family as they battle various foes using their powers. The story spans multiple generations, blending action, fantasy, and eccentric characters. Known for its distinctive art style and imaginative battles, the series has become a beloved classic in the anime world.' },
        { img: 'images/bannerclannad.jpg', title: 'Clannad', description: 'Clannad follows the story of Tomoya Okazaki, a delinquent high school student, and his encounters with various classmates as he helps them overcome their personal struggles. The series delves into themes of family, friendship, and love, with a strong emphasis on emotional storytelling. As Tomoya forms deeper connections with his friends, he begins to find purpose and meaning in his life.' },
        { img: 'images/bannerkdm.jpg', title: 'Kobayashi Dragon-Maid', description: 'Miss Kobayashi\'s Dragon Maid follows the life of Kobayashi, an office worker, who unexpectedly ends up living with a dragon named Tohru who can transform into a human maid. As Tohru adjusts to human life and Kobayashi\'s friends meet other dragons, they form a unique and heartwarming family. The series blends comedy, fantasy, and slice-of-life elements, highlighting the humorous and touching moments of their daily lives. It is known for its charming characters and lighthearted storytelling.' },
        { img: 'images/banneronk.jpg', title: 'Oshi No Ko', description: 'Sixteen-year-old Ai Hoshino is a talented and beautiful idol who is adored by her fans. She is the personification of a pure, young maiden. But all that glitters is not gold. Gorou Amemiya is a countryside gynecologist and a big fan of Ai. So when the pregnant idol shows up at his hospital, he is beyond bewildered. Gorou promises her a safe delivery. Little does he know, an encounter with a mysterious figure would result in his untimely death—or so he thought. Opening his eyes in the lap of his beloved idol, Gorou finds that he has been reborn as Aquamarine Hoshino—Ai\'s newborn son! With his world turned upside down, Gorou soon learns that the world of showbiz is paved with thorns, where talent does not always beget success. Will he manage to protect Ai\'s smile that he loves so much with the help of an eccentric and unexpected ally?' },
        { img: 'images/bannerfrn.jpg', title: 'Frieren', description: 'The demon king has been defeated, and the victorious hero party returns home before disbanding. The four—mage Frieren, hero Himmel, priest Heiter, and warrior Eisen—reminisce about their decade-long journey as the moment to bid each other farewell arrives. But the passing of time is different for elves, thus Frieren witnesses her companions slowly pass away one by one. Before his death, Heiter manages to foist a young human apprentice called Fern onto Frieren. Driven by the elf\'s passion for collecting a myriad of magic spells, the pair embarks on a seemingly aimless journey, revisiting the places that the heroes of yore had visited. Along their travels, Frieren slowly confronts her regrets of missed opportunities to form deeper bonds with her now-deceased comrades.' },
    ];

    let currentBanner = 0;
    const bannerElement = document.getElementById('banner');
    const bannerTitle = document.getElementById('bannerTitle');
    const bannerDescription = document.getElementById('bannerDescription');
    const bannerIndicator = document.getElementById('bannerIndicator');

    function updateBanner() {
        const { img, title, description } = banners[currentBanner];
        bannerElement.style.backgroundImage = `url(${img})`;
        bannerTitle.textContent = title;
        bannerDescription.textContent = description;
    }

    function nextBanner() {
        currentBanner = (currentBanner + 1) % banners.length;
        updateBanner();
    }

    function prevBanner() {
        currentBanner = (currentBanner - 1 + banners.length) % banners.length;
        updateBanner();
    }

    // Initialize the banner
    updateBanner();
    // Set interval for banner rotation
    let bannerInterval = setInterval(nextBanner, 5000);

    bannerElement.addEventListener('mouseenter', () => {
        clearInterval(bannerInterval);
        bannerIndicator.style.display = 'block'; // Show the indicator
    });

    bannerElement.addEventListener('mouseleave', () => {
        bannerInterval = setInterval(nextBanner, 5000);
        bannerIndicator.style.display = 'none'; // Hide the indicator
    });

    // Add event listeners to the arrow buttons
    document.querySelector('.banner-arrow.left').addEventListener('click', prevBanner);
    document.querySelector('.banner-arrow.right').addEventListener('click', nextBanner);
});
