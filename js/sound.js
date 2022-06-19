const onoff = document.getElementById('sound-onoff-btn');
const soundcloud = document.getElementById('soundcloud-icon');

onoff.addEventListener('click', () => {
    if(onoff.innerHTML == "OFF")
    {
        onoff.innerHTML = "ON";
        onoff.style.color = "rgb(10,240,205)";
        soundcloud.style.color = "rgb(10,240,205)";
    }else if(onoff.innerHTML == "ON"){
        onoff.innerHTML = "OFF";
        onoff.style.color = "rgb(253,33,85)";
        soundcloud.style.color = "rgb(253,33,85)";
    }
});