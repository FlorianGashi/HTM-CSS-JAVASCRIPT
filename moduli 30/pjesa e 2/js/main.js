var wakeuptime
var dstime
var sleeptime
var noon=12
function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = newData()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

}
var merdian="AM"
if(hours>= noon){
    merdian="PM"
}
var clockTime = hours + ":" +minutes + ":" + seconds + "" + merdian
clock.innetHTML = clockTime
//fumksioni change image
var oneSecond = 1000
setInterval(showCurrentTime, oneSecond)
function changeTime(){
    var time=newData.getHours()
    console.log(time)
    var image="img/ds_clock.png"
    var innerHTML=document.getElementById("timeImage")
    if(time=wakeuptime){
        image="img/moning.gif"
        console.log("morning")
    }
    else if (time==dstime){
        image="img/class.gif"
    }
    else if (time== sleeptime){
        image="img/sleep.gif"
    }
    imageHtml.src=Image
    console.log(imageHtml.src)
    function updateClock() {
        var wakeUpTimeSelector = Document.getElementById('wakeUpTimeSelector');
        wakeuptime = wakeUpTimeSelector.value;

        var dsTimeSelector = Document.getElementById('dsTimeSelector');
        dsTime= dsTimeSelector.value;

        var sleepTimeSelector = Document.getElementById('sleepTimeSelector');
        sleeptime = sleepTimeSelector.value;

    }

    var saveButton =  document.getElementById("saveButton");
    saveButton.addEventListener("click", updateClock);




 }
