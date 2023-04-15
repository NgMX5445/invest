
document.addEventListener("DOMContentLoaded", () => {
    let times = 0;
    let timeNow = new Date();
    let hourNow = timeNow.getHours();
    let minNow = timeNow.getMinutes()
    while (times < 24) {
        times = times + 1;


        const templates = document.querySelector('#tableDay');
        const row = templates.content.cloneNode(true);

        row.querySelector('#days').innerHTML = times + ":00";
        row.querySelector('#days').id = times;

        document.querySelector('#Displaydays').appendChild(row);
    }

    let x = ((hourNow - 1) / 24 * 60);

    let y = x * 5000;

    document.getElementById("line").style.width = `${y}px`



})