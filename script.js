let today = document.querySelector("#currentDay");
let momentEl =moment().format("dddd, MMMM, YYYY");

today.innerHTML = (momentEl);
