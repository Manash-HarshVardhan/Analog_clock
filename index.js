let hr= document.querySelector('#hourhand');
let min= document.querySelector('#minhand');
let sec= document.querySelector('#sechand');

function displayTime(){
    let date=new Date();

    // getting hr min sec from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hourRot=30*hh+mm/2;
    let minRot=6*mm;
    let secRot=6*ss;

    hr.style.transform=`rotate(${hourRot}deg)`;
    min.style.transform=`rotate(${minRot}deg)`;
    sec.style.transform=`rotate(${secRot}deg)`;
}
setInterval(displayTime,1000);


// digital clock



function digital(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let day;
    if(hours>=12){
        
        day='pm';
    }else{
        day='am';
    }
    document.querySelector('.digital').textContent = `${hours}:${minutes}:${seconds} ${day}`;
}
setInterval(digital,1000);