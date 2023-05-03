const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://mbbnruzaeir22m7e2e5erdop7u0hqhgk.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();