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
{ en: "Fairy Tail", jp: "フェアリーテイル", romaji: "Fairy Tail" },
{ en: "Naruto", jp: "ナルト", romaji: "Naruto" },
{ en: "Naruto Shippuden", jp: "ナルト 疾風伝", romaji: "Naruto Shippuden" },
{ en: "Boruto", jp: "BORUTO-ボルト- NARUTO NEXT GENERATIONS", romaji: "Boruto" },
{ en: "One Piece", jp: "ワンピース", romaji: "One Piece" },
{ en: "Dragon Ball", jp: "ドラゴンボール", romaji: "Dragon Ball" },
{ en: "Dragon Ball Z", jp: "ドラゴンボールZ", romaji: "Dragon Ball Z" },
{ en: "Dragon Ball GT", jp: "ドラゴンボールGT", romaji: "Dragon Ball GT" },
{ en: "Dragon Ball Super", jp: "ドラゴンボール超", romaji: "Dragon Ball Super" },
{ en: "Attack on Titan", jp: "進撃の巨人", romaji: "Shingeki no Kyojin" },
{ en: "Tokyo Ghoul", jp: "東京喰種トーキョーグール", romaji: "Tokyo Ghoul" },
{ en: "No Game No Life", jp: "ノーゲーム・ノーライフ", romaji: "No Game No Life" },
{ en: "Parasyte the Maxim", jp: "寄生獣 セイの格率", romaji: "Kiseijuu: Sei no Kakuritsu" },
{ en: "Hunter x Hunter", jp: "ハンター×ハンター", romaji: "Hunter x Hunter" },
{ en: "Swords Art Online", jp: "ソードアート・オンライン", romaji: "Sword Art Online" },
{ en: "Full Metal Alchemist Brotherhood", jp: "鋼の錬金術師 FULLMETAL ALCHEMIST", romaji: "Hagane no Renkinjutsushi: Fullmetal Alchemist" },
{ en: "One Punch Man", jp: "ワンパンマン", romaji: "One Punch Man" },
{ en: "The Future Diary", jp: "未来日記", romaji: "Mirai Nikki" },
{ en: "Shiki", jp: "屍鬼", romaji: "Shiki" },
{ en: "Death Parade", jp: "デス・パレード", romaji: "Death Parade" },
{ en: "Steins;Gate", jp: "シュタインズ・ゲート", romaji: "Steins;Gate" },
{ en: "Another", jp: "アナザー", romaji: "Another" },
{ en: "Your Lie in April", jp: "四月は君の嘘", romaji: "Shigatsu wa Kimi no Uso" },
{ en: "Angel Beats!", jp: "エンジェルビーツ", romaji: "Angel Beats" },
{ en: "Charlotte", jp: "シャーロット", romaji: "Charlotte" },
{ en: "Clannad: After Story", jp: "CLANNAD ～AFTER STORY～", romaji: "Clannad: After Story" },
{ en: "Your Name", jp: "君の名は。", romaji: "Kimi no Na wa" },
{ en: "The Garden of Words", jp: "言の葉の庭", romaji: "Kotonoha no Niwa" },
{ en: "Corpse Party", jp: "コープスパーティー", romaji: "Corpse Party" },
{ en: "One Week Friends", jp: "一週間フレンズ", romaji: "Isshuukan Friends" },
{ en: "Himouto! Umaru-chan", jp: "干物妹!うまるちゃん", romaji: "Himouto! Umaru-chan" },
{ en: "Assassination Classroom", jp: "暗殺教室", romaji: "Ansatsu Kyoushitsu" },
{ en: "WataMote", jp: "私がモテないのはどう考えてもお前らが悪い!", romaji: "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!" },
{ en: "Oreimo", jp: "俺の妹がこんなに可愛いわけがない", romaji: "Ore no Imouto ga Konnani Kawaii Wake ga Nai" },
{ en: "Magi", jp: "マギ", romaji: "Magi" },
{ en: "Food Wars!", jp: "食戟のソーマ", romaji: "Shokugeki no Soma" },
{ en: "Nisekoi", jp: "ニセコイ", romaji: "Nisekoi" },
{ en: "Noragami", jp: "ノラガミ", romaji: "Noragami" },
{ en: "Golden Time", jp: "ゴールデンタイム", romaji: "Golden Time" },
{ en: "Place to Place", jp: "あっちこっち", romaji: "Acchi Kocchi" },
{ en: "Beyond the Boundary", jp: "境界の彼方", romaji: "Kyoukai no Kanata" },
{ en: "Prison School", jp: "監獄学園", romaji: "Kangoku Gakuen" },
{ en: "Blue Spring Ride", jp: "アオハライド", romaji: "Ao Haru Ride" },
{ en: "Death Note", jp: "デスノート", romaji: "Death Note" },
{ en: "A Channel", jp: "Aチャンネル", romaji: "A Channel" },
{ en: "New Game!", jp: "NEW GAME!", romaji: "New Game!" },
{ en: "Classroom of the Elite", jp: "ようこそ実力至上主義の教室へ", romaji: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e" },
{ en: "Yuru Yuri", jp: "ゆるゆり", romaji: "Yuru Yuri" },
{ en: "Anne Happy", jp: "あんハピ♪", romaji: "Anne Happy♪" },
{ en: "Amagami SS", jp: "アマガミSS", romaji: "Amagami SS" },
{ en: "Into the Forest of Fireflies' Light", jp: "蛍火の杜へ", romaji: "Hotarubi no Mori e" },
{ en: "Senyuu", jp: "戦勇。", romaji: "Senyuu" },
{ en: "Deadman Wonderland", jp: "デッドマン・ワンダーランド", romaji: "Deadman Wonderland" },
{ en: "The Devil is a Part-Timer!", jp: "はたらく魔王さま!", romaji: "Hataraku Maou-sama!" },
{ en: "K: Return of Kings", jp: "K RETURN OF KINGS", romaji: "K: Return of Kings" },
{ en: "Tanaka-kun is Always Listless", jp: "田中くんはいつもけだるげ", romaji: "Tanaka-kun wa Itsumo Kedaruge" },
{ en: "Higurashi Series", jp: "ひぐらしのなく頃に", romaji: "Higurashi no Naku Koro ni" },
{ en: "Tokyo Magnitude 8.0", jp: "東京マグニチュード8.0", romaji: "Tokyo Magnitude 8.0" },
{ en: "Glasslip", jp: "グラスリップ", romaji: "Glasslip" },
{ en: "Haikyuu!!", jp: "ハイキュー!!", romaji: "Haikyuu!!" },
{ en: "Toradora!", jp: "とらドラ!", romaji: "Toradora" },
{ en: "Erased", jp: "僕だけがいない街", romaji: "Boku dake ga Inai Machi" },
{ en: "Love, Chunibyo & Other Delusions! Ren", jp: "中二病でも恋がしたい!戀", romaji: "Chuunibyou Demo Koi ga Shitai! Ren" },
{ en: "Danganronpa", jp: "ダンガンロンパ", romaji: "Danganronpa" },
{ en: "K-On!", jp: "けいおん!", romaji: "K-On!" },
{ en: "Miss Kobayashi's Dragon Maid", jp: "小林さんちのメイドラゴン", romaji: "Kobayashi-san Chi no Maid Dragon" },
{ en: "Re:Zero", jp: "Re:ゼロから始める異世界生活", romaji: "Re:Zero kara Hajimeru Isekai Seikatsu" },
{ en: "Bungo Stray Dogs", jp: "文豪ストレイドッグス", romaji: "Bungo Stray Dogs" },
{ en: "Hanasuka Iroha", jp: "花咲くいろは", romaji: "Hanasaku Iroha" },
{ en: "Plastic Memories", jp: "プラスティック・メモリーズ", romaji: "Plastic Memories" },
{ en: "Kinmoza", jp: "きんいろモザイク", romaji: "Kiniro Mosaic" },
{ en: "BTOOOM!", jp: "ブトゥーム", romaji: "BTOOOM!" },
{ en: "Divine Gate", jp: "ディバインゲート", romaji: "Divine Gate" },
{ en: "Wagnaria!!", jp: "ワーキング!!", romaji: "Working!!" },
{ en: "Guilty Crown", jp: "ギルティクラウン", romaji: "Guilty Crown" },
{ en: "Anohana: The Flower We Saw That Day", jp: "あの日見た花の名前を僕達はまだ知らない。", romaji: "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai" },
{ en: "Beelzebub", jp: "べるぜバブ", romaji: "Beelzebub" },
{ en: "Terror in Resonance", jp: "残響のテロル", romaji: "Zankyou no Terror" },
{ en: "Kimi ni Todoke", jp: "君に届け", romaji: "Kimi ni Todoke" },
{ en: "Hell Girl", jp: "地獄少女", romaji: "Jigoku Shoujo" },
{ en: "Konosuba", jp: "この素晴らしい世界に祝福を!", romaji: "Kono Subarashii Sekai ni Shukufuku wo!" },
{ en: "School Days", jp: "スクールデイズ", romaji: "School Days" },
{ en: "King's Game", jp: "王様ゲーム", romaji: "Ousama Game" },
{ en: "Jormungand", jp: "ヨルムンガンド", romaji: "Jormungand" },
{ en: "ReLife", jp: "リライフ", romaji: "ReLIFE" },
{ en: "Psycho-Pass", jp: "サイコパス", romaji: "Psycho-Pass" },
{ en: "Trinity Seven", jp: "トリニティセブン", romaji: "Trinity Seven" },
{ en: "Non Non Biyori", jp: "のんのんびより", romaji: "Non Non Biyori" },
{ en: "Tsuredure Children", jp: "徒然チルドレン", romaji: "Tsuredure Children" },
{ en: "Fastest Finger First", jp: "ナナマル サンバツ", romaji: "Nana Maru San Batsu" },
{ en: "Love is Like a Cocktail", jp: "お酒は夫婦になってから", romaji: "Osake wa Fuufu ni Natte kara" },
{ en: "Mushishi", jp: "蟲師", romaji: "Mushishi" },
{ en: "91 Days", jp: "91デイズ", romaji: "91 Days" },
{ en: "Gamers!", jp: "ゲーマーズ!", romaji: "Gamers!" },
{ en: "Hamatora", jp: "ハマトラ", romaji: "Hamatora" },
{ en: "Jokers Game", jp: "ジョーカー・ゲーム", romaji: "Joker Game" },
{ en: "Baka and Test", jp: "バカとテストと召喚獣", romaji: "Baka to Test to Shoukanjuu" },
{ en: "Gunslinger Girl", jp: "ガンスリンガー・ガール", romaji: "Gunslinger Girl" },
{ en: "Elfen Lied", jp: "エルフェンリート", romaji: "Elfen Lied" },
{ en: "5 Centimeters per Second", jp: "秒速5センチメートル", romaji: "Byousoku 5 Centimeter" },
{ en: "D-Frag", jp: "ディーふらぐ！", romaji: "D-Frag" },
{ en: "The Melancholy of Haruhi Suzumiya", jp: "涼宮ハルヒの憂鬱", romaji: "Suzumiya Haruhi no Yuuutsu" },
{ en: "Recovery of an MMO Junkie", jp: "ネト充のススメ", romaji: "Net-juu no Susume" },
{ en: "Anti-Magic Academy", jp: "対魔導学園35試験小隊", romaji: "Taimadou Gakuen 35 Shiken Shoutai" },
{ en: "Blend-S", jp: "ブレンド・S", romaji: "Blend-S" },
{ en: "Pandora Hearts", jp: "パンドラハーツ", romaji: "Pandora Hearts" },
{ en: "School-Live!", jp: "がっこうぐらし！", romaji: "Gakkougurashi!" },
{ en: "Hand Shakers", jp: "ハンドシェイカー", romaji: "Hand Shakers" },
{ en: "Kill la Kill", jp: "キルラキル", romaji: "Kill la Kill" },
{ en: "Kokoro Connect", jp: "ココロコネクト", romaji: "Kokoro Connect" },
{ en: "Anime-Gataris", jp: "アニメガタリズ", romaji: "Anime-Gataris" },
{ en: "Juni Taisen: Zodiac War", jp: "十二大戦", romaji: "Juuni Taisen" },
{ en: "A Sister's All You Need", jp: "妹さえいればいい。", romaji: "Imouto sae Ireba Ii" },
{ en: "Black Clover", jp: "ブラッククローバー", romaji: "Black Clover" },
{ en: "Little Busters!", jp: "リトルバスターズ！", romaji: "Little Busters!" },
{ en: "Bloodivores", jp: "ブラッディヴォーレス", romaji: "Bloodivores" },
{ en: "Cheating Craft ", jp: "チーティングクラフト", romaji: "Cheating Craft" },
{ en: "Sakura Quest", jp: "サクラクエスト", romaji: "Sakura Quest" },
{ en: "Is It Wrong to Try to Pick Up Girls in a Dungeon?", jp: "ダンまち", romaji: "DanMachi" },
{ en: "Laid-Back Camp", jp: "ゆるキャン△", romaji: "Yuru Camp△" },
{ en: "Ms. Koizumi Loves Ramen Noodles", jp: "ラーメン大好き小泉さん", romaji: "Ramen Daisuki Koizumi-san" },
{ en: "Log Horizon", jp: "ログ・ホライズン", romaji: "Log Horizon" },
{ en: "Gabriel DropOut", jp: "ガヴリールドロップアウト", romaji: "Gabriel DropOut" },
{ en: "A Centaur's Life ", jp: "セントールの悩み", romaji: "Centaur no Nayami" },
{ en: "Sabagebu! - Survival Game Club!", jp: "さばげぶっ！", romaji: "Sabagebu!" },
{ en: "Slow Start", jp: "スロウスタート", romaji: "Slow Start" },
{ en: "Scorching Ping Pong Girls", jp: "灼熱の卓球娘", romaji: "Shakunetsu no Takkyuu Musume" },
{ en: "Hal", jp: "ハル", romaji: "Hal" },
{ en: "Tsuki ga Kirei", jp: "月がきれい", romaji: "Tsuki ga Kirei" },
{ en: "Ef: A Tale of Memories", jp: "エフ", romaji: "Ef" },
{ en: "Aho-Girl", jp: "アホガール", romaji: "Aho Girl" },
{ en: "Alice & Zoroku", jp: "アリスと蔵六", romaji: "Alice to Zouroku" },
{ en: "Teasing Master Takagi-san", jp: "からかい上手の高木さん", romaji: "Karakai Jouzu no Takagi-san" },
{ en: "Chronicles of the Going Home Club", jp: "帰宅部活動記録", romaji: "Kitakubu Katsudou Kiroku" },
{ en: "A Place Further Than the Universe", jp: "宇宙よりも遠い場所", romaji: "Sora yori mo Tooi Basho" },
{ en: "Interviews with Monster Girls", jp: "亜人ちゃんは語りたい", romaji: "Demi-chan wa Kataritai" },
{ en: "Night Raid 1931", jp: "夜ノヤッターマン", romaji: "Senkou no Night Raid" },
{ en: "Denki-Gai", jp: "デンキ街の本屋さん", romaji: "Denki-gai no Honya-san" },
{ en: "Restaurant to Another World", jp: "異世界食堂", romaji: "Isekai Shokudou" },
{ en: "My Teen Romantic Comedy SNAFU", jp: "やはり俺の青春ラブコメはまちがっている。", romaji: "Yahari Ore no Seishun Love Comedy wa Machigatteiru" },
{ en: "Shelter", jp: "シェルター", romaji: "Shelter" },
{ en: "Gate", jp: "ゲート 自衛隊 彼の地にて、斯く戦えり", romaji: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri" },
{ en: "Eromanga Sensei", jp: "エロマンガ先生", romaji: "Eromanga Sensei" },
{ en: "The World God Only Knows", jp: "神のみぞ知るセカイ", romaji: "Kami Nomi zo Shiru Sekai" },
{ en: "My Hero Academia", jp: "僕のヒーローアカデミア", romaji: "Boku no Hero Academia" },
{ en: "The Ryuo's Work is Never Done", jp: "りゅうおうのおしごと！", romaji: "Ryuuou no Oshigoto!" },
{ en: "Berserk ", jp: "ベルセルク", romaji: "Berserk" },
{ en: "Citrus", jp: "シトラス", romaji: "Citrus" },
{ en: "Masamune-kun's Revenge", jp: "政宗くんのリベンジ", romaji: "Masamune-kun no Revenge" },
{ en: "Servant x Service", jp: "サーバント×サービス", romaji: "Servant x Service" },
{ en: "My First Girlfriend is a Gal", jp: "はじめてのギャル", romaji: "Hajimete no Gal" },
{ en: "Monthly Girls' Nozaki-kun", jp: "月刊少女野崎くん", romaji: "Gekkan Shoujo Nozaki-kun" },
{ en: "My Little Monster", jp: "となりの怪物くん", romaji: "Tonari no Kaibutsu-kun" },
{ en: "Love Tyrant", jp: "恋愛暴君", romaji: "Renai Boukun" },
{ en: "March Comes in Like a Lion", jp: "3月のライオン", romaji: "3-gatsu no Lion" },
{ en: "Orange", jp: "オレンジ", romaji: "Orange" },
{ en: "ReWrite", jp: "Rewrite", romaji: "ReWrite" },
{ en: "ALDNOAH.ZERO", jp: "アルドノア・ゼロ", romaji: "Aldnoah.Zero" },
{ en: "Seraph of the End", jp: "終わりのセラフ", romaji: "Owari no Seraph" },
{ en: "White Album", jp: "ホワイトアルバム", romaji: "White Album" },
{ en: "White Album 2", jp: "ホワイトアルバム2", romaji: "White Album 2" },
{ en: "The Ancient Magus' Bride", jp: "魔法使いの嫁", romaji: "Mahoutsukai no Yome" },
{ en: "Comic Girls", jp: "こみっくがーるず", romaji: "Comic Girls" },
{ en: "My Sweet Tyrant", jp: "あっくんとカノジョ", romaji: "Akkun to Kanojo" },
{ en: "Overlord", jp: "オーバーロード", romaji: "Overlord" },
{ en: "DARLING in the FRANXX", jp: "ダーリン・イン・ザ・フランキス", romaji: "Darling in the Franxx" },
{ en: "Crossing Time", jp: "踏切時間", romaji: "Fumikiri Jikan" },
{ en: "Snow White with the Red Hair", jp: "赤髪の白雪姫", romaji: "Akagami no Shirayukihime" },
{ en: "Hinamatsuri", jp: "ヒナまつり", romaji: "Hinamatsuri" },
{ en: "Locodol", jp: "普通の女子校生が【ろこどる】やってみた。", romaji: "Locodol" },
{ en: "Amanchu!", jp: "あまんちゅ！", romaji: "Amanchu!" },
{ en: "Welcome to the N-H-K", jp: "NHKにようこそ！", romaji: "NHK ni Youkoso!" },
{ en: "Mob Psycho 100", jp: "モブサイコ100", romaji: "Mob Psycho 100" },
{ en: "Love Lab", jp: "ラブライブ！", romaji: "Love Lab" },
{ en: "Yotsuiro Biyori", jp: "四月は君の嘘", romaji: "Yotsuiro Biyori" },
{ en: "The Idolmaster", jp: "アイドルマスター", romaji: "The Idolmaster" },
{ en: "THE IDOLM@STER CINDERELLA GIRLS", jp: "アイドルマスター シンデレラガールズ", romaji: "The Idolmaster Cinderella Girls" },
{ en: "You Don't Know Gunma Yet", jp: "お前はまだグンマを知らない", romaji: "Omae wa Mada Gunma wo Shiranai" },
{ en: "PERSONA5", jp: "ペルソナ5", romaji: "Persona 5" },
{ en: "Love Live! School Idol Project", jp: "ラブライブ！スクールアイドルプロジェクト", romaji: "Love Live! School Idol Project" },
{ en: "Love Live! Sunshine!!", jp: "ラブライブ！サンシャイン!!", romaji: "Love Live! Sunshine!!" },
{ en: "Hakata Tonkotsu Ramens", jp: "博多豚骨ラーメンズ", romaji: "Hakata Tonkotsu Ramens" },
{ en: "No.6", jp: "ナンバー・シックス", romaji: "No.6" },
{ en: "Grimgar of Fantasy and Ash", jp: "灰と幻想のグリムガル", romaji: "Hai to Gensou no Grimgar" },
{ en: "Kakegurui", jp: "賭ケグルイ", romaji: "Kakegurui" },
{ en: "The Disastrous Life of Saiki K.", jp: "斉木楠雄のΨ難", romaji: "Saiki Kusuo no Psi-nan" },
{ en: "The Seven Deadly Sins", jp: "七つの大罪", romaji: "Nanatsu no Taizai" },
{ en: "Hyouka", jp: "氷菓", romaji: "Hyouka" },
{ en: "Violet Evergarden ", jp: "ヴァイオレット・エヴァーガーデン", romaji: "Violet Evergarden" },
{ en: "Durarara!!", jp: "デュラララ!!", romaji: "Durarara!!" },
{ en: "Dagashi Kashi", jp: "だがしかし", romaji: "Dagashi Kashi" },
{ en: "School Babysitters", jp: "学園ベビーシッターズ", romaji: "Gakuen Babysitters" },
{ en: "The \"Hentai\"  Prince and the Stony Cat.", jp: "変態王子と笑わない猫。", romaji: "Hentai Ouji to Warawanai Neko." },
{ en: "Black Butler", jp: "黒執事", romaji: "Kuroshitsuji" },
{ en: "The Pet Girl of Sakurasou", jp: "さくら荘のペットな彼女", romaji: "Sakurasou no Pet na Kanojo" },
{ en: "Gintama ", jp: "銀魂", romaji: "Gintama" },
{ en: "My Love Story!!", jp: "俺物語!!", romaji: "Ore Monogatari!!" },
{ en: "Record of Grancrest War", jp: "グランクレスト戦記", romaji: "Grancrest Senki" },
{ en: "Island", jp: "アイランド", romaji: "Island" },
{ en: "Angels of Death", jp: "殺戮の天使", romaji: "Satsuriku no Tenshi" },
{ en: "Chio's School Road", jp: "ちおちゃんの通学路", romaji: "Chio-chan no Tsuugakuro" },
{ en: "Cells at Work!", jp: "はたらく細胞", romaji: "Hataraku Saibou" },
{ en: "Asobi Asobase", jp: "あそびあそばせ", romaji: "Asobi Asobase" },
{ en: "Saga of Tanya the Evil", jp: "幼女戦記", romaji: "Youjo Senki" },
{ en: "Barakamon", jp: "ばらかもん", romaji: "Barakamon" },
{ en: "Dantalian no Shoka", jp: "ダンタリアンの書架", romaji: "Dantalian no Shoka" },
{ en: "Nichijou", jp: "日常", romaji: "Nichijou" },
{ en: "Gosick", jp: "ゴシック", romaji: "Gosick" },
{ en: "Komori-san Can't Decline!", jp: "こもりさんは断れない!", romaji: "Komori-san wa Kotowarenai!" },
{ en: "Waiting in the Summer", jp: "あの夏で待ってる", romaji: "Ano Natsu de Matteru" },
{ en: "Blue Exorcist", jp: "青の祓魔師", romaji: "Ao no Exorcist" },
{ en: "Myself; Yourself", jp: "マイセルフ；ユアセルフ", romaji: "Myself; Yourself" },
{ en: "Soul Eater", jp: "ソウルイーター", romaji: "Soul Eater" },
{ en: "Soul Eater Not!", jp: "ソウルイーターノット!", romaji: "Soul Eater Not!" },
{ en: "Akame ga Kill!", jp: "アカメが斬る!", romaji: "Akame ga Kill!" },
{ en: "Yuyushiki", jp: "ゆゆ式", romaji: "Yuyushiki" },
{ en: "From the New World", jp: "新世界より", romaji: "Shinsekai Yori" },
{ en: "Upotte!!", jp: "うぽって!!", romaji: "Upotte!!" },
{ en: "Eden of the East", jp: "東のエデン", romaji: "Higashi no Eden" },
{ en: "Serial Experiment Lain", jp: "シリアルエクスペリメンツ・レイン", romaji: "Serial Experiments Lain" },
{ en: "Riddle Story of Devil", jp: "悪魔のリドル", romaji: "Akuma no Riddle" },
{ en: "In Search of the Lost Future", jp: "失われた未来を求めて", romaji: "Ushinawareta Mirai wo Motomete" },
{ en: "Inu x Boku SS", jp: "妖狐×僕SS", romaji: "Inu x Boku SS" },
{ en: "Mysterious Girlfriend X", jp: "謎の彼女X", romaji: "Nazo no Kanojo X" },
{ en: "Sweetness & Lightning", jp: "甘々と稲妻", romaji: "Amaama to Inazuma" },
{ en: "Yamishibai: Japanese Ghost Stories", jp: "闇芝居", romaji: "Yamishibai: Japanese Ghost Stories" },
{ en: "Junji Ito Collection", jp: "伊藤潤二コレクション", romaji: "Junji Ito Collection" },
{ en: "RErideD: Derrida, Who Leaps Through Time", jp: "RErideD-刻越えのデリダ", romaji: "RErideD: Tokigoe no Derrida" },
{ en: "Frankenstein Family", jp: "怪物事変", romaji: "Shiyan Pin Jiating" },
{ en: "My Wife is the Student Council President ", jp: "おくさまが生徒会長!", romaji: "Okusama ga Seitokaichou!" },
{ en: "Dusk Maiden of Amnesia", jp: "黄昏乙女×アムネジア", romaji: "Tasogare Otome x Amnesia" },
{ en: "Time of Eve", jp: "イヴの時間", romaji: "Eve no Jikan" },
{ en: "Aquatic Language", jp: "水のコトバ", romaji: "Mizu no Kotoba" },
{ en: "Shimoneta: A Boring World Where the Concept of Dirty Jokes Doesn't Exist", jp: "下ネタという概念が存在しない退屈な世界", romaji: "Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai" },
{ en: "That Time I Got Reincarnated as a Slime", jp: "転生したらスライムだった件", romaji: "Tensei Shitara Slime Datta Ken" },
{ en: "Rascal Does Not Dream of Bunny Girl Senpai", jp: "青春ブタ野郎はバニーガール先輩の夢を見ない", romaji: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai" },
{ en: "Zombie Land Saga", jp: "ゾンビランドサガ", romaji: "Zombie Land Saga" },
{ en: "Code Geass", jp: "コードギアス", romaji: "Code Geass: Hangyaku no Lelouch" },
{ en: "Goblin Slayer", jp: "ゴブリンスレイヤー", romaji: "Goblin Slayer" },
{ en: "Daily Lives of High School Boys", jp: "男子高校生の日常", romaji: "Danshi Koukousei no Nichijou" },
{ en: "Dog & Scissors ", jp: "犬とハサミは使いよう", romaji: "Inu to Hasami wa Tsukaiyou" },
{ en: "A Certain Magical Index", jp: "とある魔術の禁書目録", romaji: "Toaru Majutsu no Index" },
{ en: "Patema Inverted", jp: "サカサマのパテマ", romaji: "Sakasama no Patema" },
{ en: "A Lull in the Sea", jp: "凪のあすから", romaji: "Nagi no Asukara" },
{ en: "Punch Line", jp: "パンチライン", romaji: "Punch Line" },
{ en: "Hyakko", jp: "ひゃっこ", romaji: "Hyakko" },
{ en: "Hinomaru Sumo", jp: "火ノ丸相撲", romaji: "Hinomaruzumou" },
{ en: "Fate/stay night", jp: "Fate/stay night", romaji: "Fate/stay night" },
{ en: "Fate/Zero", jp: "Fate/Zero", romaji: "Fate/Zero" },
{ en: "Toriko", jp: "トリコ", romaji: "Toriko" },
{ en: "Squid Girl", jp: "侵略！イカ娘", romaji: "Shinryaku! Ika Musume" },
{ en: "Yamada-kun and the Seven Witches", jp: "山田くんと7人の魔女", romaji: "Yamada-kun to 7-nin no Majo" },
{ en: "Kiznaiver", jp: "キズナイーバー", romaji: "Kiznaiver" },
{ en: "Monster Musume", jp: "モンスター娘のいる日常", romaji: "Monster Musume no Iru Nichijou" },
{ en: "Occultic;Nine", jp: "オカルティック・ナイン", romaji: "Occultic;Nine" },
{ en: "Golden Kamuy", jp: "ゴールデンカムイ", romaji: "Golden Kamuy" },
{ en: "Bakuon!!", jp: "ばくおん!!", romaji: "Bakuon!!" },
{ en: "A Silent Voice", jp: "聲の形", romaji: "Koe no Katachi" },
{ en: "Wolf Children", jp: "おおかみこどもの雨と雪", romaji: "Ookami Kodomo no Ame to Yuki" },
{ en: "Magical Girl Raising Project", jp: "魔法少女育成計画", romaji: "Mahou Shoujo Ikusei Keikaku" },
{ en: "Neon Genesis Evangelion", jp: "新世紀エヴァンゲリオン", romaji: "Neon Genesis Evangelion" },
{ en: "Grand Blue", jp: "ぐらんぶる", romaji: "Grand Blue" },
{ en: "Bloom Into You", jp: "やがて君になる", romaji: "Yagate Kimi ni Naru" },
{ en: "Happy Sugar Life", jp: "ハッピーシュガーライフ", romaji: "Happy Sugar Life" },
{ en: "Wotakoi: Love is Hard for Otaku", jp: "ヲタクに恋は難しい", romaji: "Wotaku ni Koi wa Muzukashii" },
{ en: "Magical Girl Site", jp: "魔法少女サイト", romaji: "Mahou Shoujo Site" },
{ en: "Boogiepop and Others", jp: "ブギーポップは笑わない", romaji: "Boogiepop wa Warawanai" },
{ en: "The Rising of the Shield Hero", jp: "盾の勇者の成り上がり", romaji: "Tate no Yuusha no Nariagari" },
{ en: "The Promised Neverland", jp: "約束のネバーランド", romaji: "Yakusoku no Neverland" },
{ en: "Hi Score Girl", jp: "ハイスコアガール", romaji: "Hi Score Girl" },
{ en: "Back Street Girls: Gokudols", jp: "Back Street Girls -ゴクドルズ-", romaji: "Back Street Girls: Gokudols" },
{ en: "Mitsuboshi Colors", jp: "三ツ星カラーズ", romaji: "Mitsuboshi Colors" },
{ en: "My Roommate is a Cat", jp: "同居人はひざ、時々、頭のうえ。", romaji: "Doukyonin wa Hiza, Tokidoki, Atama no Ue." },
{ en: "WATATEN! An Angel Flew Down to Me", jp: "私に天使が舞い降りた!", romaji: "Watashi ni Tenshi ga Maiorita!" },
{ en: "3D Kanojo: Real Girl", jp: "3D彼女 リアルガール", romaji: "3D Kanojo: Real Girl" },
{ en: "Flying Witch", jp: "ふらいんぐうぃっち", romaji: "Flying Witch" },
{ en: "Kaguya-sama: Love Is War", jp: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～", romaji: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen" },
{ en: "The Quintessential Quintuplets", jp: "五等分の花嫁", romaji: "Go-Toubun no Hanayome" },
{ en: "I Want to Eat Your Pancreas", jp: "君の膵臓をたべたい", romaji: "Kimi no Suizou wo Tabetai" },
{ en: "SSSS.GRIDMAN", jp: "SSSS.GRIDMAN", romaji: "SSSS.GRIDMAN" },
{ en: "Perfect Blue", jp: "パーフェクトブルー", romaji: "Perfect Blue" },
{ en: "When Marnie Was There", jp: "思い出のマーニー", romaji: "Omoide no Marnie" },
{ en: "Maquia: When the Promised Flower Blooms", jp: "さよならの朝に約束の花をかざろう", romaji: "Sayonara no Asa ni Yakusoku no Hana wo Kazarou" },
{ en: "How Not to Summon a Demon Lord", jp: "異世界魔王と召喚少女の奴隷魔術", romaji: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu" },
{ en: "The Price of Smiles", jp: "エガオノダイカ", romaji: "Egao no Daika" },
{ en: "Lucky Star", jp: "らき☆すた", romaji: "Lucky☆Star" },
{ en: "Bleach", jp: "ブリーチ", romaji: "Bleach" },
{ en: "Domestic Girlfriend", jp: "ドメスティックな彼女", romaji: "Domestic na Kanojo" },
{ en: "The Royal Tutor", jp: "王室教師ハイネ", romaji: "Oushitsu Kyoushi Haine" },
{ en: "Aoharu x Machinegun", jp: "青春×機関銃", romaji: "Aoharu x Kikanjuu" },
{ en: "Flip Flappers", jp: "フリップフラッパーズ", romaji: "Flip Flappers" },
{ en: "Run with the Wind", jp: "風が強く吹いている", romaji: "Kaze ga Tsuyoku Fuiteiru" },
{ en: "How Clumsy You Are, Miss Ueno", jp: "上野さんは不器用", romaji: "Ueno-san wa Bukiyou" },
{ en: "Fruits Basket", jp: "フルーツバスケット", romaji: "Fruits Basket" },
{ en: "Hitori Bocchi's ○○ Lifestyle", jp: "ひとりぼっちの○○生活", romaji: "Hitoribocchi no Marumaruseikatsu" },
{ en: "Joshi Kausei", jp: "女子かう生", romaji: "Joshikausei" },
{ en: "Nobunaga Teacher's Young Bride", jp: "ノブナガ先生の幼な妻", romaji: "Nobunaga-sensei no Osanazuma" },
{ en: "Demon Slayer: Kimetsu no Yaiba", jp: "鬼滅の刃", romaji: "Kimetsu no Yaiba" },
{ en: "We Never Learn: BOKUBEN", jp: "ぼくたちは勉強ができない", romaji: "Bokutachi wa Benkyou ga Dekinai" },
{ en: "Black Bullet", jp: "ブラック・ブレット", romaji: "Black Bullet" },
{ en: "GJ Club", jp: "GJ部", romaji: "GJ-bu  " },
{ en: "Senryu Girl", jp: "川柳少女", romaji: "Senryuu Shoujo  " },
{ en: "Ao-chan Can't Study!", jp: "淫らな青ちゃんは勉強ができない", romaji: "Midara na Ao-chan wa Benkyou ga Dekinai  " },
{ en: "Usagi Drop", jp: "うさぎドロップ", romaji: "Usagi Drop  " },
{ en: "The Morose Mononokean", jp: "不機嫌なモノノケ庵", romaji: "Fukigen na Mononokean  " },
{ en: "Chihayafuru", jp: "ちはやふる", romaji: "Chihayafuru  " },
{ en: "GTO", jp: "GTO", romaji: "Great Teacher Onizuka (GTO)  " },
{ en: "Silver Spoon", jp: "銀の匙", romaji: "Gin no Saji  " },
{ en: "Wise Man's Grandchild", jp: "賢者の孫", romaji: "Kenja no Mago  " },
{ en: "Honey and Clover", jp: "ハチミツとクローバー", romaji: "Hachimitsu to Clover  " },
{ en: "Liz and the Blue Bird", jp: "リズと青い鳥", romaji: "Liz to Aoi Tori  " },
{ en: "Your Voice -KIMIKOE-", jp: "君の声を届けたい", romaji: "Kimi no Koe wo Todoketai  " },
{ en: "Summer Wars", jp: "サマーウォーズ", romaji: "Summer Wars  " },
{ en: "Flavors of Youth", jp: "詩季織々", romaji: "Shikioriori  " },
{ en: "Alderamin on the Sky", jp: "ねじ巻き精霊戦記 天鏡のアルデラミン", romaji: "Nejimaki Seirei Senki: Tenkyou no Alderamin  " },
{ en: "Banana Fish", jp: "BANANA FISH", romaji: "Banana Fish  " },
{ en: "Made in Abyss", jp: "メイドインアビス", romaji: "Made in Abyss  " },
{ en: "Monster", jp: "MONSTER", romaji: "Monster  " },
{ en: "Handa-kun", jp: "はんだくん", romaji: "Handa-kun  " },
{ en: "Magical Sempai", jp: "手品先輩", romaji: "Tejina-senpai  " },
{ en: "Are You Lost?", jp: "ソウナンですか？", romaji: "Sounan Desu ka?  " },
{ en: "Fire Force", jp: "炎炎ノ消防隊", romaji: "Enen no Shouboutai  " },
{ en: "Dr. Stone", jp: "ドクターストーン", romaji: "Dr. Stone  " },
{ en: "If It’s For My Daughter, I’d Even Defeat a Demon Lord", jp: "娘のためならば、俺はもしかしたら魔王も倒せるかもしれない。", romaji: "Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai  " },
{ en: "Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?", jp: "通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？", romaji: "Tsuujou Kougeki ga Zentai Kougeki de ni Kai Kougeki no Okaasan wa Suki desu ka?  " },
{ en: "The Anthem of the Heart", jp: "心が叫びたがってるんだ。", romaji: "Kokoro ga Sakebitagatterunda.  " },
{ en: "The Girl Who Leapt Through Time", jp: "時をかける少女", romaji: "Toki wo Kakeru Shoujo  " },
{ en: "Rainbow: Nisha Rokubou no Shichinin", jp: "虹色デイズ", romaji: "Rainbow: Nisha Rokubou no Shichinin  " },
{ en: "Love and Lies", jp: "恋と嘘", romaji: "Koi to Uso  " },
{ en: "JoJo's Bizarre Adventure", jp: "ジョジョ", romaji: "JoJo no Kimyou na Bouken  " },
{ en: "O Maidens in Your Savage Season", jp: "荒ぶる季節の乙女どもよ。", romaji: "Araburu Kisetsu no Otome-domo yo.  " },
{ en: "Cop Craft", jp: "コップクラフト", romaji: "Cop Craft  " },
{ en: "Natsume's Book of Friends", jp: "夏目友人帳", romaji: "Natsume Yuujinchou  " },
{ en: "Gurren Lagann", jp: "天元突破グレンラガン", romaji: "Tengen Toppa Gurren Lagann  " },
{ en: "SKET Dance", jp: "スケットダンス", romaji: "SKET Dance  " },
{ en: "BlackFox", jp: "ブラックフォックス", romaji: "BlackFox  " },
{ en: "Showa Genroku Rakugo Shinju", jp: "昭和元禄落語心中", romaji: "Shouwa Genroku Rakugo Shinjuu  " },
{ en: "ORESUKI: Are you the only one who loves me?", jp: "俺好き", romaji: "Ore wo Suki nano wa Omae dake ka yo (ORESUKI)  " },
{ en: "Welcome to Demon School! Iruma-kun", jp: "魔入りました！入間くん", romaji: "Mairimashita! Iruma-kun  " },
{ en: "Assassins Pride", jp: "アサシンズプライド", romaji: "Assassins Pride  " },
{ en: "Wasteful Days of High School Girls", jp: "女子高生の無駄づかい", romaji: "Joshikousei no Mudazukai  " },
{ en: "Good Luck Girl!", jp: "貧乏神が!", romaji: "Binbougami ga!  " },
{ en: "Nana", jp: "NANA", romaji: "Nana  " },
{ en: "Skip Beat!", jp: "スキップ・ビート!", romaji: "Skip Beat!  " },
{ en: "Engaged to the Unidentified", jp: "未確認で進行形", romaji: "Mikakunin de Shinkoukei  " },
{ en: "Blast of Tempest", jp: "絶園のテンペスト", romaji: "Zetsuen no Tempest  " },
{ en: "Tada Never Falls in Love", jp: "多田くんは恋をしない", romaji: "Tada-kun wa Koi wo Shinai  " },
{ en: "Tamako Market", jp: "たまこマーケット", romaji: "Tamako Market  " },
{ en: "Strawberry Marshmallow", jp: "苺ましまろ", romaji: "Ichigo Mashimaro  " },
{ en: "Maid-Sama!", jp: "会長はメイド様!", romaji: "Kaichou wa Maid-sama!  " },
{ en: "Fate/Grand Order: Babylonia", jp: "Fate/Grand Order -絶対魔獣戦線バビロニア-", romaji: "Fate/Grand Order: Zettai Majuu Sensen Babylonia  " },
{ en: "Fate/Stay Night Movie: Heaven’s Feel", jp: "劇場版 Fate/stay night [Heaven's Feel]", romaji: "Fate/stay night Movie: Heaven’s Feel  " },
{ en: "Kabaneri of the Iron Fortress", jp: "甲鉄城のカバネリ", romaji: "Koutetsujou no Kabaneri  " },
{ en: "Kids on the Slope", jp: "坂道のアポロン", romaji: "Sakamichi no Apollon  " },
{ en: "Inuyasha", jp: "犬夜叉", romaji: "Inuyasha  " },
{ en: "Arakawa Under the Bridge", jp: "荒川アンダー ザ ブリッジ", romaji: "Arakawa Under the Bridge  " },
{ en: "Girls’ Last Tour", jp: "少女終末旅行", romaji: "Shoujo Shuumatsu Ryokou  " },
{ en: "Shirobako", jp: "SHIROBAKO", romaji: "Shirobako  " },
{ en: "My Neighbor Seki", jp: "となりの関くん", romaji: "Tonari no Seki-kun  " },
{ en: "Oreshura", jp: "俺の彼女と幼なじみが修羅場すぎる", romaji: "Ore no Kanojo to Osananajimi ga Shuraba Sugiru (Oreshura)  " },
{ en: "Vinland Saga", jp: "ヴィンランド・サガ", romaji: "Vinland Saga  " },
{ en: "Kotoura-san", jp: "琴浦さん", romaji: "Kotoura-san  " },
{ en: "Keep Your Hands Off Eizouken!", jp: "映像研には手を出すな!", romaji: "Eizouken ni wa Te wo Dasu na!  " },
{ en: "A Destructive God Sits Next to Me", jp: "ぼくのとなりに暗黒破壊神がいます。", romaji: "Boku no Tonari ni Ankoku Hakaishin ga Imasu.  " },
{ en: "Land of the Lustrous", jp: "宝石の国", romaji: "Houseki no Kuni  " },
{ en: "The Demon Girl Next Door", jp: "まちカドまぞく", romaji: "Machikado Mazoku  " },
{ en: "Interspecies Reviewers", jp: "異種族レビュアーズ", romaji: "Ishuzoku Reviewers  " },
{ en: "Lovely Complex", jp: "ラブ★コン", romaji: "Lovely★Complex  " },
{ en: "Ms.Vampire who lives in my neighborhood", jp: "となりの吸血鬼さん", romaji: "Tonari no Kyuuketsuki-san  " },
{ en: "The Irregular at Magic High School", jp: "魔法科高校の劣等生", romaji: "Mahouka Koukou no Rettousei  " },
{ en: "FLCL", jp: "フリクリ", romaji: "FLCL  " },
{ en: "Carole and Tuesday", jp: "キャロル&チューズデイ", romaji: "Carole & Tuesday  " },
{ en: "Seton Academy: Join the Pack!", jp: "群れなせ！シートン学園", romaji: "Murenase! Seton Gakuen  " },
{ en: "Darwin’s Game", jp: "ダーウィンズゲーム", romaji: "Darwin's Game  " },
{ en: "In/Spectre", jp: "虚構推理", romaji: "Kyokou Suiri  " },
{ en: "Colorful", jp: "カラフル", romaji: "Colorful  " },
{ en: "Promare", jp: "プロメア", romaji: "Promare  " },
{ en: "Grave of the Fireflies", jp: "火垂るの墓", romaji: "Hotaru no Haka  " },
{ en: "Spirited Away", jp: "千と千尋の神隠し", romaji: "Sen to Chihiro no Kamikakushi  " },
{ en: "Howls Moving Castle", jp: "ハウルの動く城", romaji: "Howl no Ugoku Shiro  " },
{ en: "Toilet-Bound Hanako-kun", jp: "地縛少年花子くん", romaji: "Jibaku Shounen Hanako-kun  " },
{ en: "Boys Over Flowers", jp: "花より男子", romaji: "Hana Yori Dango  " },
{ en: "Dororo", jp: "どろろ", romaji: "Dororo  " },
{ en: "ID:INVADED", jp: "ID:INVADED", romaji: "Id:Invaded  " },
{ en: "Izetta: The Last Witch", jp: "終末のイゼッタ", romaji: "Shuumatsu no Izetta  " },
{ en: "Samurai Champloo", jp: "サムライチャンプルー", romaji: "Samurai Champloo  " },
{ en: "Bakuman", jp: "バクマン。", romaji: "Bakuman.  " },
{ en: "Tower of God", jp: "神之塔", romaji: "Kami no Tou  " },
{ en: "Sing “Yesterday” For Me", jp: "イエスタデイをうたって", romaji: "Yesterday wo Utatte  " },
{ en: "My Next Life as a Villainess: All Routes Lead to Doom!", jp: "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…", romaji: "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...  " },
{ en: "Hanamaru Kindergarten", jp: "はなまる幼稚園", romaji: "Hanamaru Youchien  " },
{ en: "Is the Order a Rabbit?", jp: "ご注文はうさぎですか？", romaji: "Gochuumon wa Usagi Desu ka?  " },
{ en: "Princess Connect! Re: Dive", jp: "プリンセスコネクト！Re:Dive", romaji: "Princess Connect! Re:Dive  " },
{ en: "Baccano!", jp: "バッカーノ!", romaji: "Baccano!  " },
{ en: "Weathering With You", jp: "天気の子", romaji: "Tenki no Ko  " },
{ en: "Kingdom", jp: "キングダム", romaji: "Kingdom  " },
{ en: "Megalobox", jp: "メガロボクス", romaji: "Megalo Box  " },
{ en: "This Art Club Has a Problem!", jp: "この美術部には問題がある！", romaji: "Kono Bijutsubu ni wa Mondai ga Aru!  " },
{ en: "Kakushigoto", jp: "かくしごと", romaji: "Kakushigoto  " },
{ en: "Whisper of the Heart", jp: "耳をすませば", romaji: "Mimi wo Sumaseba  " },
{ en: "Hayate the Combat Butler!", jp: "ハヤテのごとく！", romaji: "Hayate no Gotoku!  " },
{ en: "DECA-DENCE", jp: "デカダンス", romaji: "DECA-DENCE  " },
{ en: "Diary of Our Days at the Breakwater", jp: "放課後ていぼう日誌", romaji: "Houkago Teibou Nisshi  " },
{ en: "Uzaki-chan Wants to Hang Out!", jp: "宇崎ちゃんは遊びたい！", romaji: "Uzaki-chan wa Asobitai!  " },
{ en: "Rent-a-Girlfriend", jp: "彼女、お借りします", romaji: "Kanojo, Okarishimasu  " },
{ en: "Astra Lost in Space", jp: "彼方のアストラ", romaji: "Kanata no Astra  " },
{ en: "Great Pretender", jp: "グレートプリテンダー", romaji: "Great Pretender  " },
{ en: "Japan Sinks: 2020", jp: "日本沈没2020", romaji: "Nihon Chinbotsu 2020  " },
{ en: "Kono Oto Tomare!", jp: "この音とまれ！", romaji: "Kono Oto Tomare!  " },
{ en: "Please Take My Brother Away!", jp: "兄に付ける薬はない！", romaji: "Ani ni Tsukeru Kusuri wa Nai!  " },
{ en: "Puella Magi Madoka Magica", jp: "魔法少女まどか☆マギカ", romaji: "Mahou Shoujo Madoka★Magica  " },
{ en: "The Millionaire Detective: Balance - Unlimited", jp: "富豪刑事 Balance:UNLIMITED", romaji: "Fugou Keiji: Balance:Unlimited  " },
{ en: "Spice and Wolf", jp: "狼と香辛料", romaji: "Ookami to Koushinryou  " },
{ en: "Dropkick on My Devil!", jp: "邪神ちゃんドロップキック", romaji: "Jashin-chan Dropkick  " },
{ en: "The Misfit of Demon King Academy", jp: "魔王学院の不適合者", romaji: "Maou Gakuin no Futekigousha  " },
{ en: "The Boy and the Beast", jp: "バケモノの子", romaji: "Bakemono no Ko  " },
{ en: "Bakemonogatari", jp: "化物語", romaji: "Bakemonogatari  " },
{ en: "Katanagatari", jp: "刀語", romaji: "Katanagatari  " },
{ en: "Kizumonogatari", jp: "傷物語", romaji: "Kizumonogatari  " },
{ en: "Nisemonogatari", jp: "偽物語", romaji: "Nisemonogatari  " },
{ en: "Nekomonogatari", jp: "猫物語", romaji: "Nekomonogatari  " },
{ en: "Legend of the Galactic Heroes", jp: "銀河英雄伝説", romaji: "Ginga Eiyuu Densetsu  " },
{ en: "I Can't Understand What My Husband Is Saying", jp: "旦那が何を言っているかわからない件", romaji: "Danna ga Nani wo Itteiru ka Wakaranai Ken  " },
{ en: "Kannagi: Crazy Shrine Maidens", jp: "かんなぎ", romaji: "Kannagi  " },
{ en: "Burn the Witch", jp: "BURN THE WITCH", romaji: "Burn the Witch  " },
{ en: "I'm Standing on a Million Lives", jp: "100万の命の上に俺は立っている", romaji: "100-man no Inochi no Ue ni Ore wa Tatteiru  " },
{ en: "Jujutsu Kaisen", jp: "呪術廻戦", romaji: "Jujutsu Kaisen  " },
{ en: "TONIKAWA: Over the Moon For You", jp: "トニカクカワイイ", romaji: "Tonikaku Kawaii  " },
{ en: "Yashahime: Princess Half-Demon", jp: "半妖の夜叉姫", romaji: "Hanyou no Yashahime  " },
{ en: "Adachi and Shimamura", jp: "安達としまむら", romaji: "Adachi to Shimamura  " },
{ en: "The Gymnastics Samurai", jp: "体操ザムライ", romaji: "Taisou Zamurai  " },
{ en: "The Journey of Elaina", jp: "魔女の旅々", romaji: "Majo no Tabitabi  " },
{ en: "Azumanga Daioh", jp: "あずまんが大王", romaji: "Azumanga Daioh  " },
{ en: "Mr. Osomatsu", jp: "おそ松さん", romaji: "Osomatsu-san  " },
{ en: "Konohana Kitan", jp: "此花亭奇譚", romaji: "Konohana Kitan  " },
{ en: "The Garden of Sinners", jp: "空の境界", romaji: "Kara no Kyoukai  " },
{ en: "Kino's Journey", jp: "キノの旅", romaji: "Kino no Tabi  " },
{ en: "Akudama Drive", jp: "アクダマドライブ", romaji: "Akudama Drive  " },
{ en: "Genshiken", jp: "げんしけん", romaji: "Genshiken  " },
{ en: "Mitsudomoe", jp: "みつどもえ", romaji: "Mitsudomoe  " },
{ en: "Minami-ke", jp: "みなみけ", romaji: "Minami-ke  " },
{ en: "Phantom: Requiem for the Phantom", jp: "ファントム", romaji: "Phantom: Requiem for the Phantom  " },
{ en: "Penguindrum", jp: "輪るピングドラム", romaji: "Mawaru Penguindrum  " },
{ en: "Heaven's Design Team", jp: "天地創造デザイン部", romaji: "Tenchi Souzou Design-bu  " },
{ en: "Bottom-tier Character Tomozaki", jp: "弱キャラ友崎くん", romaji: "Jaku-Chara Tomozaki-kun  " },
{ en: "Horimiya", jp: "ホリミヤ", romaji: "Horimiya  " },
{ en: "Mushoku Tensei: Jobless Reincarnation", jp: "無職転生 ～異世界行ったら本気だす～", romaji: "Mushoku Tensei: Isekai Ittara Honki Dasu  " },
{ en: "Kemono Jihen", jp: "怪物事変", romaji: "Kemono Jihen  " },
{ en: "Wonder Egg Priority", jp: "ワンダーエッグ・プライオリティ", romaji: "Wonder Egg Priority  " },
{ en: "Moriarty the Patriot", jp: "憂国のモリアーティ", romaji: "Yuukoku no Moriarty  " },
{ en: "Ben-To", jp: "ベン・トー", romaji: "Ben-To  " },
{ en: "Air TV", jp: "AIR", romaji: "Air  " },
{ en: "Talentless Nana", jp: "無能なナナ", romaji: "Munou na Nana  " },
{ en: "Pui Pui Molcar", jp: "PUI PUI モルカー", romaji: "Pui Pui Molcar  " },
{ en: "So I'm a Spider, So What?", jp: "蜘蛛ですが、なにか？", romaji: "Kumo Desu ga, Nani ka?  " },
{ en: "Yowamushi Pedal", jp: "弱虫ペダル", romaji: "Yowamushi Pedal  " },
{ en: "Hinako Note", jp: "ひなこのーと", romaji: "Hinako Note  " },
{ en: "The Helpful Fox Senko-san", jp: "世話やきキツネの仙狐さん", romaji: "Sewayaki Kitsune no Senko-san  " },
{ en: "Urara Meirocho", jp: "うらら迷路帖", romaji: "Urara Meirochou  " },
{ en: "Amagi Brilliant Park", jp: "甘城ブリリアントパーク", romaji: "Amagi Brilliant Park  " },
{ en: "Okami-san and Her Seven Companions", jp: "オオカミさんと七人の仲間たち", romaji: "Ookami-san to Shichinin no Nakama-tachi  " },
{ en: "Ghost Hound", jp: "神霊狩", romaji: "Shinreigari: Ghost Hound  " },
{ en: "Student Council Staff Members", jp: "生徒会役員共", romaji: "Seitokai Yakuindomo  " },
{ en: "Wandering Son", jp: "放浪息子", romaji: "Hourou Musuko  " },
{ en: "Joshiraku", jp: "じょしらく", romaji: "Joshiraku  " },
{ en: "Edens Zero", jp: "EDENS ZERO", romaji: "Edens Zero  " },
{ en: "Tokyo Revengers", jp: "東京リベンジャーズ", romaji: "Tokyo Revengers  " },
{ en: "SSSS.Dynazenon", jp: "SSSS.DYNAZENON", romaji: "SSSS.Dynazenon  " },
{ en: "Shaman King", jp: "シャーマンキング", romaji: "Shaman King  " },
{ en: "Vivy: Fluorite Eye's Song", jp: "Vivy -Fluorite Eye’s Song-", romaji: "Vivy: Fluorite Eye's Song  " },
{ en: "Combatants Will Be Dispatched!", jp: "戦闘員、派遣します！", romaji: "Sentouin, Hakenshimasu!  " },
{ en: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway", jp: "ひげを剃る。そして女子高生を拾う。", romaji: "Hige wo Soru. Soshite Joshikousei wo Hirou.  " },
{ en: "Let's Make a Mug Too", jp: "やくならマグカップも", romaji: "Yakunara Mug Cup mo  " },
{ en: "Super Cub", jp: "スーパーカブ", romaji: "Super Cub  " },
{ en: "The Way of the Househusband", jp: "極主夫道", romaji: "Gokushufudou  " },
{ en: "Don't Toy with Me, Miss Nagatoro", jp: "イジらないで、長瀞さん", romaji: "Ijiranaide, Nagatoro-san  " },
{ en: "86", jp: "86-エイティシックス-", romaji: "86" },
{ en: "Shadows House", jp: "シャドーハウス", romaji: "Shadows House  " },
{ en: "To Your Eternity", jp: "不滅のあなたへ", romaji: "Fumetsu no Anata e  " },
{ en: "Black Lagoon", jp: "ブラック・ラグーン", romaji: "Black Lagoon  " },
{ en: "Oruchuban Ebichu", jp: "おるちゅばんエビちゅ", romaji: "Oruchuban Ebichu  " },
{ en: "Hellsing", jp: "ヘルシング", romaji: "Hellsing  " },
{ en: "Romeo x Juliet", jp: "ロミオ×ジュリエット", romaji: "Romeo x Juliet  " },
{ en: "Kanon", jp: "Kanon", romaji: "Kanon  " },
{ en: "Kill Me Baby", jp: "キルミーベイベー", romaji: "Kill Me Baby  " },
{ en: "Aria", jp: "ARIA", romaji: "Aria  " },
{ en: "Highschool of the Dead", jp: "学園黙示録 HIGHSCHOOL OF THE DEAD", romaji: "Highschool of the Dead  " },
{ en: "The Girl from the Other Side", jp: "とつくにの少女", romaji: "Totsukuni no Shoujo  " },
{ en: "Three Leaves, Three Colors", jp: "三者三葉", romaji: "Sansha Sanyou  " },
{ en: "Date A Live", jp: "デート・ア・ライブ", romaji: "Date A Live  " },
{ en: "Paradise Kiss", jp: "パラダイス・キス", romaji: "Paradise Kiss  " },
{ en: "Welcome to the Ballroom", jp: "ボールルームへようこそ", romaji: "Ballroom e Youkoso  " },
{ en: "Nyaruko: Crawling with Love!", jp: "這いよれ！ニャル子さん", romaji: "Haiyore! Nyaruko-san  " },
{ en: "Scum's Wish", jp: "クズの本懐", romaji: "Kuzu no Honkai  " },
{ en: "Haibane Renmei", jp: "灰羽連盟", romaji: "Haibane Renmei  " },
{ en: "D.Gray Man", jp: "D.Gray-man", romaji: "D.Gray-man  " },
{ en: "Cross Game", jp: "クロスゲーム", romaji: "Cross Game  " },
{ en: "Odd Taxi", jp: "オッドタクシー", romaji: "Odd Taxi  " },
{ en: "I've Been Killing Slimes for 300 Years and Maxed Out My Level", jp: "スライム倒して300年、知らないうちにレベルMAXになってました", romaji: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita  " },
{ en: "Nodame Cantabile", jp: "のだめカンタービレ", romaji: "Nodame Cantabile  " },
{ en: "Full Metal Panic!", jp: "フルメタル・パニック！", romaji: "Full Metal Panic!  " },
{ en: "Kaiji", jp: "カイジ", romaji: "Kaiji  " },
{ en: "Middle Manager Tonegawa", jp: "中間管理録トネガワ", romaji: "Chuukan Kanriroku Tonegawa  " },
{ en: "Hibike! Euphorium", jp: "響け！ユーフォニアム", romaji: "Hibike! Euphonium  " },
{ en: "Uma Musume", jp: "ウマ娘 プリティーダービー", romaji: "Uma Musume: Pretty Derby  " },
{ en: "Saki", jp: "咲-Saki-", romaji: "Saki  " },
{ en: "Tamayura", jp: "たまゆら", romaji: "Tamayura  " },
{ en: "Hajime no Ippo", jp: "はじめの一歩", romaji: "Hajime no Ippo  " },
{ en: "The Case Study of Vanitas", jp: "ヴァニタスの手記", romaji: "Vanitas no Carte  " },
{ en: "The Detective Is Already Dead", jp: "探偵はもう、死んでいる。", romaji: "Tantei wa Mou, Shindeiru.  " },
{ en: "The Aquatope on White Sand", jp: "白い砂のアクアトープ", romaji: "Shiroi Suna no Aquatope  " },
{ en: "The Duke of Death and His Maid", jp: "死神坊ちゃんと黒メイド", romaji: "Shinigami Bocchan to Kuro Maid  " },
{ en: "The Great Jahy Will Not Be Defeated!", jp: "ジャヒー様はくじけない！", romaji: "Jahy-sama wa Kujikenai!  " },
{ en: "Sonny Boy", jp: "ソニーボーイ", romaji: "Sonny Boy  " },
{ en: "Remake Our Life!", jp: "ぼくたちのリメイク", romaji: "Bokutachi no Remake  " },
{ en: "Maria†Holic", jp: "まりあ†ほりっく", romaji: "Maria†Holic  " },
{ en: "Battle Game in 5 Seconds", jp: "出会って5秒でバトル", romaji: "Deatte 5-byou de Battle  " },
{ en: "Life Lessons with Uramichi Oniisan", jp: "うらみちお兄さん", romaji: "Uramichi Oniisan  " },
{ en: "Special A", jp: "S・A〜スペシャル・エー〜", romaji: "Special A  " },
{ en: "Rokka: Braves of the Six Flowers", jp: "六花の勇者", romaji: "Rokka no Yuusha  " },
{ en: "Josee, the Tiger and the Fish", jp: "ジョゼと虎と魚たち", romaji: "Josee to Tora to Sakana-tachi  " },
{ en: "Hanamonogatari", jp: "花物語", romaji: "Hanamonogatari  " },
{ en: "Tsukimonogatari", jp: "憑物語", romaji: "Tsukimonogatari  " },
{ en: "Koyomimonogatari", jp: "暦物語", romaji: "Koyomimonogatari  " },
{ en: "Owarimonogatari", jp: "終物語", romaji: "Owarimonogatari  " },
{ en: "Beck: Mongolian Chop Squad", jp: "BECK", romaji: "Beck  " },
{ en: "Trigun", jp: "トライガン", romaji: "Trigun  " },
{ en: "Cromartie High School", jp: "魁!!クロマティ高校", romaji: "Sakigake!! Cromartie Koukou  " },
{ en: "Tawawa on Monday", jp: "月曜日のたわわ", romaji: "Getsuyoubi no Tawawa  " },
{ en: "Ganbare Douki Chan", jp: "がんばれ同期ちゃん", romaji: "Ganbare Douki-chan  " },
{ en: "Komi Can't Communicate", jp: "古見さんは、コミュ症です。", romaji: "Komi-san wa, Comyushou desu.  " },
{ en: "Blue Period", jp: "ブルーピリオド", romaji: "Blue Period  " },
{ en: "Our Love Has Always Been 10 Centimeters Apart", jp: "ずっと前から好きでした。～告白実行委員会～", romaji: "Itsudatte Bokura no Koi wa 10 cm Datta.  " },
{ en: "I've Always Liked You", jp: "好きになるその瞬間を。〜告白実行委員会〜", romaji: "Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai  " },
{ en: "The Moment You Fall in Love", jp: "ずっと前から好きでした。～告白実行委員会～", romaji: "Suki ni Naru Sono Shunkan wo.: Kokuhaku Jikkou Iinkai  " },
{ en: "Prince of Tennis", jp: "テニスの王子様", romaji: "Tennis no Oujisama  " },
{ en: "Mieruko Chan", jp: "見える子ちゃん", romaji: "Mieruko-chan  " },
{ en: "takt op.Destiny", jp: "takt op.Destiny", romaji: "Takt Op. Destiny  " },
{ en: "Cowboy Bebop", jp: "カウボーイビバップ", romaji: "Cowboy Bebop  " },
{ en: "Legend of the Galactic Heroes", jp: "銀河英雄伝説", romaji: "Ginga Eiyuu Densetsu  " },
{ en: "My Senpai Is Annoying", jp: "先輩がうざい後輩の話", romaji: "Senpai ga Uzai Kouhai no Hanashi  " },
{ en: "Kaginado", jp: "かぎなど", romaji: "Kaginado  " },
{ en: "You're Being Summoned, Azazel-san Z", jp: "よんでますよ、アザゼルさん。Z", romaji: "Yondemasu yo, Azazel-san. Z  " },
{ en: "Ranking of Kings", jp: "王様ランキング", romaji: "Ousama Ranking  " },
{ en: "My Neighbor Totoro", jp: "となりのトトロ", romaji: "Tonari no Totoro  " },
{ en: "Polar Bear Cafe", jp: "しろくまカフェ", romaji: "Shirokuma Cafe  " },
{ en: "Akagi", jp: "アカギ", romaji: "Akagi  " },
{ en: "Binbou Shimai Monogatari", jp: "貧乏姉妹物語", romaji: "Binbou Shimai Monogatari  " },
{ en: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat", jp: "世界最高の暗殺者、異世界貴族に転生する", romaji: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru  " },
{ en: "Kamichu!", jp: "かみちゅ！", romaji: "Kamichu!  " },
{ en: "Gourmet Girl Graffiti", jp: "幸腹グラフィティ", romaji: "Koufuku Graffiti  " },
{ en: "Nyanko Days", jp: "にゃんこデイズ", romaji: "Nyanko Days  " },
{ en: "Ojisan and Marshmallow", jp: "おじさんとマシュマロ", romaji: "Ojisan to Marshmallow  " },
{ en: "Kuruneko", jp: "くるねこ", romaji: "Kuruneko  " },
{ en: "Teekyu", jp: "てーきゅう", romaji: "Teekyuu  " },
{ en: "Sakugan", jp: "サクガン", romaji: "Sakugan  " },
{ en: "Platinum End", jp: "プラチナエンド", romaji: "Platinum End  " },
{ en: "Super Crooks", jp: "スーパークルックス", romaji: "Super Crooks  " },
{ en: "Baki", jp: "バキ", romaji: "Baki  " },
{ en: "Chitose Get You!!", jp: "ちとせげっちゅ!!", romaji: "Chitose Get You!!  " },
{ en: "Carnival Phantasm", jp: "カーニバル・ファンタズム", romaji: "Carnival Phantasm  " },
{ en: "Sleepy Princess in the Demon Castle", jp: "魔王城でおやすみ", romaji: "Maoujou de Oyasumi  " },
{ en: "Ascendance of a Bookworm", jp: "本好きの下剋上", romaji: "Honzuki no Gekokujou  " },
{ en: "World Trigger", jp: "ワールドトリガー", romaji: "World Trigger  " },
{ en: "Space Brothers", jp: "宇宙兄弟", romaji: "Uchuu Kyoudai  " },
{ en: "The Heroic Legend of Arslan", jp: "アルスラーン戦記", romaji: "Arslan Senki  " },
{ en: "Sky Blue Utility", jp: "空色ユーティリティ", romaji: "Sorairo Utility  " },
{ en: "Grimms Notes", jp: "グリムノーツ", romaji: "Grimms Notes The Animation  " },
{ en: "Slow Loop", jp: "スローループ", romaji: "Slow Loop  " },
{ en: "My Dress-Up Darling", jp: "その着せ替え人形は恋をする", romaji: "Sono Bisque Doll wa Koi wo Suru  " },
{ en: "Akebi's Sailor Uniform", jp: "明日ちゃんのセーラー服", romaji: "Akebi-chan no Sailor-fuku  " },
{ en: "Sabikui Bisco", jp: "錆喰いビスコ", romaji: "Sabikui Bisco  " },
{ en: "The Genius Prince's Guide to Raising a Nation Out of Debt", jp: "天才王子の赤字国家再生術", romaji: "Tensai Ouji no Akaji Kokka Saisei Jutsu  " },
{ en: "Encouragement of Climb", jp: "ヤマノススメ", romaji: "Yama no Susume  " },
{ en: "Irodorimidori", jp: "いろどりみどり", romaji: "Irodorimidori  " },
{ en: "Penguin Highway", jp: "ペンギン・ハイウェイ", romaji: "Penguin Highway  " },
{ en: "Words Bubble Up Like Soda Pop", jp: "サイダーのように言葉が湧き上がる", romaji: "Cider no You ni Kotoba ga Wakiagaru  " },
{ en: "Police in a Pod", jp: "ハコヅメ〜交番女子の逆襲〜", romaji: "Hakozume: Kouban Joshi no Gyakushuu  " },
{ en: "School Rumble", jp: "スクールランブル", romaji: "School Rumble  " },
{ en: "Muromi-san", jp: "波打際のむろみさん", romaji: "Namiuchigiwa no Muromi-san  " },
{ en: "We Were There", jp: "僕等がいた", romaji: "Bokura ga Ita  " },
{ en: "Little Witch Academia", jp: "リトルウィッチアカデミア", romaji: "Little Witch Academia  " },
{ en: "Yu Yu Hakusho", jp: "幽☆遊☆白書", romaji: "Yu☆Yu☆Hakusho  " },
{ en: "Girls und Panzer", jp: "ガールズ&パンツァー", romaji: "Girls und Panzer  " },
{ en: "Aharen-san wa Hakarenai", jp: "阿波連さんははかれない", romaji: "Aharen-san wa Hakarenai  " },
{ en: "Tomodachi Game", jp: "友達ゲーム", romaji: "Tomodachi Game  " },
{ en: "Ground Control to Psychoelectric Girl", jp: "電波女と青春男", romaji: "Denpa Onna to Seishun Otoko  " },
{ en: "Deaimon: Recipe for Happiness", jp: "であいもん", romaji: "Deaimon  " },
{ en: "RPG Real Estate", jp: "RPG不動産", romaji: "RPG Fudousan  " },
{ en: "Spy x Family", jp: "SPY×FAMILY", romaji: "Spy x Family  " },
{ en: "Miss Shachiku and the Little Baby Ghost", jp: "社畜さんは幼女幽霊に癒されたい。", romaji: "Shachiku-san wa Youjo Yuurei ni Iyasaretai  " },
{ en: "To Become a Real Heroine!", jp: "ヒロインたるもの！〜嫌われヒロインと内緒のお仕事〜", romaji: "Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto  " },
{ en: "Atasha Kawajiri Kodama Da Yo", jp: "あたしゃ川尻こだまだよ", romaji: "Atasha Kawajiri Kodama Da Yo: Dangerous Lifehacker no Tadareta Seikatsu  " },
{ en: "In the Heart of Kunoichi Tsubaki", jp: "くノ一ツバキの胸の内", romaji: "Kunoichi Tsubaki no Mune no Uchi  " },
{ en: "Shikimori's Not Just a Cutie", jp: "可愛いだけじゃない式守さん", romaji: "Kawaii dake ja Nai Shikimori-san  " },
{ en: "Takunomi", jp: "たくのみ。", romaji: "Takunomi.  " },
{ en: "By the Grace of the Gods", jp: "神達に拾われた男", romaji: "Kami-tachi ni Hirowareta Otoko  " },
{ en: "Ya Boy Kongming!", jp: "パリピ孔明", romaji: "Paripi Koumei  " },
{ en: "Elegant Yokai Apartment Life", jp: "妖怪アパートの幽雅な日常", romaji: "Youkai Apartment no Yuuga na Nichijou  " },
{ en: "Hanayamata", jp: "ハナヤマタ", romaji: "Hanayamata" },
{ en: "Karakuri Circus", jp: "からくりサーカス", romaji: "Karakuri Circus  " },
{ en: "Samurai Flamenco", jp: "サムライフラメンコ", romaji: "Samurai Flamenco  " },
{ en: "Chibi Devi!", jp: "ちび☆デビ！", romaji: "Chibi Devi!  " },
{ en: "Don't Hurt Me, My Healer!", jp: "このヒーラー、めんどくさい", romaji: "Kono Healer, Mendokusai  " },
{ en: "Bubble", jp: "バブル", romaji: "Bubble  " },
{ en: "Kotarou Lives Alone", jp: "コタローは1人暮らし", romaji: "Kotarou wa Hitorigurashi  " },
{ en: "Summer Time Rendering", jp: "サマータイムレンダ", romaji: "Summertime Render  " },
{ en: "Love After World Domination", jp: "恋は世界征服のあとで", romaji: "Koi wa Sekai Seifuku no Ato de  " },
{ en: "Space Patrol Luluco", jp: "宇宙パトロールルル子", romaji: "Uchuu Patrol Luluco  " },
{ en: "Free!", jp: "Free!", romaji: "Free!  " },
{ en: "Yakitate!! Japan", jp: "焼きたて!! ジャぱん", romaji: "Yakitate!! Japan  " },
{ en: "Sailor Moon", jp: "美少女戦士セーラームーン", romaji: "Bishoujo Senshi Sailor Moon  " },
{ en: "Onipan!", jp: "鬼パン!", romaji: "Onipan!  " },
{ en: "I’m Quitting Heroing", jp: "勇者、辞めます", romaji: "Yuusha, Yamemasu  " },
{ en: "Smile of the Arsnotoria", jp: "咲う アルスノトリア すんっ！", romaji: "Warau Arsnotoria Sun!  " },
{ en: "The Yakuza's Guide to Babysitting", jp: "組長娘と世話係", romaji: "Kumichou Musume to Sewagakari  " },
{ en: "When Will Ayumu Make His Move?", jp: "それでも歩は寄せてくる", romaji: "Soredemo Ayumu wa Yosetekuru  " },
{ en: "Parallel World Pharmacy", jp: "異世界薬局", romaji: "Isekai Yakkyoku  " },
{ en: "Teppen!!!!!!!!!!!!!!!", jp: "てっぺんっ!!!!!!!!!!!!!!!", romaji: "Teppen!!!!!!!!!!!!!!!  " },
{ en: "Musashino!", jp: "武蔵野!", romaji: "Musashino!  " },
{ en: "Uncle from Another World", jp: "異世界おじさん", romaji: "Isekai Ojisan  " },
{ en: "Lycoris Recoil", jp: "リコリス・リコイル", romaji: "Lycoris Recoil  " },
{ en: "Call of the Night", jp: "よふかしのうた", romaji: "Yofukashi no Uta  " },
{ en: "Love Live! Superstar!!", jp: "ラブライブ！スーパースター!!", romaji: "Love Live! Superstar!!  " },
{ en: "Magical Witch Punie-Chan", jp: "大魔法峠", romaji: "Dai Mahou Touge  " },
{ en: "The Maid I Hired Recently Is Mysterious", jp: "最近雇ったメイドが怪しい", romaji: "Saikin Yatotta Maid ga Ayashii  " },
{ en: "Gingitsune: Messenger Fox of the Gods", jp: "ぎんぎつね", romaji: "Gingitsune  " },
{ en: "GA: Geijutsuka Art Design Class", jp: "GA 芸術科アートデザインクラス", romaji: "GA: Geijutsuka Art Design Class  " },
{ en: "Hidamari Sketch", jp: "ひだまりスケッチ", romaji: "Hidamari Sketch  " },
{ en: "Claymore", jp: "クレイモア", romaji: "Claymore  " },
{ en: "Banished from the Hero's Party", jp: "真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました", romaji: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita  " },
{ en: "Hakumei and Mikochi", jp: "ハクメイとミコチ", romaji: "Hakumei to Mikochi  " },
{ en: "Aiura", jp: "あいうら", romaji: "Aiura  " },
{ en: "Strange+", jp: "ストレンジ・プラス", romaji: "Strange+  " },
{ en: "Prima Doll", jp: "プリマドール", romaji: "Prima Doll  " },
{ en: "Morita-san wa Mukuchi", jp: "森田さんは無口", romaji: "Morita-san wa Mukuchi  " },
{ en: "Haruchika: Haruta & Chika", jp: "ハルチカ〜ハルタとチカは青春する〜", romaji: "Haruchika: Haruta to Chika wa Seishun suru  " },
{ en: "Girlish Number", jp: "ガーリッシュナンバー", romaji: "Girlish Number  " },
{ en: "Poco’s Udon World", jp: "うどんの国の金色毛鞠", romaji: "Udon no Kuni no Kiniro Kemari  " },
{ en: "Gankutsuou: The Count of Monte Cristo", jp: "巌窟王", romaji: "Gankutsuou  " },
{ en: "Do It Yourself!!", jp: "Do It Yourself!! -どぅー・いっと・ゆあせるふ-", romaji: "Do It Yourself!!  " },
{ en: "The Little Lies We All Tell", jp: "4人はそれぞれウソをつく", romaji: "The Little Lies We All Tell  " },
{ en: "Beast Tamer", jp: "勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う", romaji: "Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau  " },
{ en: "Akiba Maid War", jp: "アキバ冥途戦争", romaji: "Akiba Maid Sensou  " },
{ en: "Chainsaw Man", jp: "チェンソーマン", romaji: "Chainsaw Man  " },
{ en: "Bocchi the Rock!", jp: "ぼっち・ざ・ろっく！", romaji: "Bocchi the Rock!  " },
{ en: "Magic of Stella", jp: "ステラのまほう", romaji: "Stella no Mahou  " },
{ en: "Dropout Idol Fruit Tart", jp: "落第アイドル果汁100％", romaji: "Ochikobore Fruit Tart  " },
{ en: "The Eminence in Shadow", jp: "陰の実力者になりたくて！", romaji: "Kage no Jitsuryokusha ni Naritakute!  " },
{ en: "Princess Principal", jp: "プリンセス・プリンシパル", romaji: "Princess Principal  " },
{ en: "Blue Lock", jp: "ブルーロック", romaji: "Blue Lock  " },
{ en: "Alice in Borderland", jp: "今際の国のアリス", romaji: "Imawa no Kuni no Alice  " },
{ en: "Urusei Yatsura", jp: "うる星やつら", romaji: "Urusei Yatsura  " },
{ en: "Gakuen Alice", jp: "学園アリス", romaji: "Gakuen Alice  " },
{ en: "Cyberpunk: Edgerunners", jp: "サイバーパンク エッジランナーズ", romaji: "Cyberpunk: Edgerunners  " },
{ en: "Tomo-chan Is a Girl!", jp: "トモちゃんは女の子！", romaji: "Tomo-chan wa Onnanoko!  " },
{ en: "Spy Classroom", jp: "スパイ教室", romaji: "Spy Kyoushitsu  " },
{ en: "NieR: Automata Ver1.1a", jp: "ニーア オートマタ", romaji: "NieR:Automata Ver1.1a  " },
{ en: "Planetes", jp: "プラネテス", romaji: "Planetes  " },
{ en: "The Vampire Dies in No Time", jp: "吸血鬼すぐ死ぬ", romaji: "Kyuuketsuki Sugu Shinu  " },
{ en: "Buddy Daddies", jp: "バディ・ダディーズ", romaji: "Buddy Daddies  " },
{ en: "The Fire Hunter", jp: "火狩りの王", romaji: "Hikari no Ou  " },
{ en: "The Ice Guy and His Cool Female Colleague", jp: "氷属性男子とクールな同僚女子", romaji: "Koori Zokusei Danshi to Cool na Douryou Joshi  " },
{ en: "Trigun Stampede", jp: "TRIGUN STAMPEDE", romaji: "Trigun Stampede  " },
{ en: "Sugar Apple Fairy Tale", jp: "シュガーアップル・フェアリーテイル", romaji: "Sugar Apple Fairy Tale  " },
{ en: "High Card", jp: "ハイカード", romaji: "High Card  " },
{ en: "22/7", jp: "22/7", romaji: "22/7  " },
{ en: "Ao Ashi", jp: "アオアシ", romaji: "Ao Ashi  " },
{ en: "My Clueless First Friend", jp: "事情を知らない転校生がグイグイくる。", romaji: "Jijou wo Shiranai Tenkousei ga Guigui Kuru  " },
{ en: "My Home Hero", jp: "マイホームヒーロー", romaji: "My Home Hero  " },
{ en: "Hell's Paradise", jp: "地獄楽", romaji: "Jigokuraku  " },
{ en: "The Dangers in My Heart", jp: "僕の心のヤバイやつ", romaji: "Boku no Kokoro no Yabai Yatsu  " },
{ en: "Ippon Again!", jp: "もういっぽん！", romaji: "Mou Ippon!  " },
{ en: "Tsurune", jp: "ツルネ", romaji: "Tsurune  " },
{ en: "Mashle: Magic and Muscles", jp: "マッシュル-MASHLE-", romaji: "Mashle: Magic and Muscles  " },
{ en: "Heavenly Delusion", jp: "天国大魔境", romaji: "Tengoku Daimakyou  " },
{ en: "Oshi no Ko", jp: "【推しの子】", romaji: "Oshi no Ko  " },
{ en: "Too Cute Crisis", jp: "かわいすぎクライシス", romaji: "Kawaisugi Crisis  " },
{ en: "A Galaxy Next Door", jp: "おとなりに銀河", romaji: "Otonari ni Ginga  " },
{ en: "Skip and Loafer", jp: "スキップとローファー", romaji: "Skip to Loafer  " },
{ en: "Yuri Is My Job!", jp: "私の百合はお仕事です！", romaji: "Watashi no Yuri wa Oshigoto Desu!  " },
{ en: "Birdie Wing: Golf Girls' Story", jp: "BIRDIE WING -Golf Girls' Story-", romaji: "Birdie Wing: Golf Girls' Story  " },
{ en: "Otaku Elf", jp: "江戸前エルフ", romaji: "Otaku Elf  " },
{ en: "Soredemo Machi wa Mawatteiru", jp: "それでも町は廻っている", romaji: "Soredemo Machi wa Mawatteiru  " },
{ en: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady", jp: "魔法少女マジカルデストロイヤーズ", romaji: "Tensei Oujo to Tensai Reijou no Mahou Kakumei  " },
{ en: "Ranma 1/2", jp: "らんま1/2", romaji: "Ranma ½  " },
{ en: "Kubo Won’t Let Me Be Invisible", jp: "久保さんは僕を許さない", romaji: "Kubo-san wa Mob wo Yurusanai  " },
{ en: "Magical Girl Magical Destroyers", jp: "魔法少女マジカルデストロイヤーズ", romaji: "Mahou Shoujo Magical Destroyers  " },
{ en: "Loving Yamada at Lv999", jp: "山田くんとLv999の恋をする", romaji: "Yamada-kun to Lv999 no Koi wo Suru  " },
{ en: "Inuyashiki", jp: "いぬやしき", romaji: "Inuyashiki  " },
{ en: "Steel Angel Kurumi", jp: "鋼鉄天使くるみ", romaji: "Steel Angel Kurumi  " },
{ en: "Ramen Fighter Miki", jp: "ラーメン大好き小泉さん", romaji: "Muteki Kanban Musume  " },
{ en: "D4DJ", jp: "D4DJ", romaji: "D4DJ: First Mix  " },
{ en: "The Girl I Like Forgot Her Glasses", jp: "好きな子がめがねを忘れた", romaji: "Suki na Ko ga Megane wo Wasureta  " },
{ en: "My Tiny Senpai", jp: "うちの会社の小さい先輩の話", romaji: "Uchi no Kaisha no Chiisai Senpai no Hanashi  " },
{ en: "Level 1 Demon Lord and One Room Hero", jp: "レベル1の魔王とワンルーム勇者", romaji: "Level 1 Demon Lord and One Room Hero  " },
{ en: "Liar Liar", jp: "LIAR・LIAR", romaji: "Liar Liar  " },
{ en: "Zom 100: Bucket List of the Dead", jp: "ZOM100〜ゾンビになるまでにしたい100のこと〜", romaji: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto  " },
{ en: "Ayaka: A Story of Bonds and Wounds", jp: "AYAKA -あやか-", romaji: "Ayaka  " },
{ en: "Dark Gathering", jp: "ダークギャザリング", romaji: "Dark Gathering" },
{ en: "BanG Dream!", jp: "BanG Dream!", romaji: "BanG Dream!  " },
{ en: "Helck", jp: "Helck", romaji: "Helck  " },
{ en: "Revenue Starlight", jp: "少女☆歌劇 レヴュースタァライト", romaji: "Shoujo☆Kageki Revue Starlight  " },
{ en: "Undead Murder Farce", jp: "アンデッドガール・マーダーファルス", romaji: "Undead Girl Murder Farce  " },
{ en: "My Happy Marriage", jp: "わたしの幸せな結婚", romaji: "Watashi no Shiawase na Kekkon  " },
{ en: "Sweet Reincarnation", jp: "スイート・リィンカーネーション", romaji: "Okashi na Tensei  " },
{ en: "Haitai Nanafa", jp: "はいたい七葉", romaji: "Haitai Nanafa  " },
{ en: "WorldEnd", jp: "終末なにしてますか？忙しいですか？救ってもらっていいですか？", romaji: "Shuumatsu Nani Shitemasuka? Isogashii Desuka? Sukutte Moratte Ii Desuka?  " },
{ en: "Ouran High School Host Club", jp: "桜蘭高校ホスト部", romaji: "Ouran Koukou Host Club  " },
{ en: "Suzume’s Door Locking", jp: "すずめの戸締まり", romaji: "Suzume no Tojimari  " },
{ en: "How a Realist Hero Rebuilt the Kingdom", jp: "現実主義勇者の王国再建記", romaji: "Genjitsu Shugi Yuusha no Oukoku Saikenki  " },
{ en: "Slayers", jp: "スレイヤーズ", romaji: "Slayers  " },
{ en: "The Great Cleric", jp: "聖者無双", romaji: "Seija Musou: Salaryman, Isekai de Ikiru Tame ni Ayumu Michi  " },
{ en: "The Most Heretical Last Boss Queen", jp: "最果てのパラディン", romaji: "Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.  " },
{ en: "Yohane the Parhelion", jp: "ヨハネザパーヘリオン -SUNSHINE in the MIRROR-", romaji: "Genjitsu no Yohane: Sunshine in the Mirror  " },
{ en: "Ojou to Banken-kun", jp: "お嬢と番犬くん", romaji: "Ojou to Banken-kun  " },
{ en: "Frieren: Beyond Journey’s End", jp: "フリーレン 〜旅の終わりの後に〜", romaji: "Sousou no Frieren  " },
{ en: "The Saint’s Magic Power is Omnipotent", jp: "聖女の魔力は万能です", romaji: "Seijo no Maryoku wa Bannou desu  " },
{ en: "Ron Kamonohashi’s Forbidden Deductions", jp: "鴨乃橋ロンの禁断推理", romaji: "Ron Kamonohashi: Deranged Detective  " },
{ en: "UNDER NINJA", jp: "アンダーニンジャ", romaji: "UNDER NINJA  " },
{ en: "Firefighter Daigo", jp: "め組の大吾", romaji: "Megumi no Daigo: Kyuukoku no Orange  " },
{ en: "The Yuzuki Family’s Four Sons", jp: "柚木家四兄弟", romaji: "Yuzuki-san Chi no Yonkyoudai.  " },
{ en: "My New Boss Is Goofy", jp: "新しい上司はど天然", romaji: "Atarashii Joushi wa Do Tennen  " },
{ en: "The Family Circumstances of the Irregular Witch", jp: "魔女の家計事情", romaji: "Majo no Ie no Chuujo  " },
{ en: "The Kingdoms of Ruin", jp: "破滅の国の愛", romaji: "Hametsu no Oukoku  " },
{ en: "Castlevania", jp: "キャッスルヴァニア", romaji: "Castlevania  " },
{ en: "The Apothecary Diaries", jp: "薬屋のひとりごと", romaji: "Kusuriya no Hitorigoto  " },
{ en: "I’m in Love with the Villainess", jp: "私の推しは悪役令嬢", romaji: "Watashi no Oshi wa Akuyaku Reijou  " },
{ en: "The Blue Orchestra", jp: "青のオーケストラ", romaji: "Ao no Orchestra  " },
{ en: "Pluto", jp: "プルートゥ", romaji: "Pluto  " },
{ en: "Tearmoon Empire", jp: "ティアムーン帝国物語", romaji: "Tearmoon Teikoku Monogatari  " },
{ en: "Undead Unlock", jp: "アンデッドアンラック", romaji: "Undead Unluck  " },
{ en: "Our Dating Story: The Experienced You and The Inexperienced Me", jp: "経験済みなキミと、経験ゼロなオレが、お付き合いする話", romaji: "Kimi to Boku no Saigo no Senjou, Arui wa Sekai ga Hajimaru Seisen  " },
{ en: "Stardust Telepath", jp: "スターダスト・テレパス", romaji: "Hoshikuzu Telepath  " },
{ en: "Dead Mount Death Play", jp: "デッドマウント・デスプレイ", romaji: "Dead Mount Death Play  " },
{ en: "Shangri-La Frontier", jp: "シャングリラ・フロンティア", romaji: "Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su  " },
{ en: "Kay’s Daily Doodles", jp: "けいどろ日記", romaji: "Kei's Daily Doodles  " },
{ en: "Delicious in Dungeon", jp: "ダンジョン飯", romaji: "Dungeon Meshi" },
{ en: "The Way of Pon", jp: "ぽんこつちゃん道をゆく", romaji: "Pon no Michi  " },
{ en: "Sasaki and Peeps", jp: "佐々木とピーちゃん", romaji: "Sasaki to Pii-chan  " },
{ en: "A Sign of Affection", jp: "ゆびさきと恋々", romaji: "Yubisaki to Renren  " },
{ en: "Fluffy Paradise", jp: "もふもふパラダイス", romaji: "Isekai de Mofumofu Nadenade Suru Tame ni Ganbattemasu.  " },
{ en: "Solo Leveling", jp: "ソロレベリング", romaji: "Solo Leveling" },
{ en: "7th Time Loop", jp: "七度目のループ", romaji: "7-kai Me no Loop: Tensei Sa Reta Shachiku wa Isekai de Kyuukyoku no Zettai Oukoku o Tsukuru" },
{ en: "The Unwanted Undead Adventurer", jp: "望まぬ不死の冒険者", romaji: "Nozomanu Fushi no Boukensha" },
{ en: "Mr. Villain’s Day Off", jp: "悪役令嬢は休暇中", romaji: "Kyuujitsu no Warumono-san" },
{ en: "Tis Time for \"Torture,\" Princess", jp: "姫様“拷問”の時間です", romaji: "Hime-sama \"Goumon\" no Jikan desu" },
{ en: "Belle", jp: "竜とそばかすの姫", romaji: "Belle" },
{ en: "Villainess Level 99", jp: "悪役令嬢レベル99", romaji: "Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen" },
{ en: "Sengoku Youko", jp: "戦国妖狐", romaji: "Sengoku Youko" },
{ en: "Doctor Elise: The Royal Lady with the Lamp", jp: "ドクター・エリーゼ", romaji: "Orenchi ni Kita Onna Kishi to Inakagurashi Suru Koto ni Natta Ken" },
{ en: "Ishura", jp: "異修羅", romaji: "Ishura" },
{ en: "The Weakest Tamer Began a Journey to Pick Up Trash", jp: "最弱テイマーはゴミ拾いの旅を始めました。", romaji: "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita" },
{ en: "Chiikawa", jp: "ちいかわ", romaji: "Chiikawa" },
{ en: "Yumeiro Patissiere", jp: "夢色パティシエール", romaji: "Yumeiro Patissiere" },
{ en: "Ninja Kamui", jp: "忍者神風", romaji: "Ninja Kamui" },
{ en: "Train to the End of the World", jp: "世界の果ての電車", romaji: "Sekai no Owari no Tame no Tabi" },
{ en: "Re:Monster", jp: "リ・モンスター", romaji: "Re:Monster" },
{ en: "Reincarnated Aristocrat, Appraisal Skill", jp: "転生貴族、鑑定スキルで成り上がる　～弱小領地を受け継いだので、優秀な人材を増やしていたら、最強領地になってた～", romaji: "Tensei Kizoku no Isekai Boukenroku" },
{ en: "Bartender Glass of God", jp: "バーテンダー 神のグラス", romaji: "Bartender: Kami no Glass" },
{ en: "Level 2 Super Cheat Powers", jp: "レベル2のスーパー・チート能力", romaji: "Level 2 no Chikara o Eien no Chikara to Suru tame ni Kurenai o Motomeru Mono-tachi" },
{ en: "The Fable", jp: "ザ・ファブル", romaji: "The Fable" },
{ en: "Jellyfish Can’t Swim in the Night", jp: "クラゲは夜泳げない", romaji: "Kurage wa Yoru, Oyogenai" },
{ en: "Tonari no Yokai-san", jp: "となりの妖怪さん", romaji: "Tonari no Youkai-san" },
{ en: "GO! GO! Loser Ranger!", jp: "ゴーゴー・レンジャー", romaji: "Sentai Daishikkaku" },
{ en: "An Archdemon’s Dilemma: How to Love Your Elf Bride", jp: "大魔王様の家庭事情", romaji: "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?" },
{ en: "WIND BREAKER", jp: "ウィンドブレイカー", romaji: "WIND BREAKER" },
{ en: "Sand Land: The Series", jp: "サンドランド", romaji: "Sand Land" },
{ en: "Boukyaku Battery", jp: "忘却バッテリー", romaji: "Boukyaku Battery" },
{ en: "Kaii to Otome to Kamikakushi", jp: "怪異と乙女と神隠し", romaji: "Kaii to Otome to Kamikakushi" },
{ en: "Astro Note", jp: "アストロノート", romaji: "Astro Note" },
{ en: "The Grimm Variations", jp: "グリムバリエーションズ", romaji: "Grimm Variations" },
{ en: "Ragna Crimson", jp: "ラグナクリムゾン", romaji: "Ragna Crimson" },
{ en: "The Ossan Newbie Adventurer", jp: "おっさん冒険者の新人", romaji: "Ossan Boukensha Kane no Zenkou" },
{ en: "Alya Sometimes Hides Her Feelings in Russian", jp: "アリヤはロシアで隠れたがる", romaji: "Roshidere" },
{ en: "I Parry Everything: What Do You Mean I'm the Strongest?", jp: "俺、全部パリるから", romaji: "I Parry Everything: What Do You Mean I'm the Strongest? I'm Not Even an Adventurer Yet!" },
{ en: "Failure Frame", jp: "失格紋の最強賢者", romaji: "Hazure Waku no \"Joutai Ijou Skill\" de Saikyou ni Natta Ore ga Subete wo Juurin suru made" },
{ en: "Quality Assurance in Another World", jp: "異世界品質保証", romaji: "Kono Sekai ga Game da to, Ore dake ga Shitte Iru" },
{ en: "My Deer Friend Nokotan", jp: "ノコタン", romaji: "Shikanoko Nokonoko Koshitantan" },
{ en: "Dungeon People", jp: "ダンジョンピープル", romaji: "Danjon no Naka no Hito" },
{ en: "Sakuna: Of Rice and Ruin", jp: "天穂のサクナヒメ", romaji: "Sakuna: Of Rice and Ruin" },
{ en: "SHOSHIMIN", jp: "しょしみん", romaji: "Shoshimin" },
{ en: "The Elusive Samurai", jp: "逃げ上手の若君", romaji: "Nige Jouzu no Wakagimi" },
{ en: "Dahlia in Bloom", jp: "ダリア・イン・ブルーム", romaji: "Madōgushi Dariya wa Utsumukanai: Kyō kara Jiyū na Shokunin Raifu" },
{ en: "TASUKETSU", jp: "たすけつ", romaji: "Kimi ga Shine -Tasūketsu Death Game-" },
{ en: "A Journey Through Another World: Raising Kids While Adventuring", jp: "異世界ゆるり紀行", romaji: "Isekai Yururi Kikō: Kosodate Shinagara Bōkensha Shimasu" },
{ en: "ATRI: My Dear Moments", jp: "ATRI -My Dear Moments-", romaji: "ATRI: My Dear Moments" },
{ en: "Makeine: Too Many Losing Heroines!", jp: "負けヒロインが多すぎる！", romaji: "Make Heroine ga Oosugiru!" },
{ en: "MAYONAKA PUNCH", jp: "深夜パンチ", romaji: "Mayonaka Punch" },
{ en: "Bye Bye, Earth", jp: "ばいばい、アース", romaji: "Bai Bai, Asu" },
{ en: "Head Start at Birth", jp: "0歳児スタートダッシュ物語", romaji: "0-Saiji Sutāto Dasshu Monogatari" }

    ];

    const queueAnimeList = [
        { en: "Red Cat Ramen", jp: "赤い猫のラーメン", romaji: "Ramen Aka Neko"}
    ];

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
    langENButton.addEventListener('click', () => switchLanguage('EN'));
    langJPButton.addEventListener('click', () => switchLanguage('JP'));
	langROMButton.addEventListener('click', () => switchLanguage('ROM'));

    function switchList(list) {
        if (list === 'watched') {
            currentList = watchedAnimeList;
            watchedButton.classList.add('active');
            queueButton.classList.remove('active');
            titleElement.textContent = 'Watched Animes';
            counter.textContent = `Total Watched Anime: ${currentList.length}`;
        } else if (list === 'queue') {
            currentList = queueAnimeList;
            queueButton.classList.add('active');
            watchedButton.classList.remove('active');
            titleElement.textContent = 'Watchlist';
            counter.textContent = `Total Queued Anime: ${currentList.length}`;
        }
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
        updateCounter(list.length);
    }

    function filterAnimeList() {
        const searchText = searchBar.value.toLowerCase();
        const filteredList = currentList.filter(anime => 
            anime.en.toLowerCase().includes(searchText) || 
            anime.jp.toLowerCase().includes(searchText) || 
            anime.romaji.toLowerCase().includes(searchText)
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

    function updateCounter(count) {
        if (currentList === watchedAnimeList) {
            counter.textContent = `Total Watched Anime: ${count}`;
        } else {
            counter.textContent = `Total Queued Anime: ${count}`;
        }
    }

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
