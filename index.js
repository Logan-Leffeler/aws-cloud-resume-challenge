const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://wx7orpt2kmeeuili5djyf4oyd40uviuv.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();