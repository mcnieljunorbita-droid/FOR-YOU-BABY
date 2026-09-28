function startLetter() {

    document.querySelector(".intro").classList.add("hide");

    setTimeout(function() {

        document.getElementById("letter").classList.add("show-letter");

        setTimeout(function() {
            document.getElementById("section1").classList.add("show");
        }, 300);

    }, 700);
}

function showSection(number) {
    const currentSection = document.getElementById("section" + (number - 1));
    const nextSection = document.getElementById("section" + number);

    currentSection.classList.remove("show");

    setTimeout(function() {
        currentSection.style.display = "none";

        nextSection.style.display = "block";

        setTimeout(function() {
            nextSection.classList.add("show");
        }, 50);

    }, 500);
}
function yesClicked() {
    const message = document.getElementById("forgiveMessage");
    const noButton = document.getElementById("noButton");

    message.innerHTML = `
        <br>
        YEYYYYYY BABYYYY!!! THANK YOU FOR FORGIBE BABY I KISS YOU MWAPS!!! 😘 I LOVE YOU KAAYO SO MUCH BABY!!
    `;

    noButton.style.display = "none";

    createHearts();
}

function noClicked() {
    const button = document.getElementById("noButton");
    const section = document.getElementById("section7");

    const maxX = section.clientWidth - button.offsetWidth;
    const maxY = section.clientHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function createHearts() {
    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-50px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "heartFloat 3s ease-out forwards";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000);
    }
}