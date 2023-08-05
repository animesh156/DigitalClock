setInterval(time,1000);


function time() {
    let Time=new Date();
    let hour=Time.getHours();
    let sec=Time.getSeconds();
    let min=Time.getMinutes();

   period="AM";

    if(hour>=12){
        period="PM";
    
    }

    hour=hour < 10 ? "0" + hour : hour;

    min=min < 10 ? "0" + min : min;

    sec=sec < 10 ? "0" + sec : sec;

   

    let curTime=hour + ":" + min + ":" + sec + ":" + period;

    document.getElementById("clock").innerHTML=curTime;

}