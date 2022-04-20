/*Here at initial stage we have kept hr,min and sec is 0 we can also use var instead of let*/
let hr=0;
let min=0;
let sec=0;
let count=0;
/*let timer is false means watch is stoped */ 
let timer=false;

/*Here we have taken four function which are start , stop ,reset and stopwatch*/ 
/* function start() means when you press the start button timer is true means watch is in start working and call the stopwath function */
function start(){
    timer=true;
    stopWatch();
}
/*This stop function means when stop button is pressed timer is false and stopwatch will stop at that moment */ 
function stop(){
    timer=false;
}

/*This function is reset function, after pressing the reset button timer will re-set at 00 00 00 
-timer = false means stopwatch is at 00hr  00min   00sec  00 and in stop condition 
*/ 
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    // here we got the I'd from HTML section after putting getElementById in html section
    /* and after calling id innerHTML will become 00 00 00 in string form so that we can see  after reset timer is set at 00 00 00 */
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";

}


/*this is the stopwatch function*/ 
function stopWatch(){
    /*when the timer is true count will start increasing and when it reached at 100, second is also incresed by 1 and count(100 part of second) is also start counting again from the zero and add one more second similarly it applied on minute condition , hour condition and second condition .
    - count means 100 part of second which is also called milliseconds*/
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
        }
// Here we have stored hr,min,sec and count in hourString,minuteString,secondString and countString 
        let hourString=hr;
        let minuteString=min;
        let secondString=sec;
        let countString=count;

        /* if hr is less than 10, "0" will be added before the single digit time and similarly for min,sec and count */
        if(hr<10){
            hourString="0"+hr;
        }
        if(min<10){
            minuteString="0"+min;
        }
        if(sec<10){
            secondString="0"+sec;
        }
        if(count<10){
            countString="0"+count;
        }


        document.getElementById("hr").innerHTML=hourString;
        document.getElementById("min").innerHTML=minuteString;
        document.getElementById("sec").innerHTML=secondString;
        document.getElementById("count").innerHTML=countString;



/* Here we have set the setTimeout after every 10 milliseconds so that we can see, when milliosecond reaces at 100, second will increse 1 and when second will reahes at 60 minute will increase by 1 and second and millisecond start conting from the 0 and when minute is reches at 60, hour turns into 1 and minute, second and millisecnds will start counting from the zero and cycle will carry on like this  */
        setTimeout('stopWatch()',10);
    }

}