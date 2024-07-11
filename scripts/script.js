if (document.body.classList.contains('index-page')) {
    const animeList = [
"Fairy Tail",
		"Naruto",
		"Naruto Shippuden",
		"Boruto",
		"One Piece",
		"Dragon Ball",
		"Dragon Ball Z",
		"Dragon Ball GT",
		"Dragon Ball Super",
		"Attack on Titan",
		"Tokyo Ghoul",
		"No Game No Life",
		"Parasyte the Maxim",
		"Hunter x Hunter",
		"Swords Art Online",
		"Full Metal Alchemist Brotherhood",
		"One Punch Man",
		"Mirai Nikki",
		"Shiki",
		"Death Parade",
		"Steins Gate",
		"Another",
		"Your Lie In April",
		"Angel Beats",
		"Charlotte",
		"Clannad: After Story",
		"Your name",
		"The Garden Of Words",
		"Corpse Party",
		"One Week Friends",
		"Himouto! Umaru-chan",
		"Assassination Classroom",
		"WataMote",
		"Oreimo",
		"Magi",
		"Food Wars!",
		"Nisekoi ",
		"Noragami",
		"Golden Time",
		"Place to Place",
		"Beyond the Boundary",
		"Prison School",
		"Blue Spring Ride",
		"Death Note",
		"A Channel",
		"New Game!",
		"Classroom of the Elite",
		"Yuru Yuri",
		"Anne Happy",
		"Amagami SS",
		"Hotarubi no mori e",
		"Senyuu",
		"Deadman Wonderland",
		"Devil is a part-timer",
		"K: Return of Kings",
		"Tanaka-kun wa Itsumo Kedaruge",
		"Higurashi Series",
		"Tokyo Magnitude 8.0",
		"Glasslip",
		"Haikyuu!!",
		"Toradora",
		"Erased",
		"Chuunibyou Demo Koi Ga Shitai! Ren",
		"Danganronpa",
		"K-On",
		"Miss Kobayashi's Dragon Maid",
		"Re:Zero",
		"Bungo Stray Dogs",
		"Hanasuka Iroha",
		"Plastic Memories",
		"Kinmoza",
		"BTOOOM",
		"Divine Gate",
		"Wagnaria",
		"Guilty Crown",
		"Anohana",
		"Beelzebub",
		"Terror in Resonance",
		"Kimi no Todoke",
		"Hell Girl",
		"Konosuba",
		"School Days",
		"King's Game",
		"Jormungand",
		"ReLife",
		"Psycho Pass",
		"Trinity Seven",
		"Non Non Biyori",
		"Tsuredure Children",
		"Fastest Finger First",
		"Love is Like a Cocktail",
		"Mushishi",
		"91 Days",
		"Gamers ",
		"Hamatora",
		"Jokers Game",
		"Baka & Test",
		"Gunslinger Girl",
		"Elfen Lied",
		"5 Centimeters per Second",
		"D-Frag",
		"The Melancholy of Haruhi Suzumiya",
		"Recovery of an MMO Junkie",
		"Anti-Magic Academy",
		"Blend-S",
		"Pandora Hearts",
		"School-Live",
		"Hand-Shakers",
		"Kill la Kill",
		"Kokoro Connect",
		"Anime-Gataris",
		"Juuni Taisen",
		"Imouto sae Ireba Ii",
		"Black Clover",
		"Little Busters!",
		"Bloodivores",
		"Cheating Craft ",
		"Sakura Quest",
		"DanMachi",
		"Yuru Camp",
		"Ramen Daisuki Koizumi-San ",
		"Log Horizon",
		"Gabriel DropOut",
		"A Centaur's Life ",
		"Sabagebu",
		"Slow Start",
		"Scorching Ping Pong Girls",
		"Hal",
		"Tsukigakerei",
		"Ef",
		"Aho-Girl",
		"Alice & Zoroku",
		"Karakai Jozu No Takagi-San",
		"Chronicles of the Going Home Club",
		"A Place Further Than The Universe",
		"Interviews with Monster Girls",
		"Night Raid 1931",
		"Denki-Gai",
		"Restaurant to Another World",
		"My Teen Romantic Comedy SNAFU",
		"Shelter",
		"Gate",
		"Eromanga Sensei",
		"The World God Only Knows",
		"Boku no Hero Academia",
		"The Ryuo's Work is Never Done",
		"Berserk ",
		"Citrus",
		"Masamune-kun's Revenge",
		"Servant x Service",
		"My First Girlfriend is a Gal",
		"Gekkan Shoujo Nozaki-kun",
		"My Little Monster",
		"Love Tyrant",
		"3-gatsu no Lion",
		"Orange",
		"ReWrite",
		"ALDNOAH.ZERO",
		"Seraph of the End",
		"White Album",
		"White Album 2",
		"The Ancient Magus' Bride",
		"Comic Girls",
		"My Sweet Tyrant",
		"Overlord",
		"DARLING in the FRANXX",
		"Crossing Time",
		"Snow White with the Red Hair",
		"Hinamatsuri",
		"Locodol",
		"Amanchu!",
		"Welcome to the N-H-K",
		"Mob Psycho 100",
		"Love Lab",
		"Yotsuiro Biyori",
		"The Idol Master",
		"THE IDOLM@STER CINDERELLA GIRLS",
		"You Don't Know Gunma Yet",
		"PERSONA5",
		"Love Live! School Idol Project",
		"Love Live! Sunshine!!",
		"Hakata Tonkotsu Ramens",
		"No.6",
		"Grimgar of Fantasy and Ash",
		"Kakegurui",
		"The Disastrous Life of Saiki K.",
		"The Seven Deadly Sins",
		"Hyouka",
		"Violet Evergarden ",
		"Durarara",
		"Dagashi Kashi",
		"Gakuen Babysitters",
		"HENNEKO",
		"Black Butler",
		"The Pet Girl of Sakurasou",
		"Gintama ",
		"My Love Story!!",
		"Record of Grancrest War",
		"Island",
		"Angels of Death",
		"Chio's School Road",
		"Cells at Work",
		"Asobi Asobase",
		"Saga of Tanya the Evil",
		"Barakamon",
		"Dantalian no Shoka",
		"Nichijou",
		"Gosick",
		"Komori-san Can't Decline!",
		"Ano Natsu de Matteru",
		"Blue Exorcist ",
		"Myself; Yourself ",
		"Soul Eater",
		"Soul Eater Not!",
		"Akame ga Kill",
		"Yukushiki",
		"Shin Sekai Yori",
		"Upotte!!",
		"Eden of the East",
		"Serial Experiment Lain",
		"Riddle Story of Devil",
		"In Search of the Lost Future",
		"Inu X Boku",
		"Mysterious Girlfriend X",
		"sweetness & lightning",
		"Yamishibai: Japanese Ghost Stories",
		"Junji Ito Collection",
		"RErideD - Derrida, who leaps though time",
		"Frankenstein Family",
		"My Wife is the Student Council President ",
		"Dusk Maiden of Amnesia",
		"Time of Eve",
		"Mizu no Kotoba",
		"Shimoneta",
		"The Time I Got Reincarnated as a Slime",
		"Rascal Does Not Dream of Bunny Girl Senpai",
		"Zombie Land Saga",
		"Code Geass",
		"Goblin Slayer",
		"Danshi Koukousei no Nichijou",
		"Dog & Scissors ",
		"A Certain Magical Index",
		"Patema Inverted",
		"A Lull in the Sea",
		"Punch Line",
		"Hyakko",
		"Hinomaru Sumo",
		"Fate/Stay Night",
		"Fate/Zero",
		"Toriko",
		"Squid Girl",
		"Yamada-kun and the Seven Witches",
		"Kiznaiver",
		"Monster Musume",
		"Occult;Nine",
		"Golden Kamuy",
		"Bakuon!!",
		"Koe no Katachi",
		"Ookami Kodomo no Ame Yuki ",
		"Magical Girl Raising Project",
		"Evangelion",
		"Grand Blue",
		"Bloom Into You",
		"Happy Sugar Life",
		"Wotaku ni Koi wa Muzukashii",
		"Mahou Shoujo Site",
		"Boogiepop and Others",
		"The Rising of the Shield Hero",
		"The Promised Neverland",
		"Hi Score Girl",
		"Back Street Girls: Gokudols",
		"Mitsuboshi Colors",
		"My Roommate is a Cat",
		"WATATEN! An Angel Flew Down to Me",
		"3D Kanojo: Real Girl",
		"Flying Witch",
		"Kaguya-Sama: Love Is War",
		"The Quintessential Quintuplets",
		"I Want To Eat Your Pancreas",
		"SSSS.GRIDMAN",
		"Perfect Blue",
		"Omoide No Marnie",
		"Maquia: When The Promised Flower Blooms",
		"How Not To Summon A Demon Lord",
		"The Price of Smiles",
		"Lucky Star",
		"Bleach",
		"Domestic Girlfriend",
		"The Royal Tutor",
		"Aoharu x Machinegun",
		"Flip Flappers",
		"Run with the Wind",
		"How clumsy you are, Miss Ueno.",
		"Fruits Basket",
		"Hitoribocchi no Marumaruseikatsu",
		"Joshi Kausei",
		"Nobunaga teacher's young bride",
		"Demon Slayer: Kimetsu no Yaiba",
		"We Never Learn: BOKUBEN",
		"Black Bullet",
		"GJ Club",
		"Senryu Girl",
		"Ao-chan Can't Study!",
		"Usagi Drop",
		"The Morose Mononokean",
		"Chihayafuru",
		"GTO",
		"Silver Spoon",
		"Wise Man's Grandchild",
		"Honey and Clover",
		"Liz to Aoi Tori",
		"Kimi no Koe wo Todoketai",
		"Summer Wars",
		"Flavors of Youth",
		"Alderamin on the Sky",
		"Banana Fish",
		"Made in Abyss",
		"Monster",
		"Handa-kun",
		"Magical Sempai",
		"Are You Lost?",
		"Fire Force",
		"Dr. Stone",
		"If It’s For My Daughter, I’d Even Defeat a Demon Lord",
		"Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?",
		"The Anthem of the Heart",
		"The Girl Who Leapt Through Time",
		"Rainbow: Nisha Rokubou no Shichinin",
		"Koi to Uso",
		"JoJo",
		"Araburu Kisetsu no Otome-domo yo",
		"Cop Craft",
		"Natsume Yuujin-Chou",
		"Gurren Lagann",
		"SKET Dance",
		"BlackFox",
		"Showa Genroku Rakugo Shinju",
		"ORESUKI",
		"Welcome to Demon School! Iruma-kun",
		"Assassins Pride",
		"Joshikousei no Mudazukai",
		"Binbougami Ga!",
		"Nana",
		"Skip Beat!",
		"Engaged to the Unidentified",
		"Blast of Tempest",
		"Tada-kun wa koi wo shinai",
		"Tamako Market",
		"Strawberry Marshmallow",
		"Maid-Sama!",
		"Fate/Grand Order: Babylonia",
		"Fate/Stay Night Movie: Heaven’s Feel",
		"Kabaneri of the Iron Fortress",
		"Kids on the Slope",
		"Inuyasha",
		"Arakawa Under the Bridge",
		"Girls’ Last Tour",
		"ShiroBako",
		"Tonari no Seki-kun",
		"Oreshura",
		"Vinland Saga",
		"Kotoura-San",
		"Keep Your Hands Off Eizouken!",
		"A Destructive God Sits Next To Me",
		"Houseki no Kuni",
		"The Demon Girl Next Door",
		"Ishuzoku Reviewers",
		"Lovely Complex",
		"Ms.Vampire who lives in my neighborhood",
		"The Irregular at Magic High School",
		"FLCL",
		"Carole and Tuesday",
		"Seton Academy",
		"Darwin’s Game",
		"In/Spectre",
		"Colorful",
		"Promare",
		"Grave of the Fireflies",
		"Spirited Away",
		"Howls Moving Castle",
		"Jibaku Shounen Hanako-kun",
		"Hana Yori Dango",
		"Dororo",
		"Id:Invaded",
		"Izetta: The Last Witch",
		"Samurai Champloo",
		"Bakuman",
		"Tower of God",
		"Sing “Yesterday” For Me",
		"My Next Life as a Villainess",
		"Hanamaru Kindergarten",
		"Is the Order a Rabbit?",
		"Princess Connect! Re: Dive",
		"Baccano!",
		"Tenki no ko",
		"Kingdom",
		"Megalobox",
		"This Art Club Has a Problem!",
		"Kakushigoto",
		"Whisper of the Heart",
		"Hayate the Combat Butler!",
		"DECA-DENCE",
		"Diary of our days at the breakwater",
		"Uzaki-chan Wants To Hang Out!",
		"Rent-a-Girlfriend",
		"Astra Lost In Space",
		"Great Pretender",
		"Nihon Chinbotsu 2020",
		"Kono Oto Tomare!",
		"Ani ni Tsukeru Kusuri wa Nai!",
		"Mahou Shoujo Madoka Magica",
		"Fugou Keiji: Balanced:Unlimited",
		"Spice and Wolf",
		"Dropkick on my Devil!",
		"The Misfit of Demon King Academy",
		"Bakemono no Ko",
		"Bakemonogatari",
		"Katanagatari",
		"Kizumonogatari",
		"Nisemonogatari",
		"Nekomonogatari",
		"Ginga Eiyuu Densetsu",
		"I can’t understand what my husband is saying",
		"Kannagi",
		"Burn the Witch",
		"I'm Standing on a Million Lives",
		"Jujutsu Kaisen",
		"Tonikaku Kawaii",
		"Hanyou no Yashahime",
		"Adachi to Shimamura",
		"Taisou Zamurai",
		"Majo no Tabitabi",
		"Azumanga Daioh",
		"Osomatsu-san",
		"Konohana Kitan",
		"Kara no Kyoukai",
		"Kino no Tabi",
		"Akudama Drive",
		"Genshiken",
		"Mitsudomoe",
		"Minami-ke",
		"Phantom",
		"Mawaru Penguindrum",
		"Tenchi Souzou Design-bu",
		"Jaku-Chara Tomozaki-kun",
		"Horimiya",
		"Mushoku Tensei: Jobless Reincarnation",
		"Kemono Jihen",
		"Wonder Egg Priority",
		"Yuukoku no Moriarty",
		"Ben-To",
		"Air TV",
		"Munou no Nana",
		"Pui Pui Molcar",
		"Kumo Desu ga, Nani ka?",
		"Yowamushi Pedal",
		"Hinako Note",
		"Sewayaki Kitsune no Senko-san",
		"Urara Meirochou",
		"Amagami Brilliant Park",
		"Ookami-San and Her Seven Companions",
		"Ghost Hound",
		"Seitokai Yakuindomo",
		"Hourou Musuko",
		"Joshiraku",
		"Edens Zero",
		"Tokyo Revengers",
		"SSSS.Dynazenon",
		"Shaman King",
		"Vivy Fluorite Eyes Song",
		"Sentouin, Hakenshimasu",
		"Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway",
		"Yakunara Mug Cup Mo",
		"Super Cub",
		"Gokushufudou",
		"Ijiranaide, Nagatora-san",
		"86",
		"Shadows House",
		"Fumetsu no Anata e",
		"Black Lagoon",
		"Oruchuban Ebichu",
		"Hellsing",
		"Romeo x Juliet",
		"Kanon",
		"Kill me baby",
		"Aria",
		"High school of the dead",
		"Totsukuni no Shoujo",
		"Sansha Sanyou",
		"Date a Live",
		"Paradise Kiss",
		"Ballroom e Youkoso",
		"Haiyoru! Nyaruko-san",
		"Kuzu no Honkai",
		"Haibane Renmei",
		"D.Gray Man",
		"Cross Game",
		"Odd Taxi",
		"Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
		"Nodame Cantabile",
		"Full Metal Panic",
		"Kaiji",
		"Chuukan Kanriroku Tonegawa",
		"Hibike! Euphorium",
		"Uma Musume",
		"Saki",
		"Tamayura",
		"Hajime no Ippo",
		"Vanitas No Carte",
		"The Detective Is Already Dead",
		"Shiroi Suna no Aquatope",
		"The Duke of Death and his Maid",
		"Jahy Sama Wa Kujikenai",
		"Sonny Boy",
		"Bokutachi no Remake",
		"Maria Holic",
		"Battle Game in 5 Seconds",
		"Uramichi Oniisan",
		"Special A",
		"Rokka no Yuusha",
		"Josee to Tora to Sakana-tachi",
		"Hanamonogatari",
		"Tsukimonogatari",
		"Koyomimonogatari",
		"Owarimonogatari",
		"Beck",
		"Trigun",
		"Cromartie High School",
		"Tawawa on Monday",
		"Ganbare Douki Chan",
		"Komi San Wa Comyushou Desu",
		"Blue Period",
		"Our Love Has Always Been 10 Cent. Apart",
		"I’ve always liked you",
		"The moment you fall in love",
		"I've Always Liked You",
		"Prince of Tennis",
		"Mieruko Chan",
		"takt op destiny",
		"Cowboy Bebop",
		"Legend of the Galactic Heroes",
		"My Senpai is Annoying",
		"Kaginado",
		"Yondemasuyo Azazel-san Z",
		"Ousama Ranking",
		"My Neighbor Totoro",
		"Polar Bear Cafe",
		"Akagi",
		"Binbou Shimai Monogatari",
		"Sekai Saikou no Ansatsusha, Isekai…",
		"Kamichu!",
		"Koufuku Graffiti",
		"Nyanko Days",
		"Ojisan to Marshmallow",
		"Kuruneko",
		"Teekyuu",
		"Sakugan",
		"Platinum End",
		"Super Crooks",
		"Baki",
		"Chitose Get You!!",
		"Carnival Phantasm",
		"Maou Jou De Oyasumi",
		"Ascendance of a Bookworm",
		"World Trigger",
		"Uchuu Kyoudai",
		"Arslan Senki",
		"Sorairo Utility",
		"Grimms Notes",
		"Slow Loop",
		"My Dress-Up Darling",
		"Akebi-chan no Sailor Fuku",
		"Sabikui Bisco",
		"Tensai Ouji No Akaji Kokka Saisei Jutsu",
		"Yama no Susume",
		"Irodorimidori",
		"Penguin Highway",
		"Cider no You ni Kotoba ga Wakiagary",
		"Police in a Pod",
		"School Rumble",
		"Namiuchigiwa no Muromi-san",
		"Bokura ga Ita",
		"Little Witch Academia",
		"Yu Yu Hakusho",
		"Girls und Panzer",
		"Aharen-san wa Hakarenai",
		"Tomodachi Game",
		"Denpa Onna to Seishun Otoko",
		"Deaimon",
		"RPG Fudousan",
		"Spy x Family",
		"Miss Shachiku and the Little Baby Ghost",
		"Heroine Tarumono! Kiraware Heroine",
		"Atasha Kawajiri Kodama Da Yo",
		"In The Heart Of Kunoichi Tsubaki",
		"Kawaii dake ja Nai Shikimori-san",
		"Takunomi",
		"By The Grace Of The Gods",
		"Ya Boy Kongming!",
		"Elegant Yokai Apartment Life",
		"Hana Yamata",
		"Karakuri Circus",
		"Samurai Flamenco",
		"Chibi Devi",
		"Don’t Hurt Me, My Healer!",
		"Bubble",
		"Kotarou wa Hitorigurashi",
		"Summertime Render",
		"Love After World Domination",
		"Space Patrol Luluco",
		"Free",
		"Yakitate!! Japan",
		"Sailor Moon",
		"Onipan!",
		"I’m Quitting Heroing",
		"Warau Arsnotoria Sun!",
		"The Yakuza’s Guide to Babysitting",
		"Soredomo Ayumu wa Yosetekuru",
		"Isekai Yakkyoku",
		"Teppen",
		"Musashino!",
		"Isekai Ojisan",
		"Lycoris Recoil",
		"Yofukashi no Uta",
		"Love Live! Superstar!!",
		"Magical Witch Punie-Chan",
		"The Maid I Hired Recently Is Mysterious",
		"Gingitsune: Messenger Fox of the Gods",
		"GA: Geijutsuka Art Design Class",
		"Hidamari Sketch",
		"Claymore",
		"Banished From the Heroes’ Party",
		"Hakumei and Mikochi",
		"Aiura",
		"Strange+",
		"Prima Doll",
		"Morita-san wa Mukuchi",
		"Haruchika: Haruta & Chika",
		"Girlish Number",
		"Poco’s Udon World",
		"Gankutsuo",
		"Do It Yourself!!",
		"The Little Lies We All Tell",
		"Beast Tamer",
		"Akiba Maid War",
		"Chainsaw Man",
		"Bocchi the Rock!",
		"Magic of Stella",
		"Dropout Idol Fruit Tart",
		"The Eminence in Shadow",
		"Princess Principal",
		"Blue Lock",
		"Alice in Borderland",
		"Urusei Yatsura",
		"Gakuen Alice",
		"Cyberpunk",
		"Tomo-chan Is a Girl!",
		"Spy Classroom",
		"NieR",
		"Planetes",
		"The Vampire Dies in No Time",
		"Buddy Daddies",
		"Hikari no Ou",
		"The Ice Guy and His Cool Female Colleague",
		"Trigun Stampede",
		"Sugar Apple Fairy Tail",
		"High Card",
		"22/7",
		"Ao Ashi",
		"My Clueless First Friend",
		"My Home Hero",
		"Jigokuraku",
		"The Dangers in my Heart",
		"Ippon! Again",
		"Tsurune",
		"Mashle",
		"Heavenly Delusion",
		"Oshi no Ko",
		"Kawaisugi Crisis",
		"Otonari ni Ginga",
		"Skip and Loafer",
		"Yuri Is My Job!",
		"Birdie Wing",
		"Otaku Elf",
		"Soremachi",
		"Magical Revolution Reincarnated Princess",
		"Ranma 1/2",
		"Kubo Won’t Let Me Be Invisible",
		"Magical Girl Magical Destroyers",
		"Loving Yamada at Lv999",
		"Inuyashiki",
		"Steel Angel Kurumi",
		"Ramen Fighter Miki",
		"D4DJ",
		"The Girl I Like Forgot Her Glasses",
		"My Tiny Senpai",
		"Level 1 Demon Lord and One Room Hero",
		"Liar Liar",
		"Zom 100: Bucket List of the Dead",
		"Ayaka",
		"Dark Gathering",
		"Bang Dream!",
		"Helck",
		"Revenue Starlight",
		"Undead Murder Farce",
		"My Happy Marriage",
		"Sweet Reincarnation",
		"Haitai Nanafa",
		"WorldEnd",
		"Ouran High School Host Club",
		"Suzume’s Door Locking",
		"How a Realist Hero Rebuilt the Kingdom",
		"Slayers",
		"The Great Cleric",
		"The Most Heretical Last Boss Queen",
		"Yohane the Parhelion",
		"Ojou to Banken-kun",
		"Frieren: Beyond Journey’s End",
		"The Saint’s Magic Power is Omnipotent",
		"Ron Kamonohashi’s Forbidden Deductions",
		"UNDER NINJA",
		"Firefighter Daigo",
		"The Yuzuki Family’s Four Sons",
		"My New Boss Is Goofy",
		"The Family Circumstances of the Witch",
		"The Kingdoms of Ruin",
		"Castlevania",
		"The Apothecary Diaries",
		"I’m in Love with the Villainess",
		"The Blue Orchestra",
		"Pluto",
		"Tearmoon Empire",
		"Undead Unlock",
		"Our Dating Story: The Experienced You",
		"Stardust Telepath",
		"Dead Mount Death Play",
		"Shangri-La Frontier",
		"Kay’s Daily Doodles",
		"Delicious In Dungeon",
		"The Way of Pon",
		"Sasaki and Peeps",
		"A Sign of Affection",
		"Fluffy Paradise",
		"Solo Leveling",
		"7th Time Loop",
		"The Unwanted Undead Adventurer",
		"Mr. Villain’s Day Off",
		"Tis Time For “Torture” Princess",
		"Belle",
		"Villainess Level 99",
		"Sengoku Youko",
		"Doctor Elise: The Royal Lady With The Lamp",
		"Ishura",
		"The Weakest Tamer Began a Journey",
		"Chiikawa",
		"Yumeiro Patissiere",
		"Ninja Kamui",
		"Train to the End of the World",
		"Re:Monster",
		"Reincarnated Aristocrat, Appraisal Skill",
		"Bartender Glass of God",
		"Level 2 Super Cheat Powers",
		"The Fable",
		"Jellyfish can’t swim in the night",
		"Tonari no Yokai-san",
		"GO! GO! Loser Ranger!",
		"An Archdemon’s Dilemma",
		"WIND BREAKER",
		"Sand Land: The Series",
		"Boukyaku Battery",
		"Kaii to Otome to Kamikakushi",
		"Astro Note",
		"The Grimm Variations",
		"Ragna Crimson",
		"The Ossan Newbie Adventurer",
		"Alya Sometimes Hides Her Feelings Russian",
		"I Parry Everything",
		"Failure Frame",
		"Quality Assurance in Another World",
		"My Deer Friend Nokotan",
		"Dungeon People",
		"Sakuna: Of Rice And Ruin",
		"SHOSHIMIN",
		"The Elusive Samurai",
		"Dahlia in Bloom",
		"TASUKETSU",
		"A Journey Through Another World:Raising Kids",
    ];

    const container = document.querySelector('main');

    // Counter element creation
    const counter = document.createElement('div');
    counter.classList.add('anime-counter');
    counter.textContent = `Total Anime: ${animeList.length}`;
    document.body.appendChild(counter); // Append counter to body

    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        const animeImage = document.createElement('img');
        const formattedAnime = formatTitle(anime);

        // Check if the image file exists before setting src
        const imageSrc = `images/${formattedAnime}.jpg`;
        imageExists(imageSrc, function(exists) {
            if (exists) {
                animeImage.src = imageSrc;
            } else {
                animeImage.src = 'images/default.jpg'; // Fallback image for specific anime
            }
        });

        animeImage.alt = anime; // Set alt attribute for accessibility

        const animeTitle = document.createElement('h2');
        animeTitle.textContent = anime;

        animeCard.appendChild(animeImage);
        animeCard.appendChild(animeTitle);
        container.appendChild(animeCard);
    });
}

// Function to check if an image exists at a given URL
function imageExists(url, callback) {
    const img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = url;
}

// Function to format anime titles
function formatTitle(title) {
    return title.replace(/[^\w\s-]/g, '').toLowerCase().replace(/[\s-]+/g, '');
}
