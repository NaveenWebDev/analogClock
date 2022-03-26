setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;

    document.getElementById("minutes").style.transform = `rotate(${mrotation}deg)`;

    document.getElementById("seconds").style.transform = `rotate(${srotation}deg)`;

}, 1000);