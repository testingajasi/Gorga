// var quiz = {
//     data: [
//         {
//             q:
//             "What economic indicator is most closely associated with classifying a country as developed?"
//             o:
//             ["Literacy rate",
// "Gross Domestic Product (GDP) per capita",
// "Population growth rate",
// "Unemployment rate"],
// a: 2,
//         },
//         {
//             q:
//             "What is the name of the dividing line between the Jovian planets and the terrestrial planets?"
//             o:
//             ["Kuiper Belt",
// "Atmosphere",
// "Satellite",
// "Asteroid belt"],
// a: 4,
//         }
//         {
//             q:
//             "Which celestial body is known as a dwarf planet?"
//             o:
//             ["Pluto",
// "Ceres",
// "Mercury",
// "Kepler 10-b"],
// a: 1,
//         }
//         {
//             q:
//             "Which of the following moons is known to have a subsurface ocean beneath its icy crust?"
//             o:
//             ["Titan",
// "Moon",
// "Uranus",
// "Europa"],
// a: 4,
//         },
//     ],
//     hWrap: null,
//     hQn: null,
//     hAns: null,
//     now: 0,
//     score: 0,
//     init: () =>{
//         quiz.hWrap = document.getElementById("quizWrap");
//         quiz.hQn = document.createElement("id");
//         quiz.hQn.id = "quizQn";
//         quiz.hWrap.appendChild(quiz.hQn);
//         quiz.hAns = document.createElement("div");
//         quiz.hAns.id = "quizAns";
//         quiz.hWrap.appendChild(quiz.hAns);
//         quiz.draw();
//     },
//     draw: () =>{
//         quiz.hQn.innerHTML = "";
//         for (let i in quiz.data[quiz.now].o){
//             let radio = document.createElement("input");
//             radio.type = "radio";
//             radio.name = "quiz";
//             radio.id = "quizo" + i;
//             quiz.hAns.appendChild(radio);
//             let label = document.createElement("label");
// label.innerHTML = quiz.data[quiz.now].o[i];
// label.setAttribute("for", "quizo" + i);
// label.dataset.idx = i;
// label.addEventListener("click", () =>{
//     quiz.select(label);
// });
// quiz.hAns.appendChild;
//         }
//     },
//     select: (option) =>{
//         let all = quiz.hAns.getElementByTagName ("label");
//             for (let label of all){
//                 label.removeEventListener("click", quiz.select);
//             }
//             let correct = option.dataset.idx == quiz.data[quiz.now].a;
//             if (correct){
//                 quiz.score++;
//                 option.classList.add("correct");
//             }else{
//                 option.classList.add("wrong");
//             }
//             quiz.now++;
//             setTimeout (() =>{
//                 if (quiz.now < quiz.data.length)
//                 quiz.draw();
//             }else{
//                 quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
//                 quiz.hAns.innerHTML = "";
//             },
//         }, 1000);
// },
// reset: () =>{
//     quiz.now = 0;
//     quiz.score = 0;
//     quiz.draw();
// },
// window.addEventListener("load", quiz.init);
var quiz = {
    data: [
        {
            q: "What economic indicator is most closely associated with classifying a country as developed?",
            o: [
                "Literacy rate",
                "Gross Domestic Product (GDP) per capita",
                "Population growth rate",
                "Unemployment rate"
            ],
            a: 1,
        },
        {
            q: "What is the name of the dividing line between the Jovian planets and the terrestrial planets?",
            o: [
                "Kuiper Belt",
                "Atmosphere",
                "Satellite",
                "Asteroid belt"
            ],
            a: 3,
        },
        {
            q: "Which celestial body is known as a dwarf planet?",
            o: [
                "Pluto",
                "Ceres",
                "Mercury",
                "Kepler 10-b"
            ],
            a: 0,
        },
        {
            q: "Which of the following moons is known to have a subsurface ocean beneath its icy crust?",
            o: [
                "Titan",
                "Moon",
                "Uranus",
                "Europa"
            ],
            a: 3,
        },
    ],
    hWrap: null,
    hQn: null,
    hAns: null,
    now: 0,
    score: 0,
    init: () => {
        quiz.hWrap = document.getElementById("quizWrap");
        quiz.hQn = document.createElement("div"); // Changed 'id' to 'div'
        quiz.hQn.id = "quizQn";
        quiz.hWrap.appendChild(quiz.hQn);
        quiz.hAns = document.createElement("div");
        quiz.hAns.id = "quizAns";
        quiz.hWrap.appendChild(quiz.hAns);
        quiz.draw();
    },
    draw: () => {
        quiz.hQn.innerHTML = quiz.data[quiz.now].q; // Added question display
        quiz.hAns.innerHTML = ""; // Clear previous answers
        for (let i in quiz.data[quiz.now].o) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "quiz";
            radio.id = "quizo" + i;
            quiz.hAns.appendChild(radio);
            let label = document.createElement("label");
            label.innerHTML = quiz.data[quiz.now].o[i];
            label.setAttribute("for", "quizo" + i);
            label.dataset.idx = i;
            label.addEventListener("click", () => {
                quiz.select(label);
            });
            quiz.hAns.appendChild(label);
        }
    },
    select: (option) => {
        let all = quiz.hAns.getElementsByTagName("label"); // Corrected method name
        for (let label of all) {
            label.removeEventListener("click", quiz.select);
        }
        let correct = option.dataset.idx == quiz.data[quiz.now].a;
        if (correct) {
            quiz.score++;
            option.classList.add("correct");
        } else {
            option.classList.add("wrong");
        }
        quiz.now++;
        setTimeout(() => {
            if (quiz.now < quiz.data.length) {
                quiz.draw();
            } else {
                quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
                quiz.hAns.innerHTML = "";
            }
        }, 1000);
    },
    reset: () => {
        quiz.now = 0;
        quiz.score = 0;
        quiz.draw();
    }
};

window.addEventListener("load", quiz.init);