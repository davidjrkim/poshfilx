const player = document.getElementById("player");
let contentEM;

// abc counter

const counter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z"];

// abc counter end

// movie name start

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
    episode_number: 12,
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
    video_format: "m4v",
    subtitle: true,
    subtitle_format: "vtt",
    video_id: "disvid3",
};

// movie name end

function videoInsert(ob) {
    for (let i = 0; i < ob["episode_number"]; i++) {
        var node = document.createElement("LI");
        if (ob["subtitle"]) {
            node.innerHTML = `
        <div class="sub-item">
            <input type="checkbox" id="${ob["id"]}-${counter[i]}" />
            <img src="images/Arrow.png" class="arrow" /><label for="${ob["id"]}-${counter[i]}">${ob["title"]} ${i + 1}${ob["episode_format"]}</label>

            <ul loading="lazy" >
                <p>${ob["title"]} ${i + 1}${ob["episode_format"]}</p>
                <video class="video1" controls="controls" id="${ob["video-id"]}" width="80%" preload="none">
                <source loading="lazy" src="movies/${ob["title_folder"]}/${ob["season_folder"]}/${ob["episode_name"]}${i + 1}/${ob["episode_name"]}${i + 1}.${ob["video_format"]}" type="video/${ob["video_type"]}" />
                <track src="movies/${ob["title_folder"]}/${ob["season_folder"]}/${ob["episode_name"]}${i + 1}/${ob["episode_name"]}${i + 1}.${ob["subtitle_format"]}" srclang="ko" label="Korean" />
                </video>
            </ul>
        </div>
    `;
        } else {
            node.innerHTML = `
            <div class="sub-item">
                <input type="checkbox" id="${ob["id"]}-${counter[i]}" />
                <img src="images/Arrow.png" class="arrow" /><label for="${ob["id"]}-${counter[i]}">${ob["title"]} ${i + 1}${ob["episode_format"]}</label>
    
                <ul loading="lazy" >
                    <p>${ob["title"]} ${i + 1}${ob["episode_format"]}</p>
                    <video class="video1" controls="controls" id="${ob["video-id"]}" width="80%" preload="none">
                    <source src="movies/${ob["title_folder"]}/${ob["season_folder"]}/${ob["episode_name"]}${i + 1}/${ob["episode_name"]}${i + 1}.${ob["video_format"]}" type="video/${ob["video_type"]}" />
                    </video>
                </ul>
            </div>
        `;
        }
        ob["to_document"].appendChild(node);
    }
}

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
