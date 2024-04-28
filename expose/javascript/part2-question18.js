
function printDate(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printDate,1000); // calls the printDate function every 1000ms
//only way to stop program is force close, ctrl-c