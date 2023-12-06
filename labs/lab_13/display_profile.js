"use strict";

$(document).ready(() => {
    // display data from session storage
    const storedEmail = sessionStorage.getItem("email");
    const storedPhone = sessionStorage.getItem("phone");
    const storedZip = sessionStorage.getItem("zip");
    const storedDob = sessionStorage.getItem("dob");

    $("#email").text(storedEmail);
    $("#phone").text(storedPhone);
    $("#zip").text(storedZip);
    $("#dob").text(storedDob);

    $("#back").click(() => {
        window.history.back();
    });
});
