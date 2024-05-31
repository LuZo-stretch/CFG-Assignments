console.log("HELLO")
const action = ["Attack on Titan", "Berserk", "Bleach", "Blood+","Dragon Ball", "Fullmetal Alchemist", "Neon Genesis Evangelion", "Demon Hunter"];
const comedy = ["Ranma 1/2", "Golden Boy", "Sailor Moon"]
const romance = ["Nana", "Kare Kano", "Marmalade boy", "Sailor Moon"]
const scify = ["Ghost in the shell", "Neon Genesis Evangelion", "Cowboy Bebop"]
const fantasy = ["Death Note", "Ranma 1/2", "Lain", "One Piece"]

function showStatus() {
    let actionBox = document.getElementById('action');
    if (actionBox.checked) {
        console.log("I am checked!");
    } else {
        console.log("I remain unchecked");
    }
}




