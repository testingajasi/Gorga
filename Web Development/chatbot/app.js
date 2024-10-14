// function talk() {
//     var know = {
//         "Who are you": "Hello, Bot here",
//         "How are you": "Good :)",
//         "What can i do for you": "nothing",
//         "Your followers":
//          "I have my family of 200000 members, i dont't have follower, have supportive family",
//          ok: "Thank You So Much",
//          Bye: "Okay! will get soon...",
//          hello: "Hello, im bot. May i help you?",
//     };
//     var user = document.getElementById("userBox").ariaValueMax;
//     document.getElementById("chatLog").innerHTML += user + "<br>";
//     if (user in know){
//         document.getElementById("chatLog").innerHTML += know[user] + "<br>";
//     }else{
//         document.getElementById("chatLog").innerHTML += 
//         "Sorry, I didn't understand <br>";
//     }
// }
function talk() {
    var know = {
        "Who are you": "Hello, Bot here",
        "How are you": "Good :)",
        "What can I do for you": "Nothing",
        "Your followers": "I have my family of 200,000 members; I don't have followers, I have a supportive family.",
        "ok": "Thank you so much!",
        "Bye": "Okay! I'll get back to you soon...",
        "hello": "Hello, I'm a bot. May I help you?"
    };
    
    // Use .value to get the user input from the input box
    var user = document.getElementById("userBox").value;
    
    // Display the user's message
    document.getElementById("chatLog").innerHTML += user + "<br>";

    // Check if the user's message is in the knowledge base
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML += "Sorry, I didn't understand.<br>";
    }
}