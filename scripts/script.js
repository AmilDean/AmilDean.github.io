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
    const watchedAnimeList = [
{ en: "Fairy Tail", jp: "フェアリーテイル", romaji: "Fairy Tail", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Naruto", jp: "ナルト", romaji: "Naruto", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "Naruto Shippuden", jp: "E2", romaji: "Naruto Shippuden", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "Boruto", jp: "BORUTO-ボルト- NARUTO NEXT GENERATIONS", romaji: "Boruto", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "One Piece", jp: "ワンピース", romaji: "One Piece", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Dragon Ball", jp: "ドラゴンボール", romaji: "Dragon Ball", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "Dragon Ball Z", jp: "ドラゴンボールZ", romaji: "Dragon Ball Z", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "Dragon Ball GT", jp: "ドラゴンボールGT", romaji: "Dragon Ball GT", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "Dragon Ball Super", jp: "ドラゴンボール超", romaji: "Dragon Ball Super", genre: [ "Action", "Adventure", "Martial Arts"], type: "TV" },
{ en: "Attack on Titan", jp: "進撃の巨人", romaji: "Shingeki no Kyojin", genre: [ "Action", "Military", "Mystery"], type: "TV" },
{ en: "Tokyo Ghoul", jp: "東京喰種トーキョーグール", romaji: "Tokyo Ghoul", genre: [ "Action", "Mystery", "Supernatural"], type: "TV" },
{ en: "No Game No Life", jp: "ノーゲーム・ノーライフ", romaji: "No Game No Life", genre: [ "Adventure", "Comedy", "Fantasy"], type: "TV" },
{ en: "Parasyte the Maxim", jp: "寄生獣 セイの格率", romaji: "Kiseijuu: Sei no Kakuritsu", genre: [ "Action", "Sci-Fi", "Horror"], type: "TV" },
{ en: "Hunter x Hunter", jp: "ハンター×ハンター", romaji: "Hunter x Hunter", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Swords Art Online", jp: "ソードアート・オンライン", romaji: "Sword Art Online", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Full Metal Alchemist Brotherhood", jp: "鋼の錬金術師 FULLMETAL ALCHEMIST", romaji: "Hagane no Renkinjutsushi: Fullmetal Alchemist", genre: [ "Action", "Adventure", "Drama"], type: "TV" },
{ en: "One Punch Man", jp: "ワンパンマン", romaji: "One Punch Man", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "The Future Diary", jp: "未来日記", romaji: "Mirai Nikki", genre: [ "Action", "Mystery", "Psychological"], type: "TV" },
{ en: "Shiki", jp: "屍鬼", romaji: "Shiki", genre: [ "Horror", "Mystery", "Supernatural", "Vampire"], type: "TV" },
{ en: "Death Parade", jp: "デス・パレード", romaji: "Death Parade", genre: [ "Drama", "Mystery", "Psychological"], type: "TV" },
{ en: "Steins;Gate", jp: "シュタインズ・ゲート", romaji: "Steins;Gate", genre: [ "Sci-Fi", "Thriller"], type: "TV" },
{ en: "Another", jp: "アナザー", romaji: "Another", genre: [ "Horror", "Mystery", "Supernatural"], type: "TV" },
{ en: "Your Lie in April", jp: "四月は君の嘘", romaji: "Shigatsu wa Kimi no Uso", genre: [ "Drama", "Music", "Romance"], type: "TV" },
{ en: "Angel Beats!", jp: "エンジェルビーツ", romaji: "Angel Beats", genre: [ "Action", "Comedy", "Drama"], type: "TV" },
{ en: "Charlotte", jp: "シャーロット", romaji: "Charlotte", genre: [ "Drama", "School", "Super Power"], type: "TV" },
{ en: "Clannad: After Story", jp: "CLANNAD ～AFTER STORY～", romaji: "Clannad: After Story", genre: [ "Drama", "Romance", "Slice of Life"], type: "TV" },
{ en: "Your Name", jp: "君の名は。", romaji: "Kimi no Na wa", genre: [ "Drama", "Romance", "Supernatural"], type: "Movie" },
{ en: "The Garden of Words", jp: "言の葉の庭", romaji: "Kotonoha no Niwa", genre: [ "Drama", "Romance", "Slice of Life"], type: "Movie" },
{ en: "Corpse Party", jp: "コープスパーティー", romaji: "Corpse Party", genre: [ "Horror", "School", "Supernatural"], type: "OVA" },
{ en: "One Week Friends", jp: "一週間フレンズ", romaji: "Isshuukan Friends", genre: [ "Slice of Life", "Comedy", "School"], type: "TV" },
{ en: "Himouto! Umaru-chan", jp: "干物妹!うまるちゃん", romaji: "Himouto! Umaru-chan", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Assassination Classroom", jp: "暗殺教室", romaji: "Ansatsu Kyoushitsu", genre: [ "Action", "Comedy", "School"], type: "TV" },
{ en: "WataMote", jp: "私がモテないのはどう考えてもお前らが悪い!", romaji: "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!", genre: [ "Comedy", "School"], type: "TV" },
{ en: "Oreimo", jp: "俺の妹がこんなに可愛いわけがない", romaji: "Ore no Imouto ga Konnani Kawaii Wake ga Nai", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Magi", jp: "マギ", romaji: "Magi", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Food Wars!", jp: "食戟のソーマ", romaji: "Shokugeki no Soma", genre: [ "Ecchi", "School", "Shounen"], type: "TV" },
{ en: "Nisekoi", jp: "ニセコイ", romaji: "Nisekoi", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Noragami", jp: "ノラガミ", romaji: "Noragami", genre: [ "Action", "Adventure", "Supernatural"], type: "TV" },
{ en: "Golden Time", jp: "ゴールデンタイム", romaji: "Golden Time", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Place to Place", jp: "あっちこっち", romaji: "Acchi Kocchi", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Beyond the Boundary", jp: "境界の彼方", romaji: "Kyoukai no Kanata", genre: [ "Action", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Prison School", jp: "監獄学園", romaji: "Kangoku Gakuen", genre: [ "Comedy", "Ecchi", "School"], type: "TV" },
{ en: "Blue Spring Ride", jp: "アオハライド", romaji: "Ao Haru Ride", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Death Note", jp: "デスノート", romaji: "Death Note", genre: [ "Mystery", "Psychological", "Supernatural"], type: "TV" },
{ en: "A Channel", jp: "Aチャンネル", romaji: "A Channel", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "New Game!", jp: "NEW GAME!", romaji: "New Game!", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Classroom of the Elite", jp: "ようこそ実力至上主義の教室へ", romaji: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e", genre: [ "Drama", "School", "Slice of Life"], type: "TV" },
{ en: "Yuru Yuri", jp: "ゆるゆり", romaji: "Yuru Yuri", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Anne Happy", jp: "あんハピ♪", romaji: "Anne Happy♪", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Amagami SS", jp: "アマガミSS", romaji: "Amagami SS", genre: [ "Romance", "School", "Slice of Life"], type: "TV" },
{ en: "Into the Forest of Fireflies' Light", jp: "蛍火の杜へ", romaji: "Hotarubi no Mori e", genre: [ "Drama", "Romance", "Supernatural"], type: "Movie" },
{ en: "Senyuu", jp: "戦勇。", romaji: "Senyuu", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Deadman Wonderland", jp: "デッドマン・ワンダーランド", romaji: "Deadman Wonderland", genre: [ "Action", "Horror", "Sci-Fi"], type: "TV" },
{ en: "The Devil is a Part-Timer!", jp: "はたらく魔王さま!", romaji: "Hataraku Maou-sama!", genre: [ "Comedy", "Fantasy", "Romance"], type: "TV" },
{ en: "K: Return of Kings", jp: "K RETURN OF KINGS", romaji: "K: Return of Kings", genre: [ "Action", "Super Power", "Supernatural"], type: "TV" },
{ en: "Tanaka-kun is Always Listless", jp: "田中くんはいつもけだるげ", romaji: "Tanaka-kun wa Itsumo Kedaruge", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Higurashi Series", jp: "ひぐらしのなく頃に", romaji: "Higurashi no Naku Koro ni", genre: [ "Horror", "Mystery", "Psychological"], type: "TV" },
{ en: "Tokyo Magnitude 8.0", jp: "東京マグニチュード8.0", romaji: "Tokyo Magnitude 8.0", genre: [ "Drama", "Sci-Fi"], type: "TV" },
{ en: "Glasslip", jp: "グラスリップ", romaji: "Glasslip", genre: [ "Romance", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "Haikyuu!!", jp: "ハイキュー!!", romaji: "Haikyuu!!", genre: [ "Comedy", "Drama", "Sports"], type: "TV" },
{ en: "Toradora!", jp: "とらドラ!", romaji: "Toradora", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Erased", jp: "僕だけがいない街", romaji: "Boku dake ga Inai Machi", genre: [ "Mystery", "Psychological", "Supernatural"], type: "TV" },
{ en: "Love, Chunibyo & Other Delusions! Ren", jp: "中二病でも恋がしたい!戀", romaji: "Chuunibyou Demo Koi ga Shitai! Ren", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Danganronpa", jp: "ダンガンロンパ", romaji: "Danganronpa", genre: [ "Horror", "Mystery", "Psychological"], type: "TV" },
{ en: "K-On!", jp: "けいおん!", romaji: "K-On!", genre: [ "Comedy", "Music", "Slice of Life"], type: "TV" },
{ en: "Miss Kobayashi's Dragon Maid", jp: "小林さんちのメイドラゴン", romaji: "Kobayashi-san Chi no Maid Dragon", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Re:Zero", jp: "Re:ゼロから始める異世界生活", romaji: "Re:Zero kara Hajimeru Isekai Seikatsu", genre: [ "Drama", "Fantasy", "Psychological", "Isekai"], type: "TV" },
{ en: "Bungo Stray Dogs", jp: "文豪ストレイドッグス", romaji: "Bungo Stray Dogs", genre: [ "Action", "Mystery", "Super Power"], type: "TV" },
{ en: "Hanasuka Iroha", jp: "花咲くいろは", romaji: "Hanasaku Iroha", genre: [ "Drama", "Slice of Life"], type: "TV" },
{ en: "Plastic Memories", jp: "プラスティック・メモリーズ", romaji: "Plastic Memories", genre: [ "Drama", "Romance", "Sci-Fi"], type: "TV" },
{ en: "Kinmoza", jp: "きんいろモザイク", romaji: "Kiniro Mosaic", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "BTOOOM!", jp: "ブトゥーム", romaji: "BTOOOM!", genre: [ "Action", "Psychological", "Sci-Fi"], type: "TV" },
{ en: "Divine Gate", jp: "ディバインゲート", romaji: "Divine Gate", genre: [ "Action", "Fantasy", "Sci-Fi"], type: "TV" },
{ en: "Wagnaria!!", jp: "ワーキング!!", romaji: "Working!!", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Guilty Crown", jp: "ギルティクラウン", romaji: "Guilty Crown", genre: [ "Action", "Drama", "Sci-Fi"], type: "TV" },
{ en: "Anohana: The Flower We Saw That Day", jp: "あの日見た花の名前を僕達はまだ知らない。", romaji: "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai", genre: [ "Drama", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "Beelzebub", jp: "べるぜバブ", romaji: "Beelzebub", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "Terror in Resonance", jp: "残響のテロル", romaji: "Zankyou no Terror", genre: [ "Mystery", "Psychological", "Thriller"], type: "TV" },
{ en: "Kimi ni Todoke", jp: "君に届け", romaji: "Kimi ni Todoke", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Hell Girl", jp: "地獄少女", romaji: "Jigoku Shoujo", genre: [ "Horror", "Mystery", "Supernatural"], type: "TV" },
{ en: "Konosuba", jp: "この素晴らしい世界に祝福を!", romaji: "Kono Subarashii Sekai ni Shukufuku wo!", genre: [ "Adventure", "Comedy", "Fantasy"], type: "TV" },
{ en: "School Days", jp: "スクールデイズ", romaji: "School Days", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "King's Game", jp: "王様ゲーム", romaji: "Ousama Game", genre: [ "Horror", "Mystery", "Psychological"], type: "TV" },
{ en: "Jormungand", jp: "ヨルムンガンド", romaji: "Jormungand", genre: [ "Action", "Adventure", "Seinen"], type: "TV" },
{ en: "ReLife", jp: "リライフ", romaji: "ReLIFE", genre: [ "Romance", "School", "Slice of Life"], type: "TV" },
{ en: "Psycho-Pass", jp: "サイコパス", romaji: "Psycho-Pass", genre: [ "Action", "Police", "Psychological"], type: "TV" },
{ en: "Trinity Seven", jp: "トリニティセブン", romaji: "Trinity Seven", genre: [ "Action", "Comedy", "Ecchi"], type: "TV" },
{ en: "Non Non Biyori", jp: "のんのんびより", romaji: "Non Non Biyori", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Tsuredure Children", jp: "徒然チルドレン", romaji: "Tsuredure Children", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Fastest Finger First", jp: "ナナマル サンバツ", romaji: "Nana Maru San Batsu", genre: [ "Game", "School", "Seinen"], type: "TV" },
{ en: "Love is Like a Cocktail", jp: "お酒は夫婦になってから", romaji: "Osake wa Fuufu ni Natte kara", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Mushishi", jp: "蟲師", romaji: "Mushishi", genre: [ "Adventure", "Fantasy", "Mystery"], type: "TV" },
{ en: "91 Days", jp: "91デイズ", romaji: "91 Days", genre: [ "Action", "Drama", "Historical"], type: "TV" },
{ en: "Gamers!", jp: "ゲーマーズ!", romaji: "Gamers!", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Hamatora", jp: "ハマトラ", romaji: "Hamatora", genre: [ "Mystery", "Super Power", "Supernatural"], type: "TV" },
{ en: "Jokers Game", jp: "ジョーカー・ゲーム", romaji: "Joker Game", genre: [ "Action", "Historical", "Military"], type: "TV" },
{ en: "Baka and Test", jp: "バカとテストと召喚獣", romaji: "Baka to Test to Shoukanjuu", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Gunslinger Girl", jp: "ガンスリンガー・ガール", romaji: "Gunslinger Girl", genre: [ "Action", "Drama", "Military"], type: "TV" },
{ en: "Elfen Lied", jp: "エルフェンリート", romaji: "Elfen Lied", genre: [ "Action", "Drama", "Horror"], type: "TV" },
{ en: "5 Centimeters per Second", jp: "秒速5センチメートル", romaji: "Byousoku 5 Centimeter", genre: [ "Drama", "Romance", "Slice of Life"], type: "Movie" },
{ en: "D-Frag", jp: "ディーふらぐ！", romaji: "D-Frag", genre: [ "Comedy", "School"], type: "TV" },
{ en: "The Melancholy of Haruhi Suzumiya", jp: "涼宮ハルヒの憂鬱", romaji: "Suzumiya Haruhi no Yuuutsu", genre: [ "Comedy", "Mystery", "Sci-Fi"], type: "TV" },
{ en: "Recovery of an MMO Junkie", jp: "ネト充のススメ", romaji: "Net-juu no Susume", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Anti-Magic Academy", jp: "対魔導学園35試験小隊", romaji: "Taimadou Gakuen 35 Shiken Shoutai", genre: [ "Action", "Fantasy", "Supernatural"], type: "TV" },
{ en: "Blend-S", jp: "ブレンド・S", romaji: "Blend-S", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Pandora Hearts", jp: "パンドラハーツ", romaji: "Pandora Hearts", genre: [ "Adventure", "Fantasy", "Mystery"], type: "TV" },
{ en: "School-Live!", jp: "がっこうぐらし！", romaji: "Gakkougurashi!", genre: [ "Horror", "Mystery", "Psychological"], type: "TV" },
{ en: "Hand Shakers", jp: "ハンドシェイカー", romaji: "Hand Shakers", genre: [ "Action", "Supernatural"], type: "TV" },
{ en: "Kill la Kill", jp: "キルラキル", romaji: "Kill la Kill", genre: [ "Action", "Comedy", "School"], type: "TV" },
{ en: "Kokoro Connect", jp: "ココロコネクト", romaji: "Kokoro Connect", genre: [ "Drama", "Romance", "Supernatural"], type: "TV" },
{ en: "Anime-Gataris", jp: "アニメガタリズ", romaji: "Anime-Gataris", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Juni Taisen: Zodiac War", jp: "十二大戦", romaji: "Juuni Taisen", genre: [ "Action", "Horror"], type: "TV" },
{ en: "A Sister's All You Need", jp: "妹さえいればいい。", romaji: "Imouto sae Ireba Ii", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Black Clover", jp: "ブラッククローバー", romaji: "Black Clover", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Little Busters!", jp: "リトルバスターズ！", romaji: "Little Busters!", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Bloodivores", jp: "ブラッディヴォーレス", romaji: "Bloodivores", genre: [ "Action", "Supernatural", "Vampire"], type: "TV" },
{ en: "Cheating Craft ", jp: "チーティングクラフト", romaji: "Cheating Craft", genre: [ "Action", "Comedy", "School"], type: "TV" },
{ en: "Sakura Quest", jp: "サクラクエスト", romaji: "Sakura Quest", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Is It Wrong to Try to Pick Up Girls in a Dungeon?", jp: "ダンまち", romaji: "DanMachi", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Laid-Back Camp", jp: "ゆるキャン△", romaji: "Yuru Camp△", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Ms. Koizumi Loves Ramen Noodles", jp: "ラーメン大好き小泉さん", romaji: "Ramen Daisuki Koizumi-san", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Log Horizon", jp: "ログ・ホライズン", romaji: "Log Horizon", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Gabriel DropOut", jp: "ガヴリールドロップアウト", romaji: "Gabriel DropOut", genre: [ "Comedy", "Supernatural"], type: "TV" },
{ en: "A Centaur's Life ", jp: "セントールの悩み", romaji: "Centaur no Nayami", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Sabagebu! - Survival Game Club!", jp: "さばげぶっ！", romaji: "Sabagebu!", genre: [ "Action", "Comedy", "Military"], type: "TV" },
{ en: "Slow Start", jp: "スロウスタート", romaji: "Slow Start", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Scorching Ping Pong Girls", jp: "灼熱の卓球娘", romaji: "Shakunetsu no Takkyuu Musume", genre: [ "Sports", "Slice of Life"], type: "TV" },
{ en: "Hal", jp: "ハル", romaji: "Hal", genre: [ "Drama", "Romance", "Sci-Fi"], type: "Movie" },
{ en: "Tsuki ga Kirei", jp: "月がきれい", romaji: "Tsuki ga Kirei", genre: [ "Romance", "School", "Slice of Life"], type: "TV" },
{ en: "Ef: A Tale of Memories", jp: "エフ", romaji: "Ef", genre: [ "Drama", "Mystery", "Romance"], type: "TV" },
{ en: "Aho-Girl", jp: "アホガール", romaji: "Aho Girl", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Alice & Zoroku", jp: "アリスと蔵六", romaji: "Alice to Zouroku", genre: [ "Adventure", "Mystery", "Supernatural"], type: "TV" },
{ en: "Teasing Master Takagi-san", jp: "からかい上手の高木さん", romaji: "Karakai Jouzu no Takagi-san", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Chronicles of the Going Home Club", jp: "帰宅部活動記録", romaji: "Kitakubu Katsudou Kiroku", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "A Place Further Than the Universe", jp: "宇宙よりも遠い場所", romaji: "Sora yori mo Tooi Basho", genre: [ "Adventure", "Comedy", "Drama"], type: "TV" },
{ en: "Interviews with Monster Girls", jp: "亜人ちゃんは語りたい", romaji: "Demi-chan wa Kataritai", genre: [ "Comedy", "Fantasy", "School"], type: "TV" },
{ en: "Night Raid 1931", jp: "夜ノヤッターマン", romaji: "Senkou no Night Raid", genre: [ "Action", "Historical", "Military"], type: "TV" },
{ en: "Denki-Gai", jp: "デンキ街の本屋さん", romaji: "Denki-gai no Honya-san", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Restaurant to Another World", jp: "異世界食堂", romaji: "Isekai Shokudou", genre: [ "Fantasy", "Mystery", "Slice of Life"], type: "TV" },
{ en: "My Teen Romantic Comedy SNAFU", jp: "やはり俺の青春ラブコメはまちがっている。", romaji: "Yahari Ore no Seishun Love Comedy wa Machigatteiru", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Shelter", jp: "シェルター", romaji: "Shelter", genre: [ "Music", "Sci-Fi"], type: "Music" },
{ en: "Gate", jp: "ゲート 自衛隊 彼の地にて、斯く戦えり", romaji: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Eromanga Sensei", jp: "エロマンガ先生", romaji: "Eromanga Sensei", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "The World God Only Knows", jp: "神のみぞ知るセカイ", romaji: "Kami Nomi zo Shiru Sekai", genre: [ "Comedy", "Romance", "Supernatural"], type: "TV" },
{ en: "My Hero Academia", jp: "僕のヒーローアカデミア", romaji: "Boku no Hero Academia", genre: [ "Action", "Comedy", "School"], type: "TV" },
{ en: "The Ryuo's Work is Never Done", jp: "りゅうおうのおしごと！", romaji: "Ryuuou no Oshigoto!", genre: [ "Comedy", "Game", "Slice of Life"], type: "TV" },
{ en: "Berserk ", jp: "ベルセルク", romaji: "Berserk", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Citrus", jp: "シトラス", romaji: "Citrus", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Masamune-kun's Revenge", jp: "政宗くんのリベンジ", romaji: "Masamune-kun no Revenge", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Servant x Service", jp: "サーバント×サービス", romaji: "Servant x Service", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "My First Girlfriend is a Gal", jp: "はじめてのギャル", romaji: "Hajimete no Gal", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Monthly Girls' Nozaki-kun", jp: "月刊少女野崎くん", romaji: "Gekkan Shoujo Nozaki-kun", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "My Little Monster", jp: "となりの怪物くん", romaji: "Tonari no Kaibutsu-kun", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Love Tyrant", jp: "恋愛暴君", romaji: "Renai Boukun", genre: [ "Comedy", "Romance", "Supernatural"], type: "TV" },
{ en: "March Comes in Like a Lion", jp: "3月のライオン", romaji: "3-gatsu no Lion", genre: [ "Drama", "Game", "Slice of Life"], type: "TV" },
{ en: "Orange", jp: "オレンジ", romaji: "Orange", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "ReWrite", jp: "Rewrite", romaji: "ReWrite", genre: [ "Action", "Fantasy", "Romance"], type: "TV" },
{ en: "ALDNOAH.ZERO", jp: "アルドノア・ゼロ", romaji: "Aldnoah.Zero", genre: [ "Action", "Mecha", "Sci-Fi"], type: "TV" },
{ en: "Seraph of the End", jp: "終わりのセラフ", romaji: "Owari no Seraph", genre: [ "Action", "Military", "Supernatural", "Vampire"], type: "TV" },
{ en: "White Album", jp: "ホワイトアルバム", romaji: "White Album", genre: [ "Drama", "Romance"], type: "TV" },
{ en: "White Album 2", jp: "ホワイトアルバム2", romaji: "White Album 2", genre: [ "Drama", "Romance"], type: "TV" },
{ en: "The Ancient Magus' Bride", jp: "魔法使いの嫁", romaji: "Mahoutsukai no Yome", genre: [ "Fantasy", "Magic", "Supernatural"], type: "TV" },
{ en: "Comic Girls", jp: "こみっくがーるず", romaji: "Comic Girls", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "My Sweet Tyrant", jp: "あっくんとカノジョ", romaji: "Akkun to Kanojo", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Overlord", jp: "オーバーロード", romaji: "Overlord", genre: [ "Action", "Fantasy", "Game"], type: "TV" },
{ en: "DARLING in the FRANXX", jp: "ダーリン・イン・ザ・フランキス", romaji: "Darling in the Franxx", genre: [ "Action", "Drama", "Mecha"], type: "TV" },
{ en: "Crossing Time", jp: "踏切時間", romaji: "Fumikiri Jikan", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Snow White with the Red Hair", jp: "赤髪の白雪姫", romaji: "Akagami no Shirayukihime", genre: [ "Drama", "Fantasy", "Romance"], type: "TV" },
{ en: "Hinamatsuri", jp: "ヒナまつり", romaji: "Hinamatsuri", genre: [ "Comedy", "Sci-Fi", "Slice of Life"], type: "TV" },
{ en: "Locodol", jp: "普通の女子校生が【ろこどる】やってみた。", romaji: "Locodol", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Amanchu!", jp: "あまんちゅ！", romaji: "Amanchu!", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Welcome to the N-H-K", jp: "NHKにようこそ！", romaji: "NHK ni Youkoso!", genre: [ "Comedy", "Drama", "Psychological"], type: "TV" },
{ en: "Mob Psycho 100", jp: "モブサイコ100", romaji: "Mob Psycho 100", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "Love Lab", jp: "ラブライブ！", romaji: "Love Lab", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Yotsuiro Biyori", jp: "四月は君の嘘", romaji: "Yotsuiro Biyori", genre: [ "Slice of Life", "Seinen"], type: "TV" },
{ en: "The Idolmaster", jp: "アイドルマスター", romaji: "The Idolmaster", genre: [ "Music", "Slice of Life"], type: "TV" },
{ en: "THE IDOLM@STER CINDERELLA GIRLS", jp: "アイドルマスター シンデレラガールズ", romaji: "The Idolmaster Cinderella Girls", genre: [ "Music", "Slice of Life"], type: "TV" },
{ en: "You Don't Know Gunma Yet", jp: "お前はまだグンマを知らない", romaji: "Omae wa Mada Gunma wo Shiranai", genre: [ "Comedy", "School"], type: "TV" },
{ en: "PERSONA5", jp: "ペルソナ5", romaji: "Persona 5", genre: [ "Action", "Supernatural"], type: "TV" },
{ en: "Love Live! School Idol Project", jp: "ラブライブ！スクールアイドルプロジェクト", romaji: "Love Live! School Idol Project", genre: [ "Music", "School", "Slice of Life"], type: "TV" },
{ en: "Love Live! Sunshine!!", jp: "ラブライブ！サンシャイン!!", romaji: "Love Live! Sunshine!!", genre: [ "Music", "School", "Slice of Life"], type: "TV" },
{ en: "Hakata Tonkotsu Ramens", jp: "博多豚骨ラーメンズ", romaji: "Hakata Tonkotsu Ramens", genre: [ "Action", "Mystery"], type: "TV" },
{ en: "No.6", jp: "ナンバー・シックス", romaji: "No.6", genre: [ "Action", "Sci-Fi"], type: "TV" },
{ en: "Grimgar of Fantasy and Ash", jp: "灰と幻想のグリムガル", romaji: "Hai to Gensou no Grimgar", genre: [ "Action", "Adventure", "Drama"], type: "TV" },
{ en: "Kakegurui", jp: "賭ケグルイ", romaji: "Kakegurui", genre: [ "Drama", "Mystery", "Psychological"], type: "TV" },
{ en: "The Disastrous Life of Saiki K.", jp: "斉木楠雄のΨ難", romaji: "Saiki Kusuo no Psi-nan", genre: [ "Comedy", "School", "Supernatural"], type: "TV" },
{ en: "The Seven Deadly Sins", jp: "七つの大罪", romaji: "Nanatsu no Taizai", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Hyouka", jp: "氷菓", romaji: "Hyouka", genre: [ "Mystery", "Romance", "School"], type: "TV" },
{ en: "Violet Evergarden ", jp: "ヴァイオレット・エヴァーガーデン", romaji: "Violet Evergarden", genre: [ "Drama", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Durarara!!", jp: "デュラララ!!", romaji: "Durarara!!", genre: [ "Action", "Mystery", "Supernatural"], type: "TV" },
{ en: "Dagashi Kashi", jp: "だがしかし", romaji: "Dagashi Kashi", genre: [ "Comedy", "Shounen", "Slice of Life"], type: "TV" },
{ en: "School Babysitters", jp: "学園ベビーシッターズ", romaji: "Gakuen Babysitters", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "The \"Hentai\"  Prince and the Stony Cat.", jp: "変態王子と笑わない猫。", romaji: "Hentai Ouji to Warawanai Neko.", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Black Butler", jp: "黒執事", romaji: "Kuroshitsuji", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "The Pet Girl of Sakurasou", jp: "さくら荘のペットな彼女", romaji: "Sakurasou no Pet na Kanojo", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Gintama ", jp: "銀魂", romaji: "Gintama", genre: [ "Action", "Comedy", "Sci-Fi"], type: "TV" },
{ en: "My Love Story!!", jp: "俺物語!!", romaji: "Ore Monogatari!!", genre: [ "Comedy", "Romance", "Shoujo"], type: "TV" },
{ en: "Record of Grancrest War", jp: "グランクレスト戦記", romaji: "Grancrest Senki", genre: [ "Action", "Fantasy", "Romance"], type: "TV" },
{ en: "Island", jp: "アイランド", romaji: "Island", genre: [ "Drama", "Sci-Fi"], type: "TV" },
{ en: "Angels of Death", jp: "殺戮の天使", romaji: "Satsuriku no Tenshi", genre: [ "Adventure", "Horror", "Psychological"], type: "TV" },
{ en: "Chio's School Road", jp: "ちおちゃんの通学路", romaji: "Chio-chan no Tsuugakuro", genre: [ "Comedy", "School"], type: "TV" },
{ en: "Cells at Work!", jp: "はたらく細胞", romaji: "Hataraku Saibou", genre: [ "Comedy", "Shounen"], type: "TV" },
{ en: "Asobi Asobase", jp: "あそびあそばせ", romaji: "Asobi Asobase", genre: [ "Comedy", "School"], type: "TV" },
{ en: "Saga of Tanya the Evil", jp: "幼女戦記", romaji: "Youjo Senki", genre: [ "Action", "Military", "Magic"], type: "TV" },
{ en: "Barakamon", jp: "ばらかもん", romaji: "Barakamon", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Dantalian no Shoka", jp: "ダンタリアンの書架", romaji: "Dantalian no Shoka", genre: [ "Mystery", "Supernatural"], type: "TV" },
{ en: "Nichijou", jp: "日常", romaji: "Nichijou", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Gosick", jp: "ゴシック", romaji: "Gosick", genre: [ "Mystery", "Historical", "Drama"], type: "TV" },
{ en: "Komori-san Can't Decline!", jp: "こもりさんは断れない!", romaji: "Komori-san wa Kotowarenai!", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Waiting in the Summer", jp: "あの夏で待ってる", romaji: "Ano Natsu de Matteru", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Blue Exorcist", jp: "青の祓魔師", romaji: "Ao no Exorcist", genre: [ "Action", "Supernatural", "Fantasy"], type: "TV" },
{ en: "Myself; Yourself", jp: "マイセルフ；ユアセルフ", romaji: "Myself; Yourself", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Soul Eater", jp: "ソウルイーター", romaji: "Soul Eater", genre: [ "Action", "Adventure", "Supernatural"], type: "TV" },
{ en: "Soul Eater Not!", jp: "ソウルイーターノット!", romaji: "Soul Eater Not!", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Akame ga Kill!", jp: "アカメが斬る!", romaji: "Akame ga Kill!", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Yuyushiki", jp: "ゆゆ式", romaji: "Yuyushiki", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "From the New World", jp: "新世界より", romaji: "Shinsekai Yori", genre: [ "Drama", "Mystery", "Sci-Fi"], type: "TV" },
{ en: "Upotte!!", jp: "うぽって!!", romaji: "Upotte!!", genre: [ "Action", "Comedy", "Military"], type: "TV" },
{ en: "Eden of the East", jp: "東のエデン", romaji: "Higashi no Eden", genre: [ "Action", "Mystery", "Drama"], type: "TV" },
{ en: "Serial Experiment Lain", jp: "シリアルエクスペリメンツ・レイン", romaji: "Serial Experiments Lain", genre: [ "Drama", "Mystery", "Psychological"], type: "TV" },
{ en: "Riddle Story of Devil", jp: "悪魔のリドル", romaji: "Akuma no Riddle", genre: [ "Action", "School", "Shoujo Ai"], type: "TV" },
{ en: "In Search of the Lost Future", jp: "失われた未来を求めて", romaji: "Ushinawareta Mirai wo Motomete", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Inu x Boku SS", jp: "妖狐×僕SS", romaji: "Inu x Boku SS", genre: [ "Comedy", "Romance", "Supernatural"], type: "TV" },
{ en: "Mysterious Girlfriend X", jp: "謎の彼女X", romaji: "Nazo no Kanojo X", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Sweetness & Lightning", jp: "甘々と稲妻", romaji: "Amaama to Inazuma", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Yamishibai: Japanese Ghost Stories", jp: "闇芝居", romaji: "Yamishibai: Japanese Ghost Stories", genre: [ "Horror", "Supernatural"], type: "TV" },
{ en: "Junji Ito Collection", jp: "伊藤潤二コレクション", romaji: "Junji Ito Collection", genre: [ "Horror", "Supernatural"], type: "TV" },
{ en: "RErideD: Derrida, Who Leaps Through Time", jp: "RErideD-刻越えのデリダ", romaji: "RErideD: Tokigoe no Derrida", genre: [ "Action", "Drama", "Sci-Fi"], type: "TV" },
{ en: "Frankenstein Family", jp: "怪物事変", romaji: "Shiyan Pin Jiating", genre: [ "Drama", "Sci-Fi", "Slice of Life"], type: "TV" },
{ en: "My Wife is the Student Council President ", jp: "おくさまが生徒会長!", romaji: "Okusama ga Seitokaichou!", genre: [ "Comedy", "Ecchi", "Romance"], type: "TV" },
{ en: "Dusk Maiden of Amnesia", jp: "黄昏乙女×アムネジア", romaji: "Tasogare Otome x Amnesia", genre: [ "Horror", "Mystery", "Romance"], type: "TV" },
{ en: "Time of Eve", jp: "イヴの時間", romaji: "Eve no Jikan", genre: [ "Drama", "Sci-Fi", "Slice of Life"], type: "ONA" },
{ en: "Aquatic Language", jp: "水のコトバ", romaji: "Mizu no Kotoba", genre: [ "Drama", "Sci-Fi", "Slice of Life"], type: "ONA" },
{ en: "Shimoneta: A Boring World Where the Concept of Dirty Jokes Doesn't Exist", jp: "下ネタという概念が存在しない退屈な世界", romaji: "Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai", genre: [ "Comedy", "Ecchi", "School"], type: "TV" },
{ en: "That Time I Got Reincarnated as a Slime", jp: "転生したらスライムだった件", romaji: "Tensei Shitara Slime Datta Ken", genre: [ "Action", "Adventure", "Fantasy", "Isekai"], type: "TV" },
{ en: "Rascal Does Not Dream of Bunny Girl Senpai", jp: "青春ブタ野郎はバニーガール先輩の夢を見ない", romaji: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", genre: [ "Comedy", "Supernatural", "Romance"], type: "TV" },
{ en: "Zombie Land Saga", jp: "ゾンビランドサガ", romaji: "Zombie Land Saga", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "Code Geass", jp: "コードギアス", romaji: "Code Geass: Hangyaku no Lelouch", genre: [ "Action", "Drama", "Mecha"], type: "TV" },
{ en: "Goblin Slayer", jp: "ゴブリンスレイヤー", romaji: "Goblin Slayer", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Daily Lives of High School Boys", jp: "男子高校生の日常", romaji: "Danshi Koukousei no Nichijou", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Dog & Scissors ", jp: "犬とハサミは使いよう", romaji: "Inu to Hasami wa Tsukaiyou", genre: [ "Comedy", "Supernatural"], type: "TV" },
{ en: "A Certain Magical Index", jp: "とある魔術の禁書目録", romaji: "Toaru Majutsu no Index", genre: [ "Action", "Sci-Fi", "Super Power"], type: "TV" },
{ en: "Patema Inverted", jp: "サカサマのパテマ", romaji: "Sakasama no Patema", genre: [ "Adventure", "Drama", "Sci-Fi"], type: "Movie" },
{ en: "A Lull in the Sea", jp: "凪のあすから", romaji: "Nagi no Asukara", genre: [ "Drama", "Fantasy", "Romance"], type: "TV" },
{ en: "Punch Line", jp: "パンチライン", romaji: "Punch Line", genre: [ "Comedy", "Ecchi", "Supernatural"], type: "TV" },
{ en: "Hyakko", jp: "ひゃっこ", romaji: "Hyakko", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Hinomaru Sumo", jp: "火ノ丸相撲", romaji: "Hinomaruzumou", genre: [ "Martial Arts", "Sports", "Shounen"], type: "TV" },
{ en: "Fate/stay night", jp: "Fate/stay night", romaji: "Fate/stay night", genre: [ "Action", "Fantasy", "Magic"], type: "TV" },
{ en: "Fate/Zero", jp: "Fate/Zero", romaji: "Fate/Zero", genre: [ "Action", "Fantasy", "Supernatural"], type: "TV" },
{ en: "Toriko", jp: "トリコ", romaji: "Toriko", genre: [ "Action", "Adventure", "Comedy"], type: "TV" },
{ en: "Squid Girl", jp: "侵略！イカ娘", romaji: "Shinryaku! Ika Musume", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Yamada-kun and the Seven Witches", jp: "山田くんと7人の魔女", romaji: "Yamada-kun to 7-nin no Majo", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Kiznaiver", jp: "キズナイーバー", romaji: "Kiznaiver", genre: [ "Drama", "Sci-Fi", "Super Power"], type: "TV" },
{ en: "Monster Musume", jp: "モンスター娘のいる日常", romaji: "Monster Musume no Iru Nichijou", genre: [ "Comedy", "Ecchi", "Fantasy"], type: "TV" },
{ en: "Occultic;Nine", jp: "オカルティック・ナイン", romaji: "Occultic;Nine", genre: [ "Mystery", "Sci-Fi", "Supernatural"], type: "TV" },
{ en: "Golden Kamuy", jp: "ゴールデンカムイ", romaji: "Golden Kamuy", genre: [ "Action", "Adventure", "Historical"], type: "TV" },
{ en: "Bakuon!!", jp: "ばくおん!!", romaji: "Bakuon!!", genre: [ "Comedy", "Seinen", "Slice of Life"], type: "TV" },
{ en: "A Silent Voice", jp: "聲の形", romaji: "Koe no Katachi", genre: [ "Drama", "Romance", "School"], type: "Movie" },
{ en: "Wolf Children", jp: "おおかみこどもの雨と雪", romaji: "Ookami Kodomo no Ame to Yuki", genre: [ "Fantasy", "Slice of Life", "Supernatural"], type: "Movie" },
{ en: "Magical Girl Raising Project", jp: "魔法少女育成計画", romaji: "Mahou Shoujo Ikusei Keikaku", genre: [ "Action", "Fantasy", "Supernatural"], type: "TV" },
{ en: "Neon Genesis Evangelion", jp: "新世紀エヴァンゲリオン", romaji: "Neon Genesis Evangelion", genre: [ "Action", "Drama", "Mecha"], type: "TV" },
{ en: "Grand Blue", jp: "ぐらんぶる", romaji: "Grand Blue", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Bloom Into You", jp: "やがて君になる", romaji: "Yagate Kimi ni Naru", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Happy Sugar Life", jp: "ハッピーシュガーライフ", romaji: "Happy Sugar Life", genre: [ "Drama", "Horror", "Psychological"], type: "TV" },
{ en: "Wotakoi: Love is Hard for Otaku", jp: "ヲタクに恋は難しい", romaji: "Wotaku ni Koi wa Muzukashii", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Magical Girl Site", jp: "魔法少女サイト", romaji: "Mahou Shoujo Site", genre: [ "Drama", "Horror", "Psychological"], type: "TV" },
{ en: "Boogiepop and Others", jp: "ブギーポップは笑わない", romaji: "Boogiepop wa Warawanai", genre: [ "Mystery", "Psychological", "Supernatural"], type: "TV" },
{ en: "The Rising of the Shield Hero", jp: "盾の勇者の成り上がり", romaji: "Tate no Yuusha no Nariagari", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "The Promised Neverland", jp: "約束のネバーランド", romaji: "Yakusoku no Neverland", genre: [ "Horror", "Mystery", "Sci-Fi"], type: "TV" },
{ en: "Hi Score Girl", jp: "ハイスコアガール", romaji: "Hi Score Girl", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Back Street Girls: Gokudols", jp: "Back Street Girls -ゴクドルズ-", romaji: "Back Street Girls: Gokudols", genre: [ "Comedy", "Seinen"], type: "TV" },
{ en: "Mitsuboshi Colors", jp: "三ツ星カラーズ", romaji: "Mitsuboshi Colors", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "My Roommate is a Cat", jp: "同居人はひざ、時々、頭のうえ。", romaji: "Doukyonin wa Hiza, Tokidoki, Atama no Ue.", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "WATATEN! An Angel Flew Down to Me", jp: "私に天使が舞い降りた!", romaji: "Watashi ni Tenshi ga Maiorita!", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "3D Kanojo: Real Girl", jp: "3D彼女 リアルガール", romaji: "3D Kanojo: Real Girl", genre: [ "Romance", "School", "Slice of Life"], type: "TV" },
{ en: "Flying Witch", jp: "ふらいんぐうぃっち", romaji: "Flying Witch", genre: [ "Comedy", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "Kaguya-sama: Love Is War", jp: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～", romaji: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen", genre: [ "Comedy", "Psychological", "Romance"], type: "TV" },
{ en: "The Quintessential Quintuplets", jp: "五等分の花嫁", romaji: "Go-Toubun no Hanayome", genre: [ "Comedy", "Romance", "Harem"], type: "TV" },
{ en: "I Want to Eat Your Pancreas", jp: "君の膵臓をたべたい", romaji: "Kimi no Suizou wo Tabetai", genre: [ "Drama", "Romance", "Slice of Life"], type: "Movie" },
{ en: "SSSS.GRIDMAN", jp: "SSSS.GRIDMAN", romaji: "SSSS.GRIDMAN", genre: [ "Action", "Mecha", "Sci-Fi"], type: "TV" },
{ en: "Perfect Blue", jp: "パーフェクトブルー", romaji: "Perfect Blue", genre: [ "Drama", "Horror", "Psychological"], type: "Movie" },
{ en: "When Marnie Was There", jp: "思い出のマーニー", romaji: "Omoide no Marnie", genre: [ "Drama", "Mystery", "Psychological"], type: "Movie" },
{ en: "Maquia: When the Promised Flower Blooms", jp: "さよならの朝に約束の花をかざろう", romaji: "Sayonara no Asa ni Yakusoku no Hana wo Kazarou", genre: [ "Drama", "Fantasy"], type: "Movie" },
{ en: "How Not to Summon a Demon Lord", jp: "異世界魔王と召喚少女の奴隷魔術", romaji: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu", genre: [ "Comedy", "Fantasy", "Ecchi"], type: "TV" },
{ en: "The Price of Smiles", jp: "エガオノダイカ", romaji: "Egao no Daika", genre: [ "Drama", "Fantasy", "Military"], type: "TV" },
{ en: "Lucky Star", jp: "らき☆すた", romaji: "Lucky☆Star", genre: [ "Comedy", "Parody", "Slice of Life"], type: "TV" },
{ en: "Bleach", jp: "ブリーチ", romaji: "Bleach", genre: [ "Action", "Adventure", "Super Power"], type: "TV" },
{ en: "Domestic Girlfriend", jp: "ドメスティックな彼女", romaji: "Domestic na Kanojo", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "The Royal Tutor", jp: "王室教師ハイネ", romaji: "Oushitsu Kyoushi Haine", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Aoharu x Machinegun", jp: "青春×機関銃", romaji: "Aoharu x Kikanjuu", genre: [ "Action", "Comedy", "Sports"], type: "TV" },
{ en: "Flip Flappers", jp: "フリップフラッパーズ", romaji: "Flip Flappers", genre: [ "Adventure", "Comedy", "Sci-Fi"], type: "TV" },
{ en: "Run with the Wind", jp: "風が強く吹いている", romaji: "Kaze ga Tsuyoku Fuiteiru", genre: [ "Drama", "Sports"], type: "TV" },
{ en: "How Clumsy You Are, Miss Ueno", jp: "上野さんは不器用", romaji: "Ueno-san wa Bukiyou", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Fruits Basket", jp: "フルーツバスケット", romaji: "Fruits Basket", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Hitori Bocchi's ○○ Lifestyle", jp: "ひとりぼっちの○○生活", romaji: "Hitoribocchi no Marumaruseikatsu", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Joshi Kausei", jp: "女子かう生", romaji: "Joshikausei", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Nobunaga Teacher's Young Bride", jp: "ノブナガ先生の幼な妻", romaji: "Nobunaga-sensei no Osanazuma", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Demon Slayer: Kimetsu no Yaiba", jp: "鬼滅の刃", romaji: "Kimetsu no Yaiba", genre: [ "Action", "Demons", "Historical"], type: "TV" },
{ en: "We Never Learn: BOKUBEN", jp: "ぼくたちは勉強ができない", romaji: "Bokutachi wa Benkyou ga Dekinai", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Black Bullet", jp: "ブラック・ブレット", romaji: "Black Bullet", genre: [ "Action", "Sci-Fi", "Supernatural"], type: "TV" },
{ en: "GJ Club", jp: "GJ部", romaji: "GJ-bu  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Senryu Girl", jp: "川柳少女", romaji: "Senryuu Shoujo  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Ao-chan Can't Study!", jp: "淫らな青ちゃんは勉強ができない", romaji: "Midara na Ao-chan wa Benkyou ga Dekinai  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Usagi Drop", jp: "うさぎドロップ", romaji: "Usagi Drop  ", genre: [ "Drama", "Josei", "Slice of Life"], type: "TV" },
{ en: "The Morose Mononokean", jp: "不機嫌なモノノケ庵", romaji: "Fukigen na Mononokean  ", genre: [ "Comedy", "Supernatural", "Slice of Life"], type: "TV" },
{ en: "Chihayafuru", jp: "ちはやふる", romaji: "Chihayafuru  ", genre: [ "Drama", "Game", "School"], type: "TV" },
{ en: "GTO", jp: "GTO", romaji: "Great Teacher Onizuka (GTO)  ", genre: [ "Comedy", "Drama", "School"], type: "TV" },
{ en: "Silver Spoon", jp: "銀の匙", romaji: "Gin no Saji  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Wise Man's Grandchild", jp: "賢者の孫", romaji: "Kenja no Mago  ", genre: [ "Action", "Fantasy", "Magic"], type: "TV" },
{ en: "Honey and Clover", jp: "ハチミツとクローバー", romaji: "Hachimitsu to Clover  ", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Liz and the Blue Bird", jp: "リズと青い鳥", romaji: "Liz to Aoi Tori  ", genre: [ "Drama", "Music", "Slice of Life"], type: "Movie" },
{ en: "Your Voice -KIMIKOE-", jp: "君の声を届けたい", romaji: "Kimi no Koe wo Todoketai  ", genre: [ "Drama", "Music", "Slice of Life"], type: "Movie" },
{ en: "Summer Wars", jp: "サマーウォーズ", romaji: "Summer Wars  ", genre: [ "Action", "Adventure", "Sci-Fi"], type: "Movie" },
{ en: "Flavors of Youth", jp: "詩季織々", romaji: "Shikioriori  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "Movie" },
{ en: "Alderamin on the Sky", jp: "ねじ巻き精霊戦記 天鏡のアルデラミン", romaji: "Nejimaki Seirei Senki: Tenkyou no Alderamin  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Banana Fish", jp: "BANANA FISH", romaji: "Banana Fish  ", genre: [ "Action", "Drama", "Shoujo"], type: "TV" },
{ en: "Made in Abyss", jp: "メイドインアビス", romaji: "Made in Abyss  ", genre: [ "Adventure", "Drama", "Fantasy"], type: "TV" },
{ en: "Monster", jp: "MONSTER", romaji: "Monster  ", genre: [ "Drama", "Horror", "Mystery"], type: "TV" },
{ en: "Handa-kun", jp: "はんだくん", romaji: "Handa-kun  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Magical Sempai", jp: "手品先輩", romaji: "Tejina-senpai  ", genre: [ "Comedy", "Ecchi", "Magic"], type: "TV" },
{ en: "Are You Lost?", jp: "ソウナンですか？", romaji: "Sounan Desu ka?  ", genre: [ "Comedy", "Seinen"], type: "TV" },
{ en: "Fire Force", jp: "炎炎ノ消防隊", romaji: "Enen no Shouboutai  ", genre: [ "Action", "Supernatural", "Shounen"], type: "TV" },
{ en: "Dr. Stone", jp: "ドクターストーン", romaji: "Dr. Stone  ", genre: [ "Adventure", "Sci-Fi", "Shounen"], type: "TV" },
{ en: "If It’s For My Daughter, I’d Even Defeat a Demon Lord", jp: "娘のためならば、俺はもしかしたら魔王も倒せるかもしれない。", romaji: "Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai  ", genre: [ "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?", jp: "通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？", romaji: "Tsuujou Kougeki ga Zentai Kougeki de ni Kai Kougeki no Okaasan wa Suki desu ka?  ", genre: [ "Adventure", "Comedy", "Fantasy"], type: "TV" },
{ en: "The Anthem of the Heart", jp: "心が叫びたがってるんだ。", romaji: "Kokoro ga Sakebitagatterunda.  ", genre: [ "Drama", "Romance"], type: "Movie" },
{ en: "The Girl Who Leapt Through Time", jp: "時をかける少女", romaji: "Toki wo Kakeru Shoujo  ", genre: [ "Adventure", "Drama", "Romance"], type: "Movie" },
{ en: "Rainbow: Nisha Rokubou no Shichinin", jp: "虹色デイズ", romaji: "Rainbow: Nisha Rokubou no Shichinin  ", genre: [ "Drama", "Historical", "Seinen"], type: "TV" },
{ en: "Love and Lies", jp: "恋と嘘", romaji: "Koi to Uso  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "JoJo's Bizarre Adventure", jp: "ジョジョ", romaji: "JoJo no Kimyou na Bouken  ", genre: [ "Action", "Adventure", "Supernatural", "Vampire"], type: "TV" },
{ en: "O Maidens in Your Savage Season", jp: "荒ぶる季節の乙女どもよ。", romaji: "Araburu Kisetsu no Otome-domo yo.  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Cop Craft", jp: "コップクラフト", romaji: "Cop Craft  ", genre: [ "Action", "Sci-Fi", "Police"], type: "TV" },
{ en: "Natsume's Book of Friends", jp: "夏目友人帳", romaji: "Natsume Yuujinchou  ", genre: [ "Drama", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Gurren Lagann", jp: "天元突破グレンラガン", romaji: "Tengen Toppa Gurren Lagann  ", genre: [ "Action", "Adventure", "Mecha"], type: "TV" },
{ en: "SKET Dance", jp: "スケットダンス", romaji: "SKET Dance  ", genre: [ "Comedy", "School", "Shounen"], type: "TV" },
{ en: "BlackFox", jp: "ブラックフォックス", romaji: "BlackFox  ", genre: [ "Action", "Super Power", "Supernatural"], type: "Movie" },
{ en: "Showa Genroku Rakugo Shinju", jp: "昭和元禄落語心中", romaji: "Shouwa Genroku Rakugo Shinjuu  ", genre: [ "Drama", "Historical", "Slice of Life"], type: "TV" },
{ en: "ORESUKI: Are you the only one who loves me?", jp: "俺好き", romaji: "Ore wo Suki nano wa Omae dake ka yo (ORESUKI)  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Welcome to Demon School! Iruma-kun", jp: "魔入りました！入間くん", romaji: "Mairimashita! Iruma-kun  ", genre: [ "Comedy", "Demons", "Fantasy"], type: "TV" },
{ en: "Assassins Pride", jp: "アサシンズプライド", romaji: "Assassins Pride  ", genre: [ "Action", "Fantasy", "Supernatural"], type: "TV" },
{ en: "Wasteful Days of High School Girls", jp: "女子高生の無駄づかい", romaji: "Joshikousei no Mudazukai  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Good Luck Girl!", jp: "貧乏神が!", romaji: "Binbougami ga!  ", genre: [ "Comedy", "Parody", "Supernatural"], type: "TV" },
{ en: "Nana", jp: "NANA", romaji: "Nana  ", genre: [ "Drama", "Music", "Romance"], type: "TV" },
{ en: "Skip Beat!", jp: "スキップ・ビート!", romaji: "Skip Beat!  ", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Engaged to the Unidentified", jp: "未確認で進行形", romaji: "Mikakunin de Shinkoukei  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Blast of Tempest", jp: "絶園のテンペスト", romaji: "Zetsuen no Tempest  ", genre: [ "Action", "Mystery", "Psychological"], type: "TV" },
{ en: "Tada Never Falls in Love", jp: "多田くんは恋をしない", romaji: "Tada-kun wa Koi wo Shinai  ", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Tamako Market", jp: "たまこマーケット", romaji: "Tamako Market  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Strawberry Marshmallow", jp: "苺ましまろ", romaji: "Ichigo Mashimaro  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Maid-Sama!", jp: "会長はメイド様!", romaji: "Kaichou wa Maid-sama!  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Fate/Grand Order: Babylonia", jp: "Fate/Grand Order -絶対魔獣戦線バビロニア-", romaji: "Fate/Grand Order: Zettai Majuu Sensen Babylonia  ", genre: [ "Action", "Fantasy", "Magic"], type: "TV" },
{ en: "Fate/Stay Night Movie: Heaven’s Feel", jp: "劇場版 Fate/stay night [Heaven's Feel]", romaji: "Fate/stay night Movie: Heaven’s Feel  ", genre: [ "Action", "Fantasy", "Magic"], type: "Movie" },
{ en: "Kabaneri of the Iron Fortress", jp: "甲鉄城のカバネリ", romaji: "Koutetsujou no Kabaneri  ", genre: [ "Action", "Horror", "Supernatural"], type: "TV" },
{ en: "Kids on the Slope", jp: "坂道のアポロン", romaji: "Sakamichi no Apollon  ", genre: [ "Drama", "Music", "Romance"], type: "TV" },
{ en: "Inuyasha", jp: "犬夜叉", romaji: "Inuyasha  ", genre: [ "Action", "Adventure", "Supernatural"], type: "TV" },
{ en: "Arakawa Under the Bridge", jp: "荒川アンダー ザ ブリッジ", romaji: "Arakawa Under the Bridge  ", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Girls’ Last Tour", jp: "少女終末旅行", romaji: "Shoujo Shuumatsu Ryokou  ", genre: [ "Adventure", "Slice of Life"], type: "TV" },
{ en: "Shirobako", jp: "SHIROBAKO", romaji: "Shirobako  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "My Neighbor Seki", jp: "となりの関くん", romaji: "Tonari no Seki-kun  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Oreshura", jp: "俺の彼女と幼なじみが修羅場すぎる", romaji: "Ore no Kanojo to Osananajimi ga Shuraba Sugiru (Oreshura)  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Vinland Saga", jp: "ヴィンランド・サガ", romaji: "Vinland Saga  ", genre: [ "Action", "Adventure", "Historical"], type: "TV" },
{ en: "Kotoura-san", jp: "琴浦さん", romaji: "Kotoura-san  ", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Keep Your Hands Off Eizouken!", jp: "映像研には手を出すな!", romaji: "Eizouken ni wa Te wo Dasu na!  ", genre: [ "Adventure", "Comedy", "School"], type: "TV" },
{ en: "A Destructive God Sits Next to Me", jp: "ぼくのとなりに暗黒破壊神がいます。", romaji: "Boku no Tonari ni Ankoku Hakaishin ga Imasu.  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Land of the Lustrous", jp: "宝石の国", romaji: "Houseki no Kuni  ", genre: [ "Action", "Fantasy", "Seinen"], type: "TV" },
{ en: "The Demon Girl Next Door", jp: "まちカドまぞく", romaji: "Machikado Mazoku  ", genre: [ "Comedy", "Magic", "Slice of Life"], type: "TV" },
{ en: "Interspecies Reviewers", jp: "異種族レビュアーズ", romaji: "Ishuzoku Reviewers  ", genre: [ "Comedy", "Ecchi", "Fantasy"], type: "TV" },
{ en: "Lovely Complex", jp: "ラブ★コン", romaji: "Lovely★Complex  ", genre: [ "Comedy", "Romance", "Shoujo"], type: "TV" },
{ en: "Ms.Vampire who lives in my neighborhood", jp: "となりの吸血鬼さん", romaji: "Tonari no Kyuuketsuki-san  ", genre: [ "Comedy", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "The Irregular at Magic High School", jp: "魔法科高校の劣等生", romaji: "Mahouka Koukou no Rettousei  ", genre: [ "Action", "Sci-Fi", "Supernatural"], type: "TV" },
{ en: "FLCL", jp: "フリクリ", romaji: "FLCL  ", genre: [ "Action", "Comedy", "Sci-Fi"], type: "OVA" },
{ en: "Carole and Tuesday", jp: "キャロル&チューズデイ", romaji: "Carole & Tuesday  ", genre: [ "Drama", "Music", "Sci-Fi"], type: "TV" },
{ en: "Seton Academy: Join the Pack!", jp: "群れなせ！シートン学園", romaji: "Murenase! Seton Gakuen  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Darwin’s Game", jp: "ダーウィンズゲーム", romaji: "Darwin's Game  ", genre: [ "Action", "Sci-Fi", "Mystery"], type: "TV" },
{ en: "In/Spectre", jp: "虚構推理", romaji: "Kyokou Suiri  ", genre: [ "Mystery", "Romance", "Supernatural"], type: "TV" },
{ en: "Colorful", jp: "カラフル", romaji: "Colorful  ", genre: [ "Drama", "Slice of Life", "Supernatural"], type: "Movie" },
{ en: "Promare", jp: "プロメア", romaji: "Promare  ", genre: [ "Action", "Mecha", "Sci-Fi"], type: "Movie" },
{ en: "Grave of the Fireflies", jp: "火垂るの墓", romaji: "Hotaru no Haka  ", genre: [ "Drama", "Historical"], type: "Movie" },
{ en: "Spirited Away", jp: "千と千尋の神隠し", romaji: "Sen to Chihiro no Kamikakushi  ", genre: [ "Adventure", "Supernatural"], type: "Movie" },
{ en: "Howls Moving Castle", jp: "ハウルの動く城", romaji: "Howl no Ugoku Shiro  ", genre: [ "Adventure", "Fantasy", "Romance"], type: "Movie" },
{ en: "Toilet-Bound Hanako-kun", jp: "地縛少年花子くん", romaji: "Jibaku Shounen Hanako-kun  ", genre: [ "Comedy", "School", "Supernatural"], type: "TV" },
{ en: "Boys Over Flowers", jp: "花より男子", romaji: "Hana Yori Dango  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Dororo", jp: "どろろ", romaji: "Dororo  ", genre: [ "Action", "Adventure", "Demons"], type: "TV" },
{ en: "ID:INVADED", jp: "ID:INVADED", romaji: "Id:Invaded  ", genre: [ "Mystery", "Sci-Fi", "Psychological"], type: "TV" },
{ en: "Izetta: The Last Witch", jp: "終末のイゼッタ", romaji: "Shuumatsu no Izetta  ", genre: [ "Action", "Historical", "Military"], type: "TV" },
{ en: "Samurai Champloo", jp: "サムライチャンプルー", romaji: "Samurai Champloo  ", genre: [ "Action", "Adventure", "Historical"], type: "TV" },
{ en: "Bakuman", jp: "バクマン。", romaji: "Bakuman.  ", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Tower of God", jp: "神之塔", romaji: "Kami no Tou  ", genre: [ "Action", "Adventure", "Mystery"], type: "TV" },
{ en: "Sing “Yesterday” For Me", jp: "イエスタデイをうたって", romaji: "Yesterday wo Utatte  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "TV" },
{ en: "My Next Life as a Villainess: All Routes Lead to Doom!", jp: "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…", romaji: "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...  ", genre: [ "Comedy", "Drama", "Fantasy"], type: "TV" },
{ en: "Hanamaru Kindergarten", jp: "はなまる幼稚園", romaji: "Hanamaru Youchien  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Is the Order a Rabbit?", jp: "ご注文はうさぎですか？", romaji: "Gochuumon wa Usagi Desu ka?  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Princess Connect! Re: Dive", jp: "プリンセスコネクト！Re:Dive", romaji: "Princess Connect! Re:Dive  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Baccano!", jp: "バッカーノ!", romaji: "Baccano!  ", genre: [ "Action", "Mystery", "Supernatural"], type: "TV" },
{ en: "Weathering With You", jp: "天気の子", romaji: "Tenki no Ko  ", genre: [ "Drama", "Fantasy", "Romance"], type: "Movie" },
{ en: "Kingdom", jp: "キングダム", romaji: "Kingdom  ", genre: [ "Action", "Historical", "Military"], type: "TV" },
{ en: "Megalobox", jp: "メガロボクス", romaji: "Megalo Box  ", genre: [ "Action", "Drama", "Sci-Fi"], type: "TV" },
{ en: "This Art Club Has a Problem!", jp: "この美術部には問題がある！", romaji: "Kono Bijutsubu ni wa Mondai ga Aru!  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Kakushigoto", jp: "かくしごと", romaji: "Kakushigoto  ", genre: [ "Comedy", "Shounen", "Slice of Life"], type: "TV" },
{ en: "Whisper of the Heart", jp: "耳をすませば", romaji: "Mimi wo Sumaseba  ", genre: [ "Drama", "Romance"], type: "Movie" },
{ en: "Hayate the Combat Butler!", jp: "ハヤテのごとく！", romaji: "Hayate no Gotoku!  ", genre: [ "Comedy", "Romance", "Parody"], type: "TV" },
{ en: "DECA-DENCE", jp: "デカダンス", romaji: "DECA-DENCE  ", genre: [ "Action", "Adventure", "Sci-Fi"], type: "TV" },
{ en: "Diary of Our Days at the Breakwater", jp: "放課後ていぼう日誌", romaji: "Houkago Teibou Nisshi  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Uzaki-chan Wants to Hang Out!", jp: "宇崎ちゃんは遊びたい！", romaji: "Uzaki-chan wa Asobitai!  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Rent-a-Girlfriend", jp: "彼女、お借りします", romaji: "Kanojo, Okarishimasu  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Astra Lost in Space", jp: "彼方のアストラ", romaji: "Kanata no Astra  ", genre: [ "Adventure", "Sci-Fi", "Space"], type: "TV" },
{ en: "Great Pretender", jp: "グレートプリテンダー", romaji: "Great Pretender  ", genre: [ "Action", "Adventure", "Mystery"], type: "TV" },
{ en: "Japan Sinks: 2020", jp: "日本沈没2020", romaji: "Nihon Chinbotsu 2020  ", genre: [ "Drama", "Sci-Fi"], type: "TV" },
{ en: "Kono Oto Tomare!", jp: "この音とまれ！", romaji: "Kono Oto Tomare!  ", genre: [ "Drama", "Music", "Romance"], type: "TV" },
{ en: "Please Take My Brother Away!", jp: "兄に付ける薬はない！", romaji: "Ani ni Tsukeru Kusuri wa Nai!  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Puella Magi Madoka Magica", jp: "魔法少女まどか☆マギカ", romaji: "Mahou Shoujo Madoka★Magica  ", genre: [ "Drama", "Magic", "Psychological"], type: "TV" },
{ en: "The Millionaire Detective: Balance - Unlimited", jp: "富豪刑事 Balance:UNLIMITED", romaji: "Fugou Keiji: Balance:Unlimited  ", genre: [ "Action", "Mystery"], type: "TV" },
{ en: "Spice and Wolf", jp: "狼と香辛料", romaji: "Ookami to Koushinryou  ", genre: [ "Adventure", "Fantasy", "Romance"], type: "TV" },
{ en: "Dropkick on My Devil!", jp: "邪神ちゃんドロップキック", romaji: "Jashin-chan Dropkick  ", genre: [ "Comedy", "Supernatural"], type: "TV" },
{ en: "The Misfit of Demon King Academy", jp: "魔王学院の不適合者", romaji: "Maou Gakuin no Futekigousha  ", genre: [ "Action", "Demons", "Magic"], type: "TV" },
{ en: "The Boy and the Beast", jp: "バケモノの子", romaji: "Bakemono no Ko  ", genre: [ "Adventure", "Supernatural"], type: "Movie" },
{ en: "Bakemonogatari", jp: "化物語", romaji: "Bakemonogatari  ", genre: [ "Mystery", "Romance", "Supernatural", "Vampire"], type: "TV" },
{ en: "Katanagatari", jp: "刀語", romaji: "Katanagatari  ", genre: [ "Action", "Adventure", "Historical"], type: "TV" },
{ en: "Kizumonogatari", jp: "傷物語", romaji: "Kizumonogatari  ", genre: [ "Action", "Mystery", "Supernatural"], type: "Movie" },
{ en: "Nisemonogatari", jp: "偽物語", romaji: "Nisemonogatari  ", genre: [ "Comedy", "Mystery", "Supernatural"], type: "TV" },
{ en: "Nekomonogatari", jp: "猫物語", romaji: "Nekomonogatari  ", genre: [ "Comedy", "Mystery", "Supernatural"], type: "TV" },
{ en: "Legend of the Galactic Heroes", jp: "銀河英雄伝説", romaji: "Ginga Eiyuu Densetsu  ", genre: [ "Action", "Drama", "Sci-Fi"], type: "OVA" },
{ en: "I Can't Understand What My Husband Is Saying", jp: "旦那が何を言っているかわからない件", romaji: "Danna ga Nani wo Itteiru ka Wakaranai Ken  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Kannagi: Crazy Shrine Maidens", jp: "かんなぎ", romaji: "Kannagi  ", genre: [ "Comedy", "Romance", "Supernatural"], type: "TV" },
{ en: "Burn the Witch", jp: "BURN THE WITCH", romaji: "Burn the Witch  ", genre: [ "Action", "Fantasy", "Magic"], type: "Movie" },
{ en: "I'm Standing on a Million Lives", jp: "100万の命の上に俺は立っている", romaji: "100-man no Inochi no Ue ni Ore wa Tatteiru  ", genre: [ "Action", "Drama", "Fantasy"], type: "TV" },
{ en: "Jujutsu Kaisen", jp: "呪術廻戦", romaji: "Jujutsu Kaisen  ", genre: [ "Action", "Supernatural", "Shounen"], type: "TV" },
{ en: "TONIKAWA: Over the Moon For You", jp: "トニカクカワイイ", romaji: "Tonikaku Kawaii  ", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Yashahime: Princess Half-Demon", jp: "半妖の夜叉姫", romaji: "Hanyou no Yashahime  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Adachi and Shimamura", jp: "安達としまむら", romaji: "Adachi to Shimamura  ", genre: [ "Romance", "School", "Shoujo Ai"], type: "TV" },
{ en: "The Gymnastics Samurai", jp: "体操ザムライ", romaji: "Taisou Zamurai  ", genre: [ "Drama", "Sports"], type: "TV" },
{ en: "The Journey of Elaina", jp: "魔女の旅々", romaji: "Majo no Tabitabi  ", genre: [ "Adventure", "Fantasy"], type: "TV" },
{ en: "Azumanga Daioh", jp: "あずまんが大王", romaji: "Azumanga Daioh  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Mr. Osomatsu", jp: "おそ松さん", romaji: "Osomatsu-san  ", genre: [ "Comedy", "Parody"], type: "TV" },
{ en: "Konohana Kitan", jp: "此花亭奇譚", romaji: "Konohana Kitan  ", genre: [ "Fantasy", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "The Garden of Sinners", jp: "空の境界", romaji: "Kara no Kyoukai  ", genre: [ "Action", "Mystery", "Supernatural"], type: "Movie" },
{ en: "Kino's Journey", jp: "キノの旅", romaji: "Kino no Tabi  ", genre: [ "Adventure", "Slice of Life", "Fantasy"], type: "TV" },
{ en: "Akudama Drive", jp: "アクダマドライブ", romaji: "Akudama Drive  ", genre: [ "Action", "Sci-Fi"], type: "TV" },
{ en: "Genshiken", jp: "げんしけん", romaji: "Genshiken  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "Mitsudomoe", jp: "みつどもえ", romaji: "Mitsudomoe  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Minami-ke", jp: "みなみけ", romaji: "Minami-ke  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Phantom: Requiem for the Phantom", jp: "ファントム", romaji: "Phantom: Requiem for the Phantom  ", genre: [ "Action", "Drama", "Psychological"], type: "TV" },
{ en: "Penguindrum", jp: "輪るピングドラム", romaji: "Mawaru Penguindrum  ", genre: [ "Drama", "Mystery", "Psychological"], type: "TV" },
{ en: "Heaven's Design Team", jp: "天地創造デザイン部", romaji: "Tenchi Souzou Design-bu  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Bottom-tier Character Tomozaki", jp: "弱キャラ友崎くん", romaji: "Jaku-Chara Tomozaki-kun  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Horimiya", jp: "ホリミヤ", romaji: "Horimiya  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Mushoku Tensei: Jobless Reincarnation", jp: "無職転生 ～異世界行ったら本気だす～", romaji: "Mushoku Tensei: Isekai Ittara Honki Dasu  ", genre: [ "Adventure", "Fantasy", "Magic"], type: "TV" },
{ en: "Kemono Jihen", jp: "怪物事変", romaji: "Kemono Jihen  ", genre: [ "Action", "Mystery", "Supernatural"], type: "TV" },
{ en: "Wonder Egg Priority", jp: "ワンダーエッグ・プライオリティ", romaji: "Wonder Egg Priority  ", genre: [ "Drama", "Fantasy", "Psychological"], type: "TV" },
{ en: "Moriarty the Patriot", jp: "憂国のモリアーティ", romaji: "Yuukoku no Moriarty  ", genre: [ "Mystery", "Psychological", "Supernatural"], type: "TV" },
{ en: "Ben-To", jp: "ベン・トー", romaji: "Ben-To  ", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "Air TV", jp: "AIR", romaji: "Air  ", genre: [ "Drama", "Romance", "Supernatural"], type: "TV" },
{ en: "Talentless Nana", jp: "無能なナナ", romaji: "Munou na Nana  ", genre: [ "Drama", "Psychological", "Supernatural"], type: "TV" },
{ en: "Pui Pui Molcar", jp: "PUI PUI モルカー", romaji: "Pui Pui Molcar  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "So I'm a Spider, So What?", jp: "蜘蛛ですが、なにか？", romaji: "Kumo Desu ga, Nani ka?  ", genre: [ "Action", "Adventure", "Comedy", "Isekai"], type: "TV" },
{ en: "Yowamushi Pedal", jp: "弱虫ペダル", romaji: "Yowamushi Pedal  ", genre: [ "Comedy", "Drama", "Sports"], type: "TV" },
{ en: "Hinako Note", jp: "ひなこのーと", romaji: "Hinako Note  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "The Helpful Fox Senko-san", jp: "世話やきキツネの仙狐さん", romaji: "Sewayaki Kitsune no Senko-san  ", genre: [ "Comedy", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "Urara Meirocho", jp: "うらら迷路帖", romaji: "Urara Meirochou  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Amagi Brilliant Park", jp: "甘城ブリリアントパーク", romaji: "Amagi Brilliant Park  ", genre: [ "Comedy", "Fantasy", "Magic"], type: "TV" },
{ en: "Okami-san and Her Seven Companions", jp: "オオカミさんと七人の仲間たち", romaji: "Ookami-san to Shichinin no Nakama-tachi  ", genre: [ "Action", "Comedy", "Romance"], type: "TV" },
{ en: "Ghost Hound", jp: "神霊狩", romaji: "Shinreigari: Ghost Hound  ", genre: [ "Mystery", "Psychological", "Supernatural"], type: "TV" },
{ en: "Student Council Staff Members", jp: "生徒会役員共", romaji: "Seitokai Yakuindomo  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Wandering Son", jp: "放浪息子", romaji: "Hourou Musuko  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Joshiraku", jp: "じょしらく", romaji: "Joshiraku  ", genre: [ "Comedy", "Parody", "Slice of Life"], type: "TV" },
{ en: "Edens Zero", jp: "EDENS ZERO", romaji: "Edens Zero  ", genre: [ "Action", "Adventure", "Comedy"], type: "TV" },
{ en: "Tokyo Revengers", jp: "東京リベンジャーズ", romaji: "Tokyo Revengers  ", genre: [ "Action", "Drama", "Supernatural"], type: "TV" },
{ en: "SSSS.Dynazenon", jp: "SSSS.DYNAZENON", romaji: "SSSS.Dynazenon  ", genre: [ "Action", "Mecha", "Sci-Fi"], type: "TV" },
{ en: "Shaman King", jp: "シャーマンキング", romaji: "Shaman King  ", genre: [ "Action", "Adventure", "Super Power"], type: "TV" },
{ en: "Vivy: Fluorite Eye's Song", jp: "Vivy -Fluorite Eye’s Song-", romaji: "Vivy: Fluorite Eye's Song  ", genre: [ "Action", "Music", "Sci-Fi"], type: "TV" },
{ en: "Combatants Will Be Dispatched!", jp: "戦闘員、派遣します！", romaji: "Sentouin, Hakenshimasu!  ", genre: [ "Action", "Comedy", "Sci-Fi"], type: "TV" },
{ en: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway", jp: "ひげを剃る。そして女子高生を拾う。", romaji: "Hige wo Soru. Soshite Joshikousei wo Hirou.  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "TV" },
{ en: "Let's Make a Mug Too", jp: "やくならマグカップも", romaji: "Yakunara Mug Cup mo  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Super Cub", jp: "スーパーカブ", romaji: "Super Cub  ", genre: [ "Drama", "Slice of Life"], type: "TV" },
{ en: "The Way of the Househusband", jp: "極主夫道", romaji: "Gokushufudou  ", genre: [ "Comedy", "Slice of Life"], type: "ONA" },
{ en: "Don't Toy with Me, Miss Nagatoro", jp: "イジらないで、長瀞さん", romaji: "Ijiranaide, Nagatoro-san  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "86", jp: "86-エイティシックス-", romaji: "86", genre: [ "Action", "Drama", "Sci-Fi"], type: "TV" },
{ en: "Shadows House", jp: "シャドーハウス", romaji: "Shadows House  ", genre: [ "Drama", "Mystery", "Supernatural"], type: "TV" },
{ en: "To Your Eternity", jp: "不滅のあなたへ", romaji: "Fumetsu no Anata e  ", genre: [ "Adventure", "Drama", "Supernatural"], type: "TV" },
{ en: "Black Lagoon", jp: "ブラック・ラグーン", romaji: "Black Lagoon  ", genre: [ "Action", "Seinen"], type: "TV" },
{ en: "Oruchuban Ebichu", jp: "おるちゅばんエビちゅ", romaji: "Oruchuban Ebichu  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "Hellsing", jp: "ヘルシング", romaji: "Hellsing  ", genre: [ "Action", "Horror", "Supernatural", "Vampire"], type: "TV" },
{ en: "Romeo × Juliet", jp: "ロミオ×ジュリエット", romaji: "Romeo x Juliet  ", genre: [ "Drama", "Fantasy", "Romance"], type: "TV" },
{ en: "Kanon", jp: "Kanon", romaji: "Kanon  ", genre: [ "Drama", "Romance", "Supernatural"], type: "TV" },
{ en: "Kill Me Baby", jp: "キルミーベイベー", romaji: "Kill Me Baby  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Aria", jp: "ARIA", romaji: "Aria  ", genre: [ "Fantasy", "Sci-Fi", "Slice of Life"], type: "TV" },
{ en: "Highschool of the Dead", jp: "学園黙示録 HIGHSCHOOL OF THE DEAD", romaji: "Highschool of the Dead  ", genre: [ "Action", "Horror", "Supernatural"], type: "TV" },
{ en: "The Girl from the Other Side", jp: "とつくにの少女", romaji: "Totsukuni no Shoujo  ", genre: [ "Drama", "Fantasy", "Slice of Life"], type: "OVA" },
{ en: "Three Leaves, Three Colors", jp: "三者三葉", romaji: "Sansha Sanyou  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Date A Live", jp: "デート・ア・ライブ", romaji: "Date A Live  ", genre: [ "Comedy", "Romance", "Sci-Fi"], type: "TV" },
{ en: "Paradise Kiss", jp: "パラダイス・キス", romaji: "Paradise Kiss  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "TV" },
{ en: "Welcome to the Ballroom", jp: "ボールルームへようこそ", romaji: "Ballroom e Youkoso  ", genre: [ "Drama", "Romance", "Sports"], type: "TV" },
{ en: "Nyaruko: Crawling with Love!", jp: "這いよれ！ニャル子さん", romaji: "Haiyore! Nyaruko-san  ", genre: [ "Comedy", "Parody", "Sci-Fi"], type: "TV" },
{ en: "Scum's Wish", jp: "クズの本懐", romaji: "Kuzu no Honkai  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "Haibane Renmei", jp: "灰羽連盟", romaji: "Haibane Renmei  ", genre: [ "Drama", "Fantasy", "Mystery"], type: "TV" },
{ en: "D.Gray Man", jp: "D.Gray-man", romaji: "D.Gray-man  ", genre: [ "Action", "Adventure", "Super Power"], type: "TV" },
{ en: "Cross Game", jp: "クロスゲーム", romaji: "Cross Game  ", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "Odd Taxi", jp: "オッドタクシー", romaji: "Odd Taxi  ", genre: [ "Mystery", "Psychological", "Slice of Life"], type: "TV" },
{ en: "I've Been Killing Slimes for 300 Years and Maxed Out My Level", jp: "スライム倒して300年、知らないうちにレベルMAXになってました", romaji: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Nodame Cantabile", jp: "のだめカンタービレ", romaji: "Nodame Cantabile  ", genre: [ "Comedy", "Music", "Romance"], type: "TV" },
{ en: "Full Metal Panic!", jp: "フルメタル・パニック！", romaji: "Full Metal Panic!  ", genre: [ "Action", "Mecha", "Sci-Fi"], type: "TV" },
{ en: "Kaiji", jp: "カイジ", romaji: "Kaiji  ", genre: [ "Drama", "Game", "Psychological"], type: "TV" },
{ en: "Middle Manager Tonegawa", jp: "中間管理録トネガワ", romaji: "Chuukan Kanriroku Tonegawa  ", genre: [ "Comedy", "Drama", "Psychological"], type: "TV" },
{ en: "Hibike! Euphorium", jp: "響け！ユーフォニアム", romaji: "Hibike! Euphonium  ", genre: [ "Drama", "Music", "School"], type: "TV" },
{ en: "Uma Musume", jp: "ウマ娘 プリティーダービー", romaji: "Uma Musume: Pretty Derby  ", genre: [ "Comedy", "Slice of Life", "Sports"], type: "TV" },
{ en: "Saki", jp: "咲-Saki-", romaji: "Saki  ", genre: [ "Game", "School", "Slice of Life"], type: "TV" },
{ en: "Tamayura", jp: "たまゆら", romaji: "Tamayura  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Hajime no Ippo", jp: "はじめの一歩", romaji: "Hajime no Ippo  ", genre: [ "Comedy", "Drama", "Sports"], type: "TV" },
{ en: "The Case Study of Vanitas", jp: "ヴァニタスの手記", romaji: "Vanitas no Carte  ", genre: [ "Action", "Mystery", "Supernatural", "Vampire"], type: "TV" },
{ en: "The Detective Is Already Dead", jp: "探偵はもう、死んでいる。", romaji: "Tantei wa Mou, Shindeiru.  ", genre: [ "Comedy", "Drama", "Mystery"], type: "TV" },
{ en: "The Aquatope on White Sand", jp: "白い砂のアクアトープ", romaji: "Shiroi Suna no Aquatope  ", genre: [ "Drama", "Slice of Life"], type: "TV" },
{ en: "The Duke of Death and His Maid", jp: "死神坊ちゃんと黒メイド", romaji: "Shinigami Bocchan to Kuro Maid  ", genre: [ "Comedy", "Drama", "Romance"], type: "TV" },
{ en: "The Great Jahy Will Not Be Defeated!", jp: "ジャヒー様はくじけない！", romaji: "Jahy-sama wa Kujikenai!  ", genre: [ "Comedy", "Supernatural"], type: "TV" },
{ en: "Sonny Boy", jp: "ソニーボーイ", romaji: "Sonny Boy  ", genre: [ "Drama", "Sci-Fi", "Supernatural"], type: "TV" },
{ en: "Remake Our Life!", jp: "ぼくたちのリメイク", romaji: "Bokutachi no Remake  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "TV" },
{ en: "Maria†Holic", jp: "まりあ†ほりっく", romaji: "Maria†Holic  ", genre: [ "Comedy", "Parody", "School"], type: "TV" },
{ en: "Battle Game in 5 Seconds", jp: "出会って5秒でバトル", romaji: "Deatte 5-byou de Battle  ", genre: [ "Action", "Super Power", "Supernatural"], type: "TV" },
{ en: "Life Lessons with Uramichi Oniisan", jp: "うらみちお兄さん", romaji: "Uramichi Oniisan  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "Special A", jp: "S・A〜スペシャル・エー〜", romaji: "Special A  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Rokka: Braves of the Six Flowers", jp: "六花の勇者", romaji: "Rokka no Yuusha  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Josee, the Tiger and the Fish", jp: "ジョゼと虎と魚たち", romaji: "Josee to Tora to Sakana-tachi  ", genre: [ "Drama", "Romance"], type: "Movie" },
{ en: "Hanamonogatari", jp: "花物語", romaji: "Hanamonogatari  ", genre: [ "Comedy", "Mystery", "Supernatural"], type: "TV" },
{ en: "Tsukimonogatari", jp: "憑物語", romaji: "Tsukimonogatari  ", genre: [ "Comedy", "Mystery", "Supernatural"], type: "TV" },
{ en: "Koyomimonogatari", jp: "暦物語", romaji: "Koyomimonogatari  ", genre: [ "Comedy", "Mystery", "Supernatural"], type: "TV" },
{ en: "Owarimonogatari", jp: "終物語", romaji: "Owarimonogatari  ", genre: [ "Comedy", "Mystery", "Supernatural"], type: "TV" },
{ en: "Beck: Mongolian Chop Squad", jp: "BECK", romaji: "Beck  ", genre: [ "Comedy", "Drama", "Music"], type: "TV" },
{ en: "Trigun", jp: "トライガン", romaji: "Trigun  ", genre: [ "Action", "Adventure", "Sci-Fi"], type: "TV" },
{ en: "Cromartie High School", jp: "魁!!クロマティ高校", romaji: "Sakigake!! Cromartie Koukou  ", genre: [ "Comedy", "Parody", "School"], type: "TV" },
{ en: "Tawawa on Monday", jp: "月曜日のたわわ", romaji: "Getsuyoubi no Tawawa  ", genre: [ "Slice of Life", "Romance"], type: "ONA" },
{ en: "Ganbare Douki Chan", jp: "がんばれ同期ちゃん", romaji: "Ganbare Douki-chan  ", genre: [ "Comedy", "Romance"], type: "ONA" },
{ en: "Komi Can't Communicate", jp: "古見さんは、コミュ症です。", romaji: "Komi-san wa, Comyushou desu.  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Blue Period", jp: "ブルーピリオド", romaji: "Blue Period  ", genre: [ "Drama", "Slice of Life"], type: "TV" },
{ en: "Our Love Has Always Been 10 Centimeters Apart", jp: "ずっと前から好きでした。～告白実行委員会～", romaji: "Itsudatte Bokura no Koi wa 10 cm Datta.  ", genre: [ "Drama", "Romance", "School"], type: "TV" },
{ en: "I've Always Liked You", jp: "好きになるその瞬間を。〜告白実行委員会〜", romaji: "Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai  ", genre: [ "Drama", "Romance", "School"], type: "Movie" },
{ en: "The Moment You Fall in Love", jp: "ずっと前から好きでした。～告白実行委員会～", romaji: "Suki ni Naru Sono Shunkan wo.: Kokuhaku Jikkou Iinkai  ", genre: [ "Drama", "Romance", "School"], type: "Movie" },
{ en: "Prince of Tennis", jp: "テニスの王子様", romaji: "Tennis no Oujisama  ", genre: [ "Sports", "School", "Shounen"], type: "TV" },
{ en: "Mieruko Chan", jp: "見える子ちゃん", romaji: "Mieruko-chan  ", genre: [ "Comedy", "Horror", "Supernatural"], type: "TV" },
{ en: "takt op.Destiny", jp: "takt op.Destiny", romaji: "Takt Op. Destiny  ", genre: [ "Action", "Fantasy", "Music"], type: "TV" },
{ en: "Cowboy Bebop", jp: "カウボーイビバップ", romaji: "Cowboy Bebop  ", genre: [ "Action", "Adventure", "Drama"], type: "TV" },
{ en: "Legend of the Galactic Heroes", jp: "銀河英雄伝説", romaji: "Ginga Eiyuu Densetsu  ", genre: [ "Action", "Drama", "Sci-Fi"], type: "OVA" },
{ en: "My Senpai Is Annoying", jp: "先輩がうざい後輩の話", romaji: "Senpai ga Uzai Kouhai no Hanashi  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Kaginado", jp: "かぎなど", romaji: "Kaginado  ", genre: [ "Comedy", "Parody"], type: "TV" },
{ en: "You're Being Summoned, Azazel-san Z", jp: "よんでますよ、アザゼルさん。Z", romaji: "Yondemasu yo, Azazel-san. Z  ", genre: [ "Comedy", "Supernatural"], type: "TV" },
{ en: "Ranking of Kings", jp: "王様ランキング", romaji: "Ousama Ranking  ", genre: [ "Adventure", "Fantasy"], type: "TV" },
{ en: "My Neighbor Totoro", jp: "となりのトトロ", romaji: "Tonari no Totoro  ", genre: [ "Adventure", "Fantasy", "Supernatural"], type: "Movie" },
{ en: "Polar Bear Cafe", jp: "しろくまカフェ", romaji: "Shirokuma Cafe  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Akagi", jp: "アカギ", romaji: "Akagi  ", genre: [ "Drama", "Game", "Psychological"], type: "TV" },
{ en: "Binbou Shimai Monogatari", jp: "貧乏姉妹物語", romaji: "Binbou Shimai Monogatari  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat", jp: "世界最高の暗殺者、異世界貴族に転生する", romaji: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru  ", genre: [ "Action", "Fantasy", "Isekai"], type: "TV" },
{ en: "Kamichu!", jp: "かみちゅ！", romaji: "Kamichu!  ", genre: [ "Comedy", "Drama", "Supernatural"], type: "TV" },
{ en: "Gourmet Girl Graffiti", jp: "幸腹グラフィティ", romaji: "Koufuku Graffiti  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Nyanko Days", jp: "にゃんこデイズ", romaji: "Nyanko Days  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Ojisan and Marshmallow", jp: "おじさんとマシュマロ", romaji: "Ojisan to Marshmallow  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Kuruneko", jp: "くるねこ", romaji: "Kuruneko  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Teekyu", jp: "てーきゅう", romaji: "Teekyuu  ", genre: [ "Comedy", "Sports"], type: "TV" },
{ en: "Sakugan", jp: "サクガン", romaji: "Sakugan  ", genre: [ "Adventure", "Mecha", "Sci-Fi"], type: "TV" },
{ en: "Platinum End", jp: "プラチナエンド", romaji: "Platinum End  ", genre: [ "Drama", "Psychological", "Supernatural"], type: "TV" },
{ en: "Super Crooks", jp: "スーパークルックス", romaji: "Super Crooks  ", genre: [ "Action", "Sci-Fi", "Super Power"], type: "TV" },
{ en: "Baki", jp: "バキ", romaji: "Baki  ", genre: [ "Action", "Martial Arts", "Shounen"], type: "TV" },
{ en: "Chitose Get You!!", jp: "ちとせげっちゅ!!", romaji: "Chitose Get You!!  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Carnival Phantasm", jp: "カーニバル・ファンタズム", romaji: "Carnival Phantasm  ", genre: [ "Comedy", "Parody", "Supernatural"], type: "OVA" },
{ en: "Sleepy Princess in the Demon Castle", jp: "魔王城でおやすみ", romaji: "Maoujou de Oyasumi  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Ascendance of a Bookworm", jp: "本好きの下剋上", romaji: "Honzuki no Gekokujou  ", genre: [ "Fantasy", "Slice of Life"], type: "TV" },
{ en: "World Trigger", jp: "ワールドトリガー", romaji: "World Trigger  ", genre: [ "Action", "Sci-Fi", "Supernatural"], type: "TV" },
{ en: "Space Brothers", jp: "宇宙兄弟", romaji: "Uchuu Kyoudai  ", genre: [ "Drama", "Sci-Fi", "Slice of Life"], type: "TV" },
{ en: "The Heroic Legend of Arslan", jp: "アルスラーン戦記", romaji: "Arslan Senki  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Sky Blue Utility", jp: "空色ユーティリティ", romaji: "Sorairo Utility  ", genre: [ "Sports", "Slice of Life"], type: "OVA" },
{ en: "Grimms Notes", jp: "グリムノーツ", romaji: "Grimms Notes The Animation  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Slow Loop", jp: "スローループ", romaji: "Slow Loop  ", genre: [ "Slice of Life", "Sports"], type: "TV" },
{ en: "My Dress-Up Darling", jp: "その着せ替え人形は恋をする", romaji: "Sono Bisque Doll wa Koi wo Suru  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Akebi's Sailor Uniform", jp: "明日ちゃんのセーラー服", romaji: "Akebi-chan no Sailor-fuku  ", genre: [ "Slice of Life", "School"], type: "TV" },
{ en: "Sabikui Bisco", jp: "錆喰いビスコ", romaji: "Sabikui Bisco  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "The Genius Prince's Guide to Raising a Nation Out of Debt", jp: "天才王子の赤字国家再生術", romaji: "Tensai Ouji no Akaji Kokka Saisei Jutsu  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Encouragement of Climb", jp: "ヤマノススメ", romaji: "Yama no Susume  ", genre: [ "Adventure", "Slice of Life"], type: "TV" },
{ en: "Irodorimidori", jp: "いろどりみどり", romaji: "Irodorimidori  ", genre: [ "Music", "Slice of Life"], type: "TV" },
{ en: "Penguin Highway", jp: "ペンギン・ハイウェイ", romaji: "Penguin Highway  ", genre: [ "Adventure", "Comedy", "Sci-Fi"], type: "Movie" },
{ en: "Words Bubble Up Like Soda Pop", jp: "サイダーのように言葉が湧き上がる", romaji: "Cider no You ni Kotoba ga Wakiagaru  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "Movie" },
{ en: "Police in a Pod", jp: "ハコヅメ〜交番女子の逆襲〜", romaji: "Hakozume: Kouban Joshi no Gyakushuu  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "School Rumble", jp: "スクールランブル", romaji: "School Rumble  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Muromi-san", jp: "波打際のむろみさん", romaji: "Namiuchigiwa no Muromi-san  ", genre: [ "Comedy", "Fantasy"], type: "TV" },
{ en: "We Were There", jp: "僕等がいた", romaji: "Bokura ga Ita  ", genre: [ "Drama", "Romance", "Slice of Life"], type: "TV" },
{ en: "Little Witch Academia", jp: "リトルウィッチアカデミア", romaji: "Little Witch Academia  ", genre: [ "Adventure", "Comedy", "Magic"], type: "TV" },
{ en: "Yu Yu Hakusho", jp: "幽☆遊☆白書", romaji: "Yu☆Yu☆Hakusho  ", genre: [ "Action", "Comedy", "Supernatural"], type: "TV" },
{ en: "Girls und Panzer", jp: "ガールズ&パンツァー", romaji: "Girls und Panzer  ", genre: [ "Action", "Sports"], type: "TV" },
{ en: "Aharen-san wa Hakarenai", jp: "阿波連さんははかれない", romaji: "Aharen-san wa Hakarenai  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Tomodachi Game", jp: "友達ゲーム", romaji: "Tomodachi Game  ", genre: [ "Drama", "Mystery", "Psychological"], type: "TV" },
{ en: "Ground Control to Psychoelectric Girl", jp: "電波女と青春男", romaji: "Denpa Onna to Seishun Otoko  ", genre: [ "Comedy", "Romance", "Sci-Fi"], type: "TV" },
{ en: "Deaimon: Recipe for Happiness", jp: "であいもん", romaji: "Deaimon  ", genre: [ "Drama", "Slice of Life"], type: "TV" },
{ en: "RPG Real Estate", jp: "RPG不動産", romaji: "RPG Fudousan  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Spy × Family", jp: "SPY×FAMILY", romaji: "Spy x Family  ", genre: [ "Action", "Comedy", "Slice of Life"], type: "TV" },
{ en: "Miss Shachiku and the Little Baby Ghost", jp: "社畜さんは幼女幽霊に癒されたい。", romaji: "Shachiku-san wa Youjo Yuurei ni Iyasaretai  ", genre: [ "Comedy", "Slice of Life", "Supernatural"], type: "TV" },
{ en: "To Become a Real Heroine!", jp: "ヒロインたるもの！〜嫌われヒロインと内緒のお仕事〜", romaji: "Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto  ", genre: [ "Comedy", "Music", "Slice of Life"], type: "TV" },
{ en: "Atasha Kawajiri Kodama Da Yo", jp: "あたしゃ川尻こだまだよ", romaji: "Atasha Kawajiri Kodama Da Yo: Dangerous Lifehacker no Tadareta Seikatsu  ", genre: [ "Comedy", "Slice of Life"], type: "ONA" },
{ en: "In the Heart of Kunoichi Tsubaki", jp: "くノ一ツバキの胸の内", romaji: "Kunoichi Tsubaki no Mune no Uchi  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Shikimori's Not Just a Cutie", jp: "可愛いだけじゃない式守さん", romaji: "Kawaii dake ja Nai Shikimori-san  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Takunomi", jp: "たくのみ。", romaji: "Takunomi.  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "By the Grace of the Gods", jp: "神達に拾われた男", romaji: "Kami-tachi ni Hirowareta Otoko  ", genre: [ "Adventure", "Fantasy", "Isekai"], type: "TV" },
{ en: "Ya Boy Kongming!", jp: "パリピ孔明", romaji: "Paripi Koumei  ", genre: [ "Comedy", "Music", "Slice of Life"], type: "TV" },
{ en: "Elegant Yokai Apartment Life", jp: "妖怪アパートの幽雅な日常", romaji: "Youkai Apartment no Yuuga na Nichijou  ", genre: [ "Slice of Life", "Supernatural"], type: "TV" },
{ en: "Hanayamata", jp: "ハナヤマタ", romaji: "Hanayamata", genre: [ "Comedy", "Music", "Slice of Life"], type: "TV" },
{ en: "Karakuri Circus", jp: "からくりサーカス", romaji: "Karakuri Circus  ", genre: [ "Action", "Mystery", "Supernatural"], type: "TV" },
{ en: "Samurai Flamenco", jp: "サムライフラメンコ", romaji: "Samurai Flamenco  ", genre: [ "Action", "Comedy", "Parody"], type: "TV" },
{ en: "Chibi Devi!", jp: "ちび☆デビ！", romaji: "Chibi Devi!  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Don't Hurt Me, My Healer!", jp: "このヒーラー、めんどくさい", romaji: "Kono Healer, Mendokusai  ", genre: [ "Comedy", "Fantasy"], type: "TV" },
{ en: "Bubble", jp: "バブル", romaji: "Bubble  ", genre: [ "Action", "Drama", "Sci-Fi"], type: "Movie" },
{ en: "Kotarou Lives Alone", jp: "コタローは1人暮らし", romaji: "Kotarou wa Hitorigurashi  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "Summer Time Rendering", jp: "サマータイムレンダ", romaji: "Summertime Render  ", genre: [ "Mystery", "Supernatural", "Thriller"], type: "TV" },
{ en: "Love After World Domination", jp: "恋は世界征服のあとで", romaji: "Koi wa Sekai Seifuku no Ato de  ", genre: [ "Comedy", "Romance"], type: "TV" },
{ en: "Space Patrol Luluco", jp: "宇宙パトロールルル子", romaji: "Uchuu Patrol Luluco  ", genre: [ "Action", "Adventure", "Comedy"], type: "TV" },
{ en: "Free!", jp: "Free!", romaji: "Free!  ", genre: [ "Drama", "Romance", "Sports"], type: "TV" },
{ en: "Yakitate!! Japan", jp: "焼きたて!! ジャぱん", romaji: "Yakitate!! Japan  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "Sailor Moon", jp: "美少女戦士セーラームーン", romaji: "Bishoujo Senshi Sailor Moon  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Onipan!", jp: "鬼パン!", romaji: "Onipan!  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "I’m Quitting Heroing", jp: "勇者、辞めます", romaji: "Yuusha, Yamemasu  ", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Smile of the Arsnotoria", jp: "咲う アルスノトリア すんっ！", romaji: "Warau Arsnotoria Sun!  ", genre: [ "Fantasy", "Slice of Life"], type: "TV" },
{ en: "The Yakuza's Guide to Babysitting", jp: "組長娘と世話係", romaji: "Kumichou Musume to Sewagakari  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "When Will Ayumu Make His Move?", jp: "それでも歩は寄せてくる", romaji: "Soredemo Ayumu wa Yosetekuru  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Parallel World Pharmacy", jp: "異世界薬局", romaji: "Isekai Yakkyoku  ", genre: [ "Fantasy", "Magic", "Medical"], type: "TV" },
{ en: "Teppen!!!!!!!!!!!!!!!", jp: "てっぺんっ!!!!!!!!!!!!!!!", romaji: "Teppen!!!!!!!!!!!!!!!  ", genre: [ "Comedy", "Sports"], type: "TV" },
{ en: "Musashino!", jp: "武蔵野!", romaji: "Musashino!  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Uncle from Another World", jp: "異世界おじさん", romaji: "Isekai Ojisan  ", genre: [ "Comedy", "Fantasy", "Isekai"], type: "TV" },
{ en: "Lycoris Recoil", jp: "リコリス・リコイル", romaji: "Lycoris Recoil  ", genre: [ "Action", "Sci-Fi"], type: "TV" },
{ en: "Call of the Night", jp: "よふかしのうた", romaji: "Yofukashi no Uta  ", genre: [ "Romance", "Supernatural"], type: "TV" },
{ en: "Love Live! Superstar!!", jp: "ラブライブ！スーパースター!!", romaji: "Love Live! Superstar!!  ", genre: [ "Music", "Slice of Life", "School"], type: "TV" },
{ en: "Magical Witch Punie-Chan", jp: "大魔法峠", romaji: "Dai Mahou Touge  ", genre: [ "Comedy", "Magic", "Parody"], type: "OVA" },
{ en: "The Maid I Hired Recently Is Mysterious", jp: "最近雇ったメイドが怪しい", romaji: "Saikin Yatotta Maid ga Ayashii  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Gingitsune: Messenger Fox of the Gods", jp: "ぎんぎつね", romaji: "Gingitsune  ", genre: [ "Slice of Life", "Supernatural"], type: "TV" },
{ en: "GA: Geijutsuka Art Design Class", jp: "GA 芸術科アートデザインクラス", romaji: "GA: Geijutsuka Art Design Class  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Hidamari Sketch", jp: "ひだまりスケッチ", romaji: "Hidamari Sketch  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Claymore", jp: "クレイモア", romaji: "Claymore  ", genre: [ "Action", "Adventure", "Supernatural"], type: "TV" },
{ en: "Banished from the Hero's Party", jp: "真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました", romaji: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita  ", genre: [ "Adventure", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Hakumei and Mikochi", jp: "ハクメイとミコチ", romaji: "Hakumei to Mikochi  ", genre: [ "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Aiura", jp: "あいうら", romaji: "Aiura  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Strange+", jp: "ストレンジ・プラス", romaji: "Strange+  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Prima Doll", jp: "プリマドール", romaji: "Prima Doll  ", genre: [ "Fantasy", "Sci-Fi", "Slice of Life"], type: "TV" },
{ en: "Morita-san wa Mukuchi", jp: "森田さんは無口", romaji: "Morita-san wa Mukuchi  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Haruchika: Haruta & Chika", jp: "ハルチカ〜ハルタとチカは青春する〜", romaji: "Haruchika: Haruta to Chika wa Seishun suru  ", genre: [ "Drama", "Mystery", "School"], type: "TV" },
{ en: "Girlish Number", jp: "ガーリッシュナンバー", romaji: "Girlish Number  ", genre: [ "Comedy", "Drama", "Slice of Life"], type: "TV" },
{ en: "Poco’s Udon World", jp: "うどんの国の金色毛鞠", romaji: "Udon no Kuni no Kiniro Kemari  ", genre: [ "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Gankutsuou: The Count of Monte Cristo", jp: "巌窟王", romaji: "Gankutsuou  ", genre: [ "Drama", "Mystery", "Sci-Fi"], type: "TV" },
{ en: "Do It Yourself!!", jp: "Do It Yourself!! -どぅー・いっと・ゆあせるふ-", romaji: "Do It Yourself!!  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "The Little Lies We All Tell", jp: "4人はそれぞれウソをつく", romaji: "The Little Lies We All Tell  ", genre: [ "Comedy", "Slice of Life"], type: "TV" },
{ en: "Beast Tamer", jp: "勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う", romaji: "Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau  ", genre: [ "Action", "Adventure", "Fantasy"], type: "TV" },
{ en: "Akiba Maid War", jp: "アキバ冥途戦争", romaji: "Akiba Maid Sensou  ", genre: [ "Action", "Comedy"], type: "TV" },
{ en: "Chainsaw Man", jp: "チェンソーマン", romaji: "Chainsaw Man  ", genre: [ "Action", "Horror", "Supernatural"], type: "TV" },
{ en: "Bocchi the Rock!", jp: "ぼっち・ざ・ろっく！", romaji: "Bocchi the Rock!  ", genre: [ "Comedy", "Music", "Slice of Life"], type: "TV" },
{ en: "Magic of Stella", jp: "ステラのまほう", romaji: "Stella no Mahou  ", genre: [ "Comedy", "School", "Slice of Life"], type: "TV" },
{ en: "Dropout Idol Fruit Tart", jp: "落第アイドル果汁100％", romaji: "Ochikobore Fruit Tart  ", genre: [ "Comedy", "Music", "Slice of Life"], type: "TV" },
{ en: "The Eminence in Shadow", jp: "陰の実力者になりたくて！", romaji: "Kage no Jitsuryokusha ni Naritakute!  ", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Princess Principal", jp: "プリンセス・プリンシパル", romaji: "Princess Principal  ", genre: [ "Action", "Mystery", "Steampunk"], type: "TV" },
{ en: "Blue Lock", jp: "ブルーロック", romaji: "Blue Lock  ", genre: [ "Sports", "Shounen"], type: "TV" },
{ en: "Alice in Borderland", jp: "今際の国のアリス", romaji: "Imawa no Kuni no Alice  ", genre: [ "Action", "Drama", "Mystery"], type: "TV" },
{ en: "Urusei Yatsura", jp: "うる星やつら", romaji: "Urusei Yatsura  ", genre: [ "Comedy", "Romance", "Sci-Fi"], type: "TV" },
{ en: "Gakuen Alice", jp: "学園アリス", romaji: "Gakuen Alice  ", genre: [ "Comedy", "Drama", "School"], type: "TV" },
{ en: "Cyberpunk: Edgerunners", jp: "サイバーパンク エッジランナーズ", romaji: "Cyberpunk: Edgerunners  ", genre: [ "Action", "Sci-Fi"], type: "TV" },
{ en: "Tomo-chan Is a Girl!", jp: "トモちゃんは女の子！", romaji: "Tomo-chan wa Onnanoko!  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Spy Classroom", jp: "スパイ教室", romaji: "Spy Kyoushitsu  ", genre: [ "Action", "Comedy", "Mystery"], type: "TV" },
{ en: "NieR: Automata Ver1.1a", jp: "ニーア オートマタ", romaji: "NieR:Automata Ver1.1a  ", genre: [ "Action", "Drama", "Sci-Fi"], type: "TV" },
{ en: "Planetes", jp: "プラネテス", romaji: "Planetes  ", genre: [ "Drama", "Romance", "Sci-Fi"], type: "TV" },
{ en: "The Vampire Dies in No Time", jp: "吸血鬼すぐ死ぬ", romaji: "Kyuuketsuki Sugu Shinu  ", genre: [ "Comedy", "Supernatural"], type: "TV" },
{ en: "Buddy Daddies", jp: "バディ・ダディーズ", romaji: "Buddy Daddies  ", genre: [ "Action", "Comedy", "Slice of Life"], type: "TV" },
{ en: "The Fire Hunter", jp: "火狩りの王", romaji: "Hikari no Ou  ", genre: [ "Adventure", "Fantasy"], type: "TV" },
{ en: "The Ice Guy and His Cool Female Colleague", jp: "氷属性男子とクールな同僚女子", romaji: "Koori Zokusei Danshi to Cool na Douryou Joshi  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Trigun Stampede", jp: "TRIGUN STAMPEDE", romaji: "Trigun Stampede  ", genre: [ "Action", "Sci-Fi"], type: "TV" },
{ en: "Sugar Apple Fairy Tale", jp: "シュガーアップル・フェアリーテイル", romaji: "Sugar Apple Fairy Tale  ", genre: [ "Adventure", "Fantasy", "Romance"], type: "TV" },
{ en: "High Card", jp: "ハイカード", romaji: "High Card  ", genre: [ "Action", "Fantasy"], type: "TV" },
{ en: "22/7", jp: "22/7", romaji: "22/7  ", genre: [ "Music", "Slice of Life"], type: "TV" },
{ en: "Ao Ashi", jp: "アオアシ", romaji: "Ao Ashi  ", genre: [ "Drama", "Sports"], type: "TV" },
{ en: "My Clueless First Friend", jp: "事情を知らない転校生がグイグイくる。", romaji: "Jijou wo Shiranai Tenkousei ga Guigui Kuru  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "My Home Hero", jp: "マイホームヒーロー", romaji: "My Home Hero  ", genre: [ "Drama", "Psychological", "Seinen"], type: "TV" },
{ en: "Hell's Paradise", jp: "地獄楽", romaji: "Jigokuraku  ", genre: [ "Action", "Adventure", "Historical"], type: "TV" },
{ en: "The Dangers in My Heart", jp: "僕の心のヤバイやつ", romaji: "Boku no Kokoro no Yabai Yatsu  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Ippon Again!", jp: "もういっぽん！", romaji: "Mou Ippon!  ", genre: [ "Sports", "Slice of Life"], type: "TV" },
{ en: "Tsurune", jp: "ツルネ", romaji: "Tsurune  ", genre: [ "Drama", "Sports"], type: "TV" },
{ en: "Mashle: Magic and Muscles", jp: "マッシュル-MASHLE-", romaji: "Mashle: Magic and Muscles  ", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Heavenly Delusion", jp: "天国大魔境", romaji: "Tengoku Daimakyou  ", genre: [ "Adventure", "Drama", "Mystery"], type: "TV" },
{ en: "Oshi no Ko", jp: "【推しの子】", romaji: "Oshi no Ko  ", genre: [ "Drama", "Mystery", "Supernatural"], type: "TV" },
{ en: "Too Cute Crisis", jp: "かわいすぎクライシス", romaji: "Kawaisugi Crisis  ", genre: [ "Comedy", "Sci-Fi", "Slice of Life"], type: "TV" },
{ en: "A Galaxy Next Door", jp: "おとなりに銀河", romaji: "Otonari ni Ginga  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Skip and Loafer", jp: "スキップとローファー", romaji: "Skip to Loafer  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Yuri Is My Job!", jp: "私の百合はお仕事です！", romaji: "Watashi no Yuri wa Oshigoto Desu!  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Birdie Wing: Golf Girls' Story", jp: "BIRDIE WING -Golf Girls' Story-", romaji: "Birdie Wing: Golf Girls' Story  ", genre: [ "Sports", "Drama"], type: "TV" },
{ en: "Otaku Elf", jp: "江戸前エルフ", romaji: "Otaku Elf  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Soredemo Machi wa Mawatteiru", jp: "それでも町は廻っている", romaji: "Soredemo Machi wa Mawatteiru  ", genre: [ "Comedy", "Mystery", "Slice of Life"], type: "TV" },
{ en: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady", jp: "魔法少女マジカルデストロイヤーズ", romaji: "Tensei Oujo to Tensai Reijou no Mahou Kakumei  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Ranma 1/2", jp: "らんま1/2", romaji: "Ranma ½  ", genre: [ "Action", "Comedy", "Romance"], type: "TV" },
{ en: "Kubo Won’t Let Me Be Invisible", jp: "久保さんは僕を許さない", romaji: "Kubo-san wa Mob wo Yurusanai  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Magical Girl Magical Destroyers", jp: "魔法少女マジカルデストロイヤーズ", romaji: "Mahou Shoujo Magical Destroyers  ", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Loving Yamada at Lv999", jp: "山田くんとLv999の恋をする", romaji: "Yamada-kun to Lv999 no Koi wo Suru  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Inuyashiki", jp: "いぬやしき", romaji: "Inuyashiki  ", genre: [ "Action", "Drama", "Psychological"], type: "TV" },
{ en: "Steel Angel Kurumi", jp: "鋼鉄天使くるみ", romaji: "Steel Angel Kurumi  ", genre: [ "Action", "Comedy", "Romance"], type: "TV" },
{ en: "Ramen Fighter Miki", jp: "ラーメン大好き小泉さん", romaji: "Muteki Kanban Musume  ", genre: [ "Action", "Comedy"], type: "TV" },
{ en: "D4DJ", jp: "D4DJ", romaji: "D4DJ: First Mix  ", genre: [ "Music", "Slice of Life"], type: "TV" },
{ en: "The Girl I Like Forgot Her Glasses", jp: "好きな子がめがねを忘れた", romaji: "Suki na Ko ga Megane wo Wasureta  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "My Tiny Senpai", jp: "うちの会社の小さい先輩の話", romaji: "Uchi no Kaisha no Chiisai Senpai no Hanashi  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Level 1 Demon Lord and One Room Hero", jp: "レベル1の魔王とワンルーム勇者", romaji: "Level 1 Demon Lord and One Room Hero  ", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Liar Liar", jp: "LIAR・LIAR", romaji: "Liar Liar  ", genre: [ "Action", "Psychological", "Supernatural"], type: "TV" },
{ en: "Zom 100: Bucket List of the Dead", jp: "ZOM100〜ゾンビになるまでにしたい100のこと〜", romaji: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto  ", genre: [ "Action", "Comedy", "Horror"], type: "TV" },
{ en: "Ayaka: A Story of Bonds and Wounds", jp: "AYAKA -あやか-", romaji: "Ayaka  ", genre: [ "Action", "Fantasy", "Supernatural"], type: "TV" },
{ en: "Dark Gathering", jp: "ダークギャザリング", romaji: "Dark Gathering", genre: [ "Horror", "Supernatural"], type: "TV" },
{ en: "BanG Dream!", jp: "BanG Dream!", romaji: "BanG Dream!  ", genre: [ "Music", "Slice of Life"], type: "TV" },
{ en: "Helck", jp: "Helck", romaji: "Helck  ", genre: [ "Action", "Comedy", "Fantasy"], type: "TV" },
{ en: "Revenue Starlight", jp: "少女☆歌劇 レヴュースタァライト", romaji: "Shoujo☆Kageki Revue Starlight  ", genre: [ "Drama", "Music", "School"], type: "TV" },
{ en: "Undead Murder Farce", jp: "アンデッドガール・マーダーファルス", romaji: "Undead Girl Murder Farce  ", genre: [ "Drama", "Mystery", "Supernatural"], type: "TV" },
{ en: "My Happy Marriage", jp: "わたしの幸せな結婚", romaji: "Watashi no Shiawase na Kekkon  ", genre: [ "Drama", "Romance", "Supernatural"], type: "TV" },
{ en: "Sweet Reincarnation", jp: "スイート・リィンカーネーション", romaji: "Okashi na Tensei  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "Haitai Nanafa", jp: "はいたい七葉", romaji: "Haitai Nanafa  ", genre: [ "Comedy", "Fantasy", "Slice of Life"], type: "TV" },
{ en: "WorldEnd", jp: "終末なにしてますか？忙しいですか？救ってもらっていいですか？", romaji: "Shuumatsu Nani Shitemasuka? Isogashii Desuka? Sukutte Moratte Ii Desuka?  ", genre: [ "Drama", "Fantasy", "Romance"], type: "TV" },
{ en: "Ouran High School Host Club", jp: "桜蘭高校ホスト部", romaji: "Ouran Koukou Host Club  ", genre: [ "Comedy", "Romance", "School"], type: "TV" },
{ en: "Suzume’s Door Locking", jp: "すずめの戸締まり", romaji: "Suzume no Tojimari  ", genre: [ "Drama", "Fantasy"], type: "Movie" },
{ en: "How a Realist Hero Rebuilt the Kingdom", jp: "現実主義勇者の王国再建記", romaji: "Genjitsu Shugi Yuusha no Oukoku Saikenki  ", genre: [ "Action", "Fantasy", "Military"], type: "TV" },
{ en: "Slayers", jp: "スレイヤーズ", romaji: "Slayers  ", genre: [ "Action", "Adventure", "Comedy"], type: "TV" },
{ en: "The Great Cleric", jp: "聖者無双", romaji: "Seija Musou: Salaryman, Isekai de Ikiru Tame ni Ayumu Michi  ", genre: [ "Action", "Fantasy", "Isekai"], type: "TV" },
{ en: "The Most Heretical Last Boss Queen", jp: "最果てのパラディン", romaji: "Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.  ", genre: [ "Comedy", "Fantasy", "Isekai"], type: "TV" },
{ en: "Yohane the Parhelion", jp: "ヨハネザパーヘリオン -SUNSHINE in the MIRROR-", romaji: "Genjitsu no Yohane: Sunshine in the Mirror  ", genre: [ "Fantasy", "Music", "Slice of Life"], type: "TV" },
{ en: "Ojou to Banken-kun", jp: "お嬢と番犬くん", romaji: "Ojou to Banken-kun  ", genre: [ "Comedy", "Romance", "Slice of Life"], type: "TV" },
{ en: "Frieren: Beyond Journey’s End", jp: "フリーレン 〜旅の終わりの後に〜", romaji: "Sousou no Frieren  ", genre: [ "Adventure", "Fantasy", "Magic"], type: "TV" },
{ en: "The Saint’s Magic Power is Omnipotent", jp: "聖女の魔力は万能です", romaji: "Seijo no Maryoku wa Bannou desu  ", genre: [ "Fantasy", "Magic", "Romance"], type: "TV" },
{ en: "Ron Kamonohashi’s Forbidden Deductions", jp: "鴨乃橋ロンの禁断推理", romaji: "Ron Kamonohashi: Deranged Detective  ", genre: [ "Mystery", "Psychological"], type: "TV" },
{ en: "UNDER NINJA", jp: "アンダーニンジャ", romaji: "UNDER NINJA  ", genre: [ "Action", "Comedy"], type: "TV" },
{ en: "Firefighter Daigo", jp: "め組の大吾", romaji: "Megumi no Daigo: Kyuukoku no Orange  ", genre: [ "Drama", "Slice of Life"], type: "TV" },
    { en: "The Yuzuki Family’s Four Sons", jp: "柚木家四兄弟", romaji: "Yuzuki-san Chi no Yonkyoudai.", genre: ["Drama", "Slice of Life"], type: "TV" },
    { en: "My New Boss Is Goofy", jp: "新しい上司はど天然", romaji: "Atarashii Joushi wa Do Tennen", genre: ["Comedy", "Slice of Life"], type: "TV" },
    { en: "The Family Circumstances of the Irregular Witch", jp: "魔女の家計事情", romaji: "Majo no Ie no Chuujo", genre: ["Horror", "Mystery", "Supernatural"], type: "TV" },
    { en: "The Kingdoms of Ruin", jp: "破滅の国の愛", romaji: "Hametsu no Oukoku", genre: ["Action", "Drama", "Fantasy"], type: "TV" },
    { en: "Castlevania", jp: "キャッスルヴァニア", romaji: "Castlevania", genre: ["Action", "Adventure", "Supernatural"], type: "TV" },
    { en: "The Apothecary Diaries", jp: "薬屋のひとりごと", romaji: "Kusuriya no Hitorigoto", genre: ["Drama", "Historical", "Mystery"], type: "TV" },
    { en: "I’m in Love with the Villainess", jp: "私の推しは悪役令嬢", romaji: "Watashi no Oshi wa Akuyaku Reijou", genre: ["Comedy", "Fantasy", "Romance"], type: "TV" },
    { en: "The Blue Orchestra", jp: "青のオーケストラ", romaji: "Ao no Orchestra", genre: ["Drama", "Music", "School"], type: "TV" },
    { en: "Pluto", jp: "プルートゥ", romaji: "Pluto", genre: ["Drama", "Mystery", "Sci-Fi"], type: "TV" },
    { en: "Tearmoon Empire", jp: "ティアムーン帝国物語", romaji: "Tearmoon Teikoku Monogatari", genre: ["Comedy", "Fantasy", "Slice of Life"], type: "TV" },
    { en: "Undead Unlock", jp: "アンデッドアンラック", romaji: "Undead Unluck", genre: ["Action", "Comedy", "Supernatural"], type: "TV" },
    { en: "Our Dating Story: The Experienced You and The Inexperienced Me", jp: "経験済みなキミと、経験ゼロなオレが、お付き合いする話", romaji: "Kimi to Boku no Saigo no Senjou, Arui wa Sekai ga Hajimaru Seisen", genre: ["Action", "Fantasy", "Romance"], type: "TV" },
    { en: "Stardust Telepath", jp: "スターダスト・テレパス", romaji: "Hoshikuzu Telepath", genre: ["Comedy", "Sci-Fi", "Slice of Life"], type: "TV" },
    { en: "Dead Mount Death Play", jp: "デッドマウント・デスプレイ", romaji: "Dead Mount Death Play", genre: ["Action", "Supernatural", "Fantasy"], type: "TV" },
    { en: "Shangri-La Frontier", jp: "シャングリラ・フロンティア", romaji: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su", genre: ["Adventure", "Fantasy", "Sci-Fi"], type: "TV" },
    { en: "Kay’s Daily Doodles", jp: "けいどろ日記", romaji: "Kei's Daily Doodles", genre: ["Comedy", "Slice of Life"], type: "TV" },
    { en: "Delicious in Dungeon", jp: "ダンジョン飯", romaji: "Dungeon Meshi", genre: ["Adventure", "Comedy", "Fantasy"], type: "TV" },
    { en: "The Way of Pon", jp: "ぽんこつちゃん道をゆく", romaji: "Pon no Michi", genre: ["Comedy", "Slice of Life"], type: "TV" },
    { en: "Sasaki and Peeps", jp: "佐々木とピーちゃん", romaji: "Sasaki to Pii-chan", genre: ["Comedy", "Slice of Life"], type: "TV" },
    { en: "A Sign of Affection", jp: "ゆびさきと恋々", romaji: "Yubisaki to Renren", genre: ["Drama", "Romance"], type: "TV" },
    { en: "Fluffy Paradise", jp: "もふもふパラダイス", romaji: "Isekai de Mofumofu Nadenade Suru Tame ni Ganbattemasu.", genre: ["Adventure", "Fantasy", "Isekai"], type: "TV" },
    { en: "Solo Leveling", jp: "ソロレベリング", romaji: "Solo Leveling", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "7th Time Loop", jp: "七度目のループ", romaji: "7-kai Me no Loop: Tensei Sa Reta Shachiku wa Isekai de Kyuukyoku no Zettai Oukoku o Tsukuru", genre: ["Adventure", "Fantasy", "Isekai"], type: "TV" },
    { en: "The Unwanted Undead Adventurer", jp: "望まぬ不死の冒険者", romaji: "Nozomanu Fushi no Boukensha", genre: ["Action", "Fantasy", "Supernatural"], type: "TV" },
    { en: "Mr. Villain’s Day Off", jp: "悪役令嬢は休暇中", romaji: "Kyuujitsu no Warumono-san", genre: ["Comedy", "Slice of Life"], type: "TV" },
    { en: "Tis Time for 'Torture,' Princess", jp: "姫様“拷問”の時間です", romaji: "Hime-sama 'Goumon' no Jikan desu", genre: ["Comedy", "Fantasy"], type: "TV" },
  { en: "Belle", jp: "竜とそばかすの姫", romaji: "Belle", genre: ["Drama", "Fantasy", "Music"], type: "Movie" },
    { en: "Villainess Level 99", jp: "悪役令嬢レベル99", romaji: "Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen", genre: ["Comedy", "Fantasy", "Romance"], type: "TV" },
    { en: "Sengoku Youko", jp: "戦国妖狐", romaji: "Sengoku Youko", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "Doctor Elise: The Royal Lady with the Lamp", jp: "ドクター・エリーゼ", romaji: "Orenchi ni Kita Onna Kishi to Inakagurashi Suru Koto ni Natta Ken", genre: ["Comedy", "Fantasy", "Romance"], type: "TV" },
    { en: "Ishura", jp: "異修羅", romaji: "Ishura", genre: ["Action", "Fantasy", "Adventure"], type: "TV" },
    { en: "The Weakest Tamer Began a Journey to Pick Up Trash", jp: "最弱テイマーはゴミ拾いの旅を始めました。", romaji: "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita", genre: ["Adventure", "Fantasy", "Isekai"], type: "TV" },
    { en: "Chiikawa", jp: "ちいかわ", romaji: "Chiikawa", genre: ["Comedy", "Fantasy", "Slice of Life"], type: "TV" },
    { en: "Yumeiro Patissiere", jp: "夢色パティシエール", romaji: "Yumeiro Patissiere", genre: ["Comedy", "Drama", "Romance"], type: "TV" },
    { en: "Ninja Kamui", jp: "忍者神風", romaji: "Ninja Kamui", genre: ["Action", "Adventure", "Martial Arts"], type: "TV" },
    { en: "Train to the End of the World", jp: "世界の果ての電車", romaji: "Sekai no Owari no Tame no Tabi", genre: ["Adventure", "Fantasy", "Sci-Fi"], type: "TV" },
    { en: "Re:Monster", jp: "リ・モンスター", romaji: "Re:Monster", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "Reincarnated Aristocrat, Appraisal Skill", jp: "転生貴族、鑑定スキルで成り上がる　～弱小領地を受け継いだので、優秀な人材を増やしていたら、最強領地になってた～", romaji: "Tensei Kizoku no Isekai Boukenroku", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "Bartender Glass of God", jp: "バーテンダー 神のグラス", romaji: "Bartender: Kami no Glass", genre: ["Drama", "Slice of Life"], type: "TV" },
    { en: "Level 2 Super Cheat Powers", jp: "レベル2のスーパー・チート能力", romaji: "Level 2 no Chikara o Eien no Chikara to Suru tame ni Kurenai o Motomeru Mono-tachi", genre: ["Adventure", "Fantasy", "Isekai"], type: "TV" },
    { en: "The Fable", jp: "ザ・ファブル", romaji: "The Fable", genre: ["Action", "Drama", "Seinen"], type: "TV" },
    { en: "Jellyfish Can’t Swim in the Night", jp: "クラゲは夜泳げない", romaji: "Kurage wa Yoru, Oyogenai", genre: ["Drama", "Romance", "Slice of Life"], type: "TV" },
    { en: "Tonari no Yokai-san", jp: "となりの妖怪さん", romaji: "Tonari no Youkai-san", genre: ["Comedy", "Slice of Life", "Supernatural"], type: "TV" },
    { en: "GO! GO! Loser Ranger!", jp: "ゴーゴー・レンジャー", romaji: "Sentai Daishikkaku", genre: ["Action", "Comedy", "Super Power"], type: "TV" },
    { en: "An Archdemon’s Dilemma: How to Love Your Elf Bride", jp: "大魔王様の家庭事情", romaji: "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?", genre: ["Action", "Comedy", "Fantasy"], type: "TV" },
    { en: "WIND BREAKER", jp: "ウィンドブレイカー", romaji: "WIND BREAKER", genre: ["Action", "Sports"], type: "TV" },
    { en: "Sand Land: The Series", jp: "サンドランド", romaji: "Sand Land", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "Boukyaku Battery", jp: "忘却バッテリー", romaji: "Boukyaku Battery", genre: ["Drama", "Sports"], type: "TV" },
    { en: "Kaii to Otome to Kamikakushi", jp: "怪異と乙女と神隠し", romaji: "Kaii to Otome to Kamikakushi", genre: ["Mystery", "Supernatural"], type: "TV" },
    { en: "Astro Note", jp: "アストロノート", romaji: "Astro Note", genre: ["Sci-Fi", "Space", "Music"], type: "TV" },
    { en: "The Grimm Variations", jp: "グリムバリエーションズ", romaji: "Grimm Variations", genre: ["Adventure", "Fantasy"], type: "TV" },
    { en: "Ragna Crimson", jp: "ラグナクリムゾン", romaji: "Ragna Crimson", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "The Ossan Newbie Adventurer", jp: "おっさん冒険者の新人", romaji: "Ossan Boukensha Kane no Zenkou", genre: ["Adventure", "Fantasy"], type: "TV" },
    { en: "Alya Sometimes Hides Her Feelings in Russian", jp: "アリヤはロシアで隠れたがる", romaji: "Roshidere", genre: ["Comedy", "Romance", "School"], type: "TV" },
    { en: "I Parry Everything: What Do You Mean I'm the Strongest?", jp: "俺、全部パリるから", romaji: "I Parry Everything: What Do You Mean I'm the Strongest? I'm Not Even an Adventurer Yet!", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "Failure Frame", jp: "失格紋の最強賢者", romaji: "Hazure Waku no 'Joutai Ijou Skill' de Saikyou ni Natta Ore ga Subete wo Juurin suru made", genre: ["Action", "Adventure", "Fantasy"], type: "TV" },
    { en: "Quality Assurance in Another World", jp: "異世界品質保証", romaji: "Kono Sekai ga Game da to, Ore dake ga Shitte Iru", genre: ["Adventure", "Comedy", "Fantasy"], type: "TV" },
    { en: "My Deer Friend Nokotan", jp: "ノコタン", romaji: "Shikanoko Nokonoko Koshitantan", genre: ["Adventure", "Fantasy", "Historical"], type: "TV" },
    { en: "Dungeon People", jp: "ダンジョンピープル", romaji: "Danjon no Naka no Hito", genre: ["Adventure", "Comedy", "Fantasy"], type: "TV" },
    { en: "Sakuna: Of Rice and Ruin", jp: "天穂のサクナヒメ", romaji: "Sakuna: Of Rice and Ruin", genre: ["Adventure", "Fantasy", "Supernatural"], type: "TV" },
    { en: "SHOSHIMIN", jp: "しょしみん", romaji: "Shoshimin", genre: ["Drama", "Slice of Life"], type: "TV" },
    { en: "The Elusive Samurai", jp: "逃げ上手の若君", romaji: "Nige Jouzu no Wakagimi", genre: ["Action", "Adventure", "Historical"], type: "TV" },
    { en: "Dahlia in Bloom", jp: "ダリア・イン・ブルーム", romaji: "Madōgushi Dariya wa Utsumukanai: Kyō kara Jiyū na Shokunin Raifu", genre: ["Adventure", "Fantasy", "Slice of Life"], type: "TV" },
    { en: "TASUKETSU", jp: "たすけつ", romaji: "Kimi ga Shine -Tasūketsu Death Game-", genre: ["Action", "Drama", "Horror"], type: "TV" },
    { en: "A Journey Through Another World: Raising Kids While Adventuring", jp: "異世界ゆるり紀行", romaji: "Isekai Yururi Kikō: Kosodate Shinagara Bōkensha Shimasu", genre: ["Adventure", "Fantasy", "Isekai"], type: "TV" },
    { en: "ATRI: My Dear Moments", jp: "ATRI -My Dear Moments-", romaji: "ATRI: My Dear Moments", genre: ["Drama", "Romance", "Sci-Fi"], type: "TV" },
    { en: "Makeine: Too Many Losing Heroines!", jp: "負けヒロインが多すぎる！", romaji: "Make Heroine ga Oosugiru!", genre: ["Comedy", "Romance", "School"], type: "TV" },
    { en: "MAYONAKA PUNCH", jp: "深夜パンチ", romaji: "Mayonaka Punch", genre: ["Action", "Comedy", "Fantasy"], type: "TV" },
    { en: "Bye Bye, Earth", jp: "ばいばい、アース", romaji: "Bai Bai, Asu", genre: ["Drama", "Slice of Life"], type: "TV" },
    { en: "Head Start at Birth", jp: "0歳児スタートダッシュ物語", romaji: "0-Saiji Sutāto Dasshu Monogatari", genre: ["Comedy", "Slice of Life", "Isekai"], type: "TV" }

    ];

    const queueAnimeList = [
        { en: "Red Cat Ramen", jp: "赤い猫のラーメン", romaji: "Ramen Aka Neko", genre: ["Comedy"], type: "TV" }
    ];

    const container = document.querySelector('main');
    const counter = document.getElementById('animeCounter');

    const searchBar = document.getElementById('searchBar');
    const watchedButton = document.getElementById('watchedButton');
    const queueButton = document.getElementById('queueButton');
    const genreFilter = document.getElementById('genreFilter');
    const typeFilter = document.getElementById('typeFilter');
    const langENButton = document.getElementById('langEN');
    const langJPButton = document.getElementById('langJP');
    const langROMButton = document.getElementById('langROM');
    const titleElement = document.querySelector('header h1');

    let currentList = watchedAnimeList;
    let currentLang = 'EN';

    searchBar.addEventListener('input', filterAnimeList);
    watchedButton.addEventListener('click', () => switchList('watched'));
    queueButton.addEventListener('click', () => switchList('queue'));
    genreFilter.addEventListener('change', filterAnimeList);
    typeFilter.addEventListener('change', filterAnimeList);
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
        const genre = genreFilter.value;
        const type = typeFilter.value.toLowerCase();

        const filteredList = currentList.filter(anime =>
            (genre === '' || anime.genre.includes(genre)) &&
            (type === '' || anime.type.toLowerCase() === type) &&
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
