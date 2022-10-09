

let a;
let time;
let date;
const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};

time=()=>{
a=new Date();
date=a.toLocaleDateString(undefined,options);
time=a.getHours() + ':'+a.getMinutes()+":"+a.getSeconds();
document.getElementById('time').innerHTML="<br>Current time is:</br> "+time+"<br>on</br>"+date;

}
setInterval(time,1000)