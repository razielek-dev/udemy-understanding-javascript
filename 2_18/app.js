// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (true){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');