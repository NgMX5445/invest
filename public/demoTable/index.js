
document.addEventListener("DOMContentLoaded", () => {
    let times = 0;
    let timeNow = new Date();
    let hourNow = timeNow.getHours();
 
    while (times < 24) {
        times = times + 1;


        const templates = document.querySelector('#tableDay');
        const row = templates.content.cloneNode(true);

        row.querySelector('#days').innerHTML = times + ":00";
        row.querySelector('#days').id = times;
        document.querySelector('#Displaydays').appendChild(row);
    }
  
     
    document.getElementById(hourNow).className = "line";

   

})