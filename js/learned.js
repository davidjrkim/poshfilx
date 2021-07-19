const player = document.getElementById("player");
let contentEM;

// abc counter
const counter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z", "AA", "AB", "AC"];
// abc counter end

// start movie name

/* old movie arr
const TWDs10 = {
    title: "워킹데드 시즌10",
    title_folder: "the-walking-dead",
    season_folder: "TWDs10",
    episode_name: "twd-e",
    episode_format: "화",
    to_document: document.getElementById("twds10"),
    id: "B",
    episode_number: 16,
    video_type: "mp4",
    video_format: "mkv",
    subtitle: true,
    subtitle_format: "vtt",
};

const harrypotter = {
    title: "해리포터",
    title_folder: "harry-potter",
    season_folder: "harry-potter",
    episode_name: "harry-potter-",
    episode_format: "편",
    to_document: document.querySelector("#hpmovie"),
    id: "D",
    episode_number: 8,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
};

const disenchantment = {
    title: "디스인챈트 시즌1 파트1 (",
    title_folder: "disenchantment",
    season_folder: "disenchantment-s1-p1",
    episode_name: "disenchantment-e",
    episode_format: "편 )",
    to_document: document.getElementById("disenchantment-s1-p1"),
    id: "E",
    episode_number: 10,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
};

const disenchantment_p2 = {
    title: "디스인챈트 시즌1 파트2 (",
    title_folder: "disenchantment",
    season_folder: "disenchantment-s1-p2",
    episode_name: "disenchantment-p2-e",
    episode_format: "편 )",
    to_document: document.getElementById("disenchantment-s1-p2"),
    id: "F",
    episode_number: 10,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
};

const goblin = {
    title: "도깨비",
    title_folder: "goblin",
    season_folder: "goblin",
    episode_name: "goblin-e",
    episode_format: "화",
    to_document: document.getElementById("goblin"),
    id: "G",
    episode_number: 16,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "null",
};

const goblinSP = {
    title: "도깨비 스페셜",
    title_folder: "goblin",
    season_folder: "goblin-special",
    episode_name: "goblin-special",
    episode_format: "화",
    to_document: document.getElementById("goblin-sp"),
    id: "H",
    episode_number: 3,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "null",
};

const violet = {
    title: "바이올렛 에버가든",
    title_folder: "violet-evergarden",
    season_folder: "violet-evergarden",
    episode_name: "violet-evergarden-e",
    episode_format: "화",
    to_document: document.getElementById("violet"),
    id: "I",
    episode_number: 14,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
};

const goddess = {
    title: "여신강림",
    title_folder: "goddess",
    season_folder: "goddess-s1",
    episode_name: "goddess-e",
    episode_format: "화",
    to_document: document.getElementById("goddess"),
    id: "J",
    episode_number: 16,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "vtt",
};

const penthouse = {
    title: "펜트하우스",
    title_folder: "penthouse",
    season_folder: "penthouse-s1",
    episode_name: "penthouse-e",
    episode_format: "화",
    to_document: document.getElementById("penthouse"),
    id: "K",
    episode_number: 21,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "vtt",
};

const rumors = {
    title: "경의로운 소문",
    title_folder: "rumors",
    season_folder: "rumors-s1",
    episode_name: "rumors-e",
    episode_format: "화",
    to_document: document.getElementById("rumors"),
    id: "L",
    episode_number: 16,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "vtt",
};

const disenchantment_p3 = {
    title: "디스인챈트 시즌2 파트3 (",
    title_folder: "disenchantment",
    season_folder: "disenchantment-s2-p3",
    episode_name: "disenchantment-e",
    episode_format: "편 )",
    to_document: document.getElementById("disenchantment-s2-p3"),
    id: "M",
    episode_number: 10,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
    video_id: "disvid3",
};

const sky = {
    title: "스카이 캐슬",
    title_folder: "sky",
    season_folder: "sky-s1",
    episode_name: "sky-e",
    episode_format: "화",
    to_document: document.getElementById("sky"),
    id: "N",
    episode_number: 20,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "vtt",
};

const narnia = {
    title: "나니아 연대기",
    title_folder: "narnia",
    season_folder: "Narnia",
    episode_name: "Narnia",
    episode_format: "편",
    to_document: document.getElementById("narnia"),
    id: "O",
    episode_number: 3,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const sherlock = {
    title: "셜록",
    title_folder: "sherlock",
    season_folder: "sherlock-s1",
    episode_name: "sherlock-s1-e",
    episode_format: "편",
    to_document: document.getElementById("sherlock"),
    id: "P",
    episode_number: 3,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const sherlock2 = {
    title: "셜록 시즌2",
    title_folder: "sherlock",
    season_folder: "sherlock-s2",
    episode_name: "sherlock-s2-e",
    episode_format: "편",
    to_document: document.getElementById("sherlock2"),
    id: "Q",
    episode_number: 3,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const sherlock3 = {
    title: "셜록 시즌3",
    title_folder: "sherlock",
    season_folder: "sherlock-s3",
    episode_name: "sherlock-s3-e",
    episode_format: "편",
    to_document: document.getElementById("sherlock3"),
    id: "R",
    episode_number: 3,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const sherlock4 = {
    title: "셜록 시즌4",
    title_folder: "sherlock",
    season_folder: "sherlock-s4",
    episode_name: "sherlock-s4-e",
    episode_format: "편",
    to_document: document.getElementById("sherlock4"),
    id: "S",
    episode_number: 3,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const titan = {
    title: "진격의 거인1기",
    title_folder: "titan",
    season_folder: "titan-s1",
    episode_name: "titan-s1-e",
    episode_format: "화",
    to_document: document.getElementById("titan"),
    id: "T",
    episode_number: 25,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const titan2 = {
    title: "진격의 거인2기",
    title_folder: "titan",
    season_folder: "titan-s2",
    episode_name: "titan-s2-e",
    episode_format: "화",
    to_document: document.getElementById("titan2"),
    id: "U",
    episode_number: 12,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const titan3 = {
    title: "진격의 거인3기",
    title_folder: "titan",
    season_folder: "titan-s3",
    episode_name: "titan-s3-e",
    episode_format: "화",
    to_document: document.getElementById("titan3"),
    id: "V",
    episode_number: 10,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const titan4 = {
    title: "진격의 거인4기",
    title_folder: "titan",
    season_folder: "titan-s4",
    episode_name: "titan-s4-e",
    episode_format: "화",
    to_document: document.getElementById("titan4"),
    id: "W",
    episode_number: 10,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const mando_s1 = {
    title: "만달로리안 시즌1",
    title_folder: "mando",
    season_folder: "mando-s1",
    episode_name: "mando-s1-e",
    episode_format: "화",
    to_document: document.getElementById("mando-s1"),
    id: "X",
    episode_number: 8,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
};

const mando_s2 = {
    title: "만달로리안 시즌2",
    title_folder: "mando",
    season_folder: "mando-s2",
    episode_name: "mando-s2-e",
    episode_format: "화",
    to_document: document.getElementById("mando-s2"),
    id: "Y",
    episode_number: 8,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: false,
};

const john_wick = {
    title: "존윅",
    title_folder: "john-wick",
    season_folder: "john-wick",
    episode_name: "john-wick",
    episode_format: " ",
    to_document: document.getElementById("john"),
    id: "Z",
    episode_number: 4,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const myhero = {
    title: "나의 히어로 아카데미아",
    title_folder: "myhero",
    season_folder: "myhero-s1",
    episode_name: "myhero-s1-e",
    episode_format: "화",
    to_document: document.getElementById("myhero"),
    id: "AA",
    episode_number: 13,
    video_type: "mp4",
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    coming_soon: true,
};

const kingdom1 = {
    title: "킹덤",
    title_folder: "kingdom",
    season_folder: "kingdom-s1",
    episode_name: "kingdom-e",
    episode_format: "화",
    to_document: document.getElementById("kingdom1"),
    id: "A",
    episode_number: 6,
    video_type: "mp4",
    video_format: "mp4",
    subtitle: false,
    subtitle_format: "vtt",
    coming_soon: false,
}; */
const movie_list = [

    {   
        title: "워킹데드 시즌10",
        title_folder: "the-walking-dead",
        season_folder: "TWDs10",
        episode_name: "twd-e",
        episode_format: "화",
        to_document: document.getElementById("twds10"),
        id: "B",
        episode_number: 16,
        video_type: "mp4",
        video_format: "mkv",
        subtitle: true,
        subtitle_format: "vtt",
    },
    {
        title: "해리포터",
        title_folder: "harry-potter",
        season_folder: "harry-potter",
        episode_name: "harry-potter-",
        episode_format: "편",
        to_document: document.querySelector("#hpmovie"),
        id: "D",
        episode_number: 8,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
    },
    {
        title: "디스인챈트 시즌1 파트1 (",
        title_folder: "disenchantment",
        season_folder: "disenchantment-s1-p1",
        episode_name: "disenchantment-e",
        episode_format: "편 )",
        to_document: document.getElementById("disenchantment-s1-p1"),
        id: "E",
        episode_number: 10,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
    },
    {
        title: "디스인챈트 시즌1 파트2 (",
        title_folder: "disenchantment",
        season_folder: "disenchantment-s1-p2",
        episode_name: "disenchantment-p2-e",
        episode_format: "편 )",
        to_document: document.getElementById("disenchantment-s1-p2"),
        id: "F",
        episode_number: 10,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
    },
    {
        title: "도깨비",
        title_folder: "goblin",
        season_folder: "goblin",
        episode_name: "goblin-e",
        episode_format: "화",
        to_document: document.getElementById("goblin"),
        id: "G",
        episode_number: 16,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "null",
    },
    {
        title: "도깨비 스페셜",
        title_folder: "goblin",
        season_folder: "goblin-special",
        episode_name: "goblin-special",
        episode_format: "화",
        to_document: document.getElementById("goblin-sp"),
        id: "H",
        episode_number: 3,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "null",
    },
    {
        title: "바이올렛 에버가든",
        title_folder: "violet-evergarden",
        season_folder: "violet-evergarden",
        episode_name: "violet-evergarden-e",
        episode_format: "화",
        to_document: document.getElementById("violet"),
        id: "I",
        episode_number: 14,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
    },
    {
        title: "여신강림",
        title_folder: "goddess",
        season_folder: "goddess-s1",
        episode_name: "goddess-e",
        episode_format: "화",
        to_document: document.getElementById("goddess"),
        id: "J",
        episode_number: 16,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "vtt",
    },
    {
        title: "펜트하우스",
        title_folder: "penthouse",
        season_folder: "penthouse-s1",
        episode_name: "penthouse-e",
        episode_format: "화",
        to_document: document.getElementById("penthouse"),
        id: "K",
        episode_number: 21,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "vtt",
    },
    {
        title: "경의로운 소문",
        title_folder: "rumors",
        season_folder: "rumors-s1",
        episode_name: "rumors-e",
        episode_format: "화",
        to_document: document.getElementById("rumors"),
        id: "L",
        episode_number: 16,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "vtt",
    },
    {
        title: "디스인챈트 시즌2 파트3 (",
        title_folder: "disenchantment",
        season_folder: "disenchantment-s2-p3",
        episode_name: "disenchantment-e",
        episode_format: "편 )",
        to_document: document.getElementById("disenchantment-s2-p3"),
        id: "M",
        episode_number: 10,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        video_id: "disvid3",
    },
    {
        title: "스카이 캐슬",
        title_folder: "sky",
        season_folder: "sky-s1",
        episode_name: "sky-e",
        episode_format: "화",
        to_document: document.getElementById("sky"),
        id: "N",
        episode_number: 20,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "vtt",
    },
    {
        title: "나니아 연대기",
        title_folder: "narnia",
        season_folder: "Narnia",
        episode_name: "Narnia",
        episode_format: "편",
        to_document: document.getElementById("narnia"),
        id: "O",
        episode_number: 3,
        video_type: "mp4",
        video_format: "m4v",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "셜록",
        title_folder: "sherlock",
        season_folder: "sherlock-s1",
        episode_name: "sherlock-s1-e",
        episode_format: "편",
        to_document: document.getElementById("sherlock"),
        id: "P",
        episode_number: 3,
        video_type: "mp4",
        video_format: "m4v",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "셜록 시즌2",
        title_folder: "sherlock",
        season_folder: "sherlock-s2",
        episode_name: "sherlock-s2-e",
        episode_format: "편",
        to_document: document.getElementById("sherlock2"),
        id: "Q",
        episode_number: 3,
        video_type: "mp4",
        video_format: "m4v",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "셜록 시즌3",
        title_folder: "sherlock",
        season_folder: "sherlock-s3",
        episode_name: "sherlock-s3-e",
        episode_format: "편",
        to_document: document.getElementById("sherlock3"),
        id: "R",
        episode_number: 3,
        video_type: "mp4",
        video_format: "m4v",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "셜록 시즌4",
        title_folder: "sherlock",
        season_folder: "sherlock-s4",
        episode_name: "sherlock-s4-e",
        episode_format: "편",
        to_document: document.getElementById("sherlock4"),
        id: "S",
        episode_number: 3,
        video_type: "mp4",
        video_format: "m4v",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "진격의 거인1기",
        title_folder: "titan",
        season_folder: "titan-s1",
        episode_name: "titan-s1-e",
        episode_format: "화",
        to_document: document.getElementById("titan"),
        id: "T",
        episode_number: 25,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "진격의 거인2기",
        title_folder: "titan",
        season_folder: "titan-s2",
        episode_name: "titan-s2-e",
        episode_format: "화",
        to_document: document.getElementById("titan2"),
        id: "U",
        episode_number: 12,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "진격의 거인3기",
        title_folder: "titan",
        season_folder: "titan-s3",
        episode_name: "titan-s3-e",
        episode_format: "화",
        to_document: document.getElementById("titan3"),
        id: "V",
        episode_number: 10,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "진격의 거인4기",
        title_folder: "titan",
        season_folder: "titan-s4",
        episode_name: "titan-s4-e",
        episode_format: "화",
        to_document: document.getElementById("titan4"),
        id: "W",
        episode_number: 10,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "만달로리안 시즌1",
        title_folder: "mando",
        season_folder: "mando-s1",
        episode_name: "mando-s1-e",
        episode_format: "화",
        to_document: document.getElementById("mando-s1"),
        id: "X",
        episode_number: 8,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
    },
    {
        title: "만달로리안 시즌2",
        title_folder: "mando",
        season_folder: "mando-s2",
        episode_name: "mando-s2-e",
        episode_format: "화",
        to_document: document.getElementById("mando-s2"),
        id: "Y",
        episode_number: 8,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: false,
    },
    {
        title: "존윅",
        title_folder: "john-wick",
        season_folder: "john-wick",
        episode_name: "john-wick",
        episode_format: " ",
        to_document: document.getElementById("john"),
        id: "Z",
        episode_number: 4,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: false,
    },
    {
        title: "나의 히어로 아카데미아",
        title_folder: "myhero",
        season_folder: "myhero-s1",
        episode_name: "myhero-s1-e",
        episode_format: "화",
        to_document: document.getElementById("myhero"),
        id: "AA",
        episode_number: 13,
        video_type: "mp4",
        video_format: "m4v",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: true,
    },
    {
        title: "킹덤",
        title_folder: "kingdom",
        season_folder: "kingdom-s1",
        episode_name: "kingdom-e",
        episode_format: "화",
        to_document: document.getElementById("kingdom1"),
        id: "A",
        episode_number: 6,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: false,
        subtitle_format: "vtt",
        coming_soon: false,
    },

    {
        title: "주술회전(Jujutsu Kaisen)",
        title_folder: "jujutsu-kaisen",
        season_folder: "jujutsu-kaisen-s1",
        episode_name: "jujutsu-kaisen-e",
        episode_format: "화",
        to_document: document.getElementById("jujutsu-kaisen"),
        id: "AC",
        episode_number: 25,
        video_type: "mp4",
        video_format: "mp4",
        subtitle: true,
        subtitle_format: "vtt",
        coming_soon: false,
    },

];
// end movie name

// basic movie iteration loop
for (let j = 0; j < movie_list.length; j++) {

    if (movie_list[j]["coming_soon"]) {
        var node2 = document.createElement("LI");
        node2.innerHTML = `<p>${movie_list[j]["title"]} Coming Soon</p>`;
        movie_list[j]["to_document"].appendChild(node2);
    } else {

    for (let i = 0; i < movie_list[j]["episode_number"]; i++) {
        var node = document.createElement("LI");

        if (movie_list[j]["subtitle"]) {
            node.innerHTML = `
        <div class="sub-item">
            <input type="checkbox" id="${movie_list[j]["id"]}-${counter[i]}" />
            <img src="https://storage.googleapis.com/poshfilx.me/images/Arrow.png" class="arrow" /><label for="${movie_list[j]["id"]}-${counter[i]}">${movie_list[j]["title"]} ${i + 1}${movie_list[j]["episode_format"]}</label>

            <ul loading="lazy" >
                <p>${movie_list[j]["title"]} ${i + 1}${movie_list[j]["episode_format"]}</p>
                <video class="video1" controls="controls" id="${movie_list[j]["video-id"]}" poster="https://storage.googleapis.com/poshfilx.me/images/poster/${movie_list[j]["title_folder"]}-poster.jpg" width="80%" preload="none">
                <source loading="lazy" src="https://storage.googleapis.com/poshfilx.me/movies/${movie_list[j]["title_folder"]}/${movie_list[j]["season_folder"]}/${movie_list[j]["episode_name"]}${i + 1}/${movie_list[j]["episode_name"]}${i + 1}.${movie_list[j]["video_format"]}" type="video/${movie_list[j]["video_type"]}" />
                <track src="https://storage.googleapis.com/poshfilx.me/movies/${movie_list[j]["title_folder"]}/${movie_list[j]["season_folder"]}/${movie_list[j]["episode_name"]}${i + 1}/${movie_list[j]["episode_name"]}${i + 1}.${movie_list[j]["subtitle_format"]}" srclang="ko" label="Korean" default="" />
                </video>
            </ul>
        </div>
    `;
        } else {
            node.innerHTML = `
            <div class="sub-item">
                <input type="checkbox" id="${movie_list[j]["id"]}-${counter[i]}" />
                <img src="https://storage.googleapis.com/poshfilx.me/images/Arrow.png" class="arrow" /><label for="${movie_list[j]["id"]}-${counter[i]}">${movie_list[j]["title"]} ${i + 1}${movie_list[j]["episode_format"]}</label>
    
                <ul loading="lazy" >
                    <p>${movie_list[j]["title"]} ${i + 1}${movie_list[j]["episode_format"]}</p>
                    <video class="video1" controls="controls" poster="https://storage.googleapis.com/poshfilx.me/images/poster/${movie_list[j]["title_folder"]}-poster.jpg" id="${movie_list[j]["video-id"]}" width="80%" preload="none">
                    <source src="https://storage.googleapis.com/poshfilx.me/movies/${movie_list[j]["title_folder"]}/${movie_list[j]["season_folder"]}/${movie_list[j]["episode_name"]}${i + 1}/${movie_list[j]["episode_name"]}${i + 1}.${movie_list[j]["video_format"]}" type="video/${movie_list[j]["video_type"]}" />
                    </video>
                </ul>
            </div>
        `;
        }
        
        movie_list[j]["to_document"].appendChild(node);
    }

}

}

/* old movie func
videoInsert(TWDs10);
videoInsert(harrypotter);
videoInsert(disenchantment);
videoInsert(disenchantment_p2);
videoInsert(goblin);
videoInsert(goblinSP);
videoInsert(violet);
videoInsert(goddess);
videoInsert(penthouse);
videoInsert(rumors);
videoInsert(disenchantment_p3);
videoInsert(sky);
videoInsert(narnia);
videoInsert(sherlock);
videoInsert(sherlock2);
videoInsert(sherlock3);
videoInsert(titan);
videoInsert(titan2);
videoInsert(titan3);
videoInsert(titan4);
videoInsert(mando_s1);
videoInsert(mando_s2);
videoInsert(john_wick);
videoInsert(myhero);
videoInsert(kingdom1); */
