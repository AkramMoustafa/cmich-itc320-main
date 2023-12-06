"use strict";

const getRandomNumber = max => {
    let random = null;
    if (!isNaN(max)) {
        random = Math.random();             // value >= 0.0 and < 1.0
        random = Math.floor(random * max);  // value is an integer between 0 and max - 1
        random = random + 1;                // value is an integer between 1 and max
    }
    return random;
};

$(document).ready(() => {
    $("#generate").click(() => {
        $("#password").val(""); // clear previous entry
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";

        const numChars = $("#num").val().trim();
        
        // Check if numChars is a valid number
        if (isNaN(numChars) || numChars === "") {
            alert("Please enter a valid number");
            return;
        }

        const numberOfCharacters = parseInt(numChars);

        let password = "";
        for (let i = 0; i < numberOfCharacters; i++) {
            const randomIndex = getRandomNumber(chars.length);
            const randomChar = chars.charAt(randomIndex - 1);
            password += randomChar;
        }

        // Display the password in the password textbox
        $("#password").val(password);
    }); // end click()

    $("#clear").click(() => {
        $("#num").val("");
        $("#password").val("");
        $("#num").focus();
    }); // end click()

    // set focus on initial load
    $("#num").focus();
}); // end ready()
