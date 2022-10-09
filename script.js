const Day = ["Monday", "Tuesday", "Wednesday", "Thursday", "riday","Saturday", "Sunday"]
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function updateTime() {
    let dateTime = new Date()
    // let day = Day[dateTime.getDay() + 1]
    let date = dateTime.getDate()
    let month = Months[dateTime.getMonth()]
    let year = dateTime.getFullYear()

    let hours = dateTime.getHours()

    let minutes = dateTime.getMinutes()

    let seconds = dateTime.getSeconds()

    let am_or_pm = document.getElementById("am_or_pm")
    if (hours >= 12) {
        am_or_pm.innerHTML = "PM"

    } else {
        am_or_pm.innerHTML = "AM"
    }
    if (hours >= 12) {
        hours = hours - 12
    }


    // document.getElementById("day").innerHTML = day
    document.getElementById("date").innerHTML = date
    document.getElementById("month").innerHTML = month
    document.getElementById("year").innerHTML = year

    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
    // document.getElementById("milliseconds").innerHTML = milliseconds
}
setInterval(updateTime, 1)