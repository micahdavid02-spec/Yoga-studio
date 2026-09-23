const classRecommendations = {
    beginner: {
        name: "Gentle Yoga",
        description:
            "A slow-paced class designed for students who are new to yoga."
    },

    intermediate: {
        name: "Vinyasa Flow",
        description:
            "A dynamic class that builds strength and flexibility."
    },

    advanced: {
        name: "Restorative Yoga Plus",
        description:
            "A deeper practice focused on recovery and advanced movement."
    }
};

function displayRecommendation(level) {

    const recommendation =
        classRecommendations[level];

    const output =
        document.getElementById("recommendation");

    output.innerHTML = `
        <h3>${recommendation.name}</h3>
        <p>${recommendation.description}</p>
    `;
}

function savePreference(level) {
    localStorage.setItem(
        "preferredClassLevel",
        level
    );
}

function loadPreference() {

    const savedLevel =
        localStorage.getItem(
            "preferredClassLevel"
        );

    if(savedLevel) {

        document.getElementById(
            "experienceSelect"
        ).value = savedLevel;

        displayRecommendation(savedLevel);
    }
}

document
.getElementById("findClassBtn")
.addEventListener("click", function() {

    const selectedLevel =
        document.getElementById(
            "experienceSelect"
        ).value;

    if(selectedLevel === "") {
        alert(
           "Please choose an experience level."
        );
        return;
    }

    displayRecommendation(selectedLevel);

    savePreference(selectedLevel);
});

loadPreference();
const form =
document.getElementById("interestForm");

form.addEventListener(
    "submit",
    validateForm
);

function validateForm(event) {

    let valid = true;

    clearErrors();

    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    if(name.value.trim().length < 2) {

        document.getElementById(
            "nameError"
        ).textContent =
        "Name must be at least 2 characters.";

        valid = false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)) {

        document.getElementById(
            "emailError"
        ).textContent =
        "Please enter a valid email address.";

        valid = false;
    }

    if(!valid) {
        event.preventDefault();
    }
}

function clearErrors() {

    document.getElementById(
        "nameError"
    ).textContent = "";

    document.getElementById(
        "emailError"
    ).textContent = "";
}
