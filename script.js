function updateTime() {
    let dateTime = new Date()

    let hours = dateTime.getHours()

    let minutes = dateTime.getMinutes()

    let seconds = dateTime.getSeconds()

    // let milliseconds = dateTime.getMilliseconds()

    let am_or_pm = document.getElementById("am_or_pm")
    if (hours >= 12) {
        am_or_pm.innerHTML = "PM"

    } else {
        am_or_pm.innerHTML = "AM"
    }
    if(hours >= 12){
        hours = hours-12
    }

   
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
    // document.getElementById("milliseconds").innerHTML = milliseconds
}
setInterval(updateTime, 1)