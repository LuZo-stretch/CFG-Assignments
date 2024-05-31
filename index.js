console.log("HELLO")
const action = ["Attack on Titan", "Berserk", "Bleach", "Blood+","Dragon Ball", "Fullmetal Alchemist", "Neon Genesis Evangelion", "Demon Hunter"];
const comedy = ["Ranma 1/2", "Golden Boy", "Sailor Moon"]
const romance = ["Nana", "Kare Kano", "Marmalade boy", "Sailor Moon"]
const scify = ["Ghost in the shell", "Neon Genesis Evangelion", "Cowboy Bebop"]
const fantasy = ["Death Note", "Ranma 1/2", "Lain", "One Piece"]

function showAnime() {
    let actionBox = document.getElementById("action");
    if (actionBox.checked) {
        const index = document.getElementById("number").value;
        console.log(action[index-1]);
        return action[index - 1];
    } else {
        console.log("I remain unchecked");
    }
}

// const animeSelection = document.getElementById('animeSelection').textContent;
// let result = "";

// for (let i = 0; i <= 1; i++) {
//     result += animeSelection + " ";
// }

// document.getElementById('animeSelection').textContent = result;


