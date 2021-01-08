const mHours = document.querySelector("#hour_hand");
const mMinutes = document.querySelector("#minute_hand");
let mSecond = document.querySelector("#second_hand");
setInterval(()=>{
    let date = new Date();
    let currentHours = date.getHours() * 45;
    let currentMinutes = date.getMinutes() * 6 -90;
    let currentSecond = date.getSeconds() * 6 - 90;
    mSecond.style.transform = "rotate(" +currentSecond + "deg)"; 
    mMinutes.style.transform = "rotate(" +currentMinutes + "deg)"; 
    mHours.style.transform = "rotate(" +(currentHours) + "deg)"; 
    document.querySelector("#digiHr").textContent = date.getHours()%12;
    document.querySelector("#digiMin").textContent = date.getMinutes();

    console.log(svg);
});
