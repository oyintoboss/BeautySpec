window.onload = document.getElementById("btn__scroll").style.display = "none";

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("btn__scroll").style.display = "block";       
    }
    else{
        document.getElementById("btn__scroll").style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


