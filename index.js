// JavaScript source code

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    const form = document.querySelector('form');
    const submitBtn = form.querySelector('input[type="submit"]');

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const yesOption = document.getElementById('yes');
        const noOption = document.getElementById('no');

        if (!yesOption.checked && !noOption.checked) {
            alert('Please select an option before submitting!');
            return;
        }

        if (yesOption.checked) {
            alert('Thank you for liking my web page!');
        } else {
            alert('Thanks, I will try my best to improve my web page!');
        }
        form.reset();
    });
});
// Notifications
// check if the browser supports notifications
if ("Notification" in window) {
    // request permission from the user to show notifications
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            // create a new notification
            new Notification("Hello!", {
                body: "This is a body text",
                }
            );
        }
    });
}

// Conditional
function checkAge() {
    // get the user's age from the input field
    var age = parseInt(document.getElementById("age-input").value);

    // check if the user is old enough to vote
    if (age >= 18) {
        // display a message that the user can vote
        document.getElementById("vote-message").innerText = "You are old enough to vote!";
    } else if (age < 18) {
        // display a message that the user cannot vote
        document.getElementById("vote-message").innerText = "You are not old enough to vote.";
    } else {
        document.getElementById("vote-message").innerText = "You did not submit an age!";
    }
}

// Color Schemes
function setColorScheme1() {
    document.body.classList.remove('color-scheme-2');
    document.body.classList.remove('color-scheme-3');
    document.body.classList.add('color-scheme-1');
}
document.querySelector('#color-scheme-1-button').addEventListener('click', function () {
    document.body.classList.add('color-scheme-1');
});

function setColorScheme2() {
    document.body.classList.remove('color-scheme-1');
    document.body.classList.remove('color-scheme-3');
    document.body.classList.add('color-scheme-2');
}

function setColorScheme3() {
    document.body.classList.remove('color-scheme-1');
    document.body.classList.remove('color-scheme-2');
    document.body.classList.add('color-scheme-3');
}
