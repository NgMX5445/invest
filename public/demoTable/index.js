
document.addEventListener("DOMContentLoaded", () => {
  let times = 0;
  let timeNow = new Date();
  let hourNow = timeNow.getHours();
  let minNow = timeNow.getMinutes();
  let sNow = timeNow.getSeconds();
  while (times < 24) {
    times = times + 1;


    const templates = document.querySelector('#tableDay');
    const row = templates.content.cloneNode(true);

    row.querySelector('#days').innerHTML = times + ":00";
    row.querySelector('#days').id = times;

    document.querySelector('#Displaydays').appendChild(row);
  }

  let x = (((((hourNow - 1) * 60) + minNow) * 60) + sNow) / (1440 * 60);

  let y = x * 5000;

  document.getElementById("line").style.width = `${100}%`
  //AutoRefresh(500)
  function AutoRefresh(t) {
    setTimeout("location.reload(true);", t);
  }


})