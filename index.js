console.log("HELLO")
const animeCategories = {
    action: ["Attack on Titan", "Berserk", "Bleach", "Blood+","Dragon Ball", "Fullmetal Alchemist", "Neon Genesis Evangelion", "Demon Hunter"],
    comedy: ["Ranma 1/2", "Golden Boy", "Sailor Moon"],
    romance: ["Nana", "Kare Kano", "Marmalade boy", "Sailor Moon"],
    scify: ["Ghost in the shell", "Neon Genesis Evangelion", "Cowboy Bebop"],
    fantasy: ["Death Note", "Ranma 1/2", "Lain", "One Piece"]
}



function showAnime() {
    const index = document.getElementById("number").value-1;
    const category = document.querySelector('input[name="anime"]:checked').value;
    console.log(category);

    const animeList = animeCategories[category]; 

    if (animeList && index >= 0 && index < animeList.length) {
        document.getElementById("animeSelection").textContent = animeList[index];
    } else {
        document.getElementById("animeSelection").textContent = "That's an unlucky number! Try another!";
    }
    
    }
    





