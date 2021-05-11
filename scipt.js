const nameField = document.getElementById('name');
const colorField = document.getElementById('color');
const outputContainer = document.getElementById('output-container');
const submitBtn = document.getElementById('btn-submit');

const showOutput = () => {
    if (nameField.value && colorField.value) {
        outputContainer.innerHTML = `
            <h2>Hi ${nameField.value} !</h2>
            <p>Your Favorite dress is a ${colorField.value} dress </p>
        `;
    }
    else {
        alert('Please type something in the input fields & then click submit');
    }
};

submitBtn.addEventListener('click', showOutput);