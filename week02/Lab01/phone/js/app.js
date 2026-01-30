let btnAccept = document.querySelector('#acceptButton');
let btnDecline = document.querySelector('#declineButton');
let btnMessage = document.querySelector('#messageButton');
let background = document.querySelector('#outer');

btnAccept.addEventListener("click", () => {
    document.querySelector("#callStatus").textContent = `Call Accepted!`;
    background.classList.add('accepted');
    background.classList.remove('declined');
    background.classList.remove('message');
});

btnDecline.addEventListener("click", () => {
    document.querySelector("#callStatus").textContent = `Call Declined.`;
    background.classList.add('declined');
    background.classList.remove('accepted');
    background.classList.remove('message');
});

btnMessage.addEventListener("click", () => {
    document.querySelector("#callStatus").textContent = `Sending Message...`;
    background.classList.add('message');
    background.classList.remove('accepted');
    background.classList.remove('declined');

    setTimeout(() => {
        alert("I will call you later"); // Show alert after update
    }, 200);

});

