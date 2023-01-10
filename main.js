
// Model

let navn = "";








// View


updateView()
function updateView() {
    let html = /*HTML*/ ` 
    <h1>Test av Github</h1>
    <button id="colorButton" onclick="changeBackgroundColor()">Trykk her for å bytte bakgrunnsfarge</button>
    <input id="nameInput" type="text" onchange="setText(this.value)">
    <h2>Skriv inn navnet ditt i feltet</h2>
    <div id="nameDiv">Hei, ${navn}!</div>
    `;

    document.getElementById('app').innerHTML = html;
}





// Controller



function changeBackgroundColor() {
    document.body.style.backgroundColor = "darkblue";
    updateView();
}




function setText(inputValue) {
    navn = String(inputValue);
    updateView();
}









