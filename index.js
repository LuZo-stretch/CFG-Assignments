console.log("HELLO")

const animeCategories = {
    action: ["Ruroni Kenshin", "Attack on Titan", "Berserk", "Bleach", "Demon Slayer", "Blood+","Dragon Ball", "Fullmetal Alchemist", "Neon Genesis Evangelion", "Akira", "Demon Hunter", "Saint Seya", "Blue Eyed Samurai"],
    comedy: ["Ranma 1/2", "Golden Boy", "Sailor Moon", "Wotakoi: Love is hard for otaku", "Spy X Family", "Grand Blue", "One Punch Man", "Cowboy Bebop", "Lupin III: The Castle of Cagliostro"],
    romance: ["Nana", "Kare Kano", "Marmalade boy", "Sailor Moon", "Inuyasha", "My Happy Marriage", "Wotakoi: Love is hard for otaku", "Cowboy Bebop", "Grand Blue"],
    scifi: ["Ghost in the shell", "Neon Genesis Evangelion", "Cowboy Bebop", "Psycho-Pass", "One Punch Man", "Akira", "Lain", "The Vision of Escaflowne", "Full Metal Alchemist", "Super Boy"],
    fantasy: ["Death Note", "Ranma 1/2", "Lain", "One Piece", "Saint Seya", "Onimusha", "Dragon Ball Z", "The Vision of Escaflowne", "Neon Genesis Evangelion", "Sailor Moon"]
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
                animeSelection += animeList[i] + " ⭐ ";
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

    





