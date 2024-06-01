console.log("HELLO")

const animeCategories = {
    action: ["Attack on Titan", "Berserk", "Bleach", "Blood+","Dragon Ball", "Fullmetal Alchemist", "Neon Genesis Evangelion", "Demon Hunter"],
    comedy: ["Ranma 1/2", "Golden Boy", "Sailor Moon"],
    romance: ["Nana", "Kare Kano", "Marmalade boy", "Sailor Moon"],
    scifi: ["Ghost in the shell", "Neon Genesis Evangelion", "Cowboy Bebop"],
    fantasy: ["Death Note", "Ranma 1/2", "Lain", "One Piece"]
}

function showAnime() {
    const number = document.getElementById("number").value;
    const category = document.querySelector('input[name="anime"]:checked').value;
    console.log("The category is:",category);
    console.log("The number selected is:", number);

    const animeList = animeCategories[category]; 

    if (number > 0 && number <= animeList.length && category) {
        console.log("The anime list for the category selected is:", animeList);

        let animeSelection = "";
        for (let i = 0; i < number; i++) {
            if (i < animeList.length) {
                animeSelection += animeList[i] + " ";
            } else {
                animeSelection += "I've run out of titles for you 😓";
                break;
            }
        }

        document.getElementById("animeSelection").textContent = animeSelection;
    
    } else {
        alert("I'm missing information! Have you selected a category and a number?");
    }
}

    





