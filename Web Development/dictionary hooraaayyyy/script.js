// const result = document.getElementById("result");
// const sound = document.getElementById("sound");
// const btn = document.getElementById("search-btn");
// btn.addEventListener("click", () => {
//     let inpWord = document.getElementById("inp-word").value;
//     fetch(`${url}${inpWord}`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         result.innerHTML = `
//         <div class="word">
//         <h3>${inpWord}</h3>
//         <button onclick ="playSound()">
//         <i class="fas fa-volume-up">
//             </i>
//         </button>
//         </div>
//         <div class="details">
//         <p>${data[0].meanings[0].partOfSpeech}</p>
//         <p>${data[0].phonetic}</p>
//         </div>
//         <p class="word-meaning">
//         ${data[0].meanings[0].definitions[0].definition}
//         </p>
//         <p class="word-example">
//         ${data[0].meanings[0].definitions[0].example || ""}
//         </p>`;
//         sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
//     })
//     .catch(() => {
//         result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
//     });
// });
// function playSound(){
//     sound.play();
// }
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

// Ensure you have the URL correctly defined
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"; // Example API

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value.trim();

    if (inpWord === "") {
        result.innerHTML = `<h3 class="error">Please enter a word</h3>`;
        return;
    }

    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if (data.title === "No Definitions Found") {
                result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
                return;
            }

            const wordData = data[0]; // Assuming we get an array of word data
            const meanings = wordData.meanings && wordData.meanings[0];
            const phonetics = wordData.phonetics && wordData.phonetics[0];
            const audioUrl = phonetics ? phonetics.audio : null;

            // Check for necessary data to prevent errors
            if (!meanings || !phonetics) {
                result.innerHTML = `<h3 class="error">Invalid data format</h3>`;
                return;
            }

            result.innerHTML = `
                <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${meanings.partOfSpeech}</p>
                    <p>${wordData.phonetic || 'No phonetic available'}</p>
                </div>
                <p class="word-meaning">${meanings.definitions[0].definition}</p>
                <p class="word-example">${meanings.definitions[0].example || "No example available"}</p>
            `;

            if (audioUrl) {
                sound.setAttribute("src", `https:${audioUrl}`);
            } else {
                sound.setAttribute("src", ""); // Handle case where no audio is available
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

function playSound() {
    if (sound.src) {
        sound.play();
    } else {
        alert("No audio available for this word.");
    }
}
