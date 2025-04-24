var kj = document.getElementById('slide');

var d1=document.getElementById('pi1')
var d2=document.getElementById('pi2')
var d3=document.getElementById('pi3')
var d4=document.getElementById('pi4')
var d5=document.getElementById('pi5')
d1.style.opacity="1"


function mou1(){
    d1.style.opacity="1"
}

function mou2(){
    d2.style.opacity="1"
}

function mou3(){
    d3.style.opacity="1"
}

function mou4(){
    d4.style.opacity="1"
}

function mou5(){
    d5.style.opacity="1"
}





function mouo1(){
    d1.style.opacity="0.5"
    // if(d1==kj.src.endsWith("images/image1.jpg")){
    //     d1.style.opacity="1"
    // }
    // else{
    //     d1.style.opacity="0.5"
    // }
}

function mouo2(){
    d2.style.opacity="0.5"
}

function mouo3(){
    d3.style.opacity="0.5"
}

function mouo4(){
    d4.style.opacity="0.5"
}

function mouo5(){
    d5.style.opacity="0.5"
}

function abd() {
    if (kj.src.endsWith("images/image1.jpg")) {
        kj.src = "images/image2.jpg";
        d1.style.opacity="0.5"
        d2.style.opacity="1"
        d3.style.opacity="0.5"
        d4.style.opacity="0.5"
        d5.style.opacity="0.5"
    } else if (kj.src.endsWith("images/image2.jpg")) {
        kj.src = "images/image3.jpg";    d1.style.opacity="0.5"
        d2.style.opacity="0.5"
        d3.style.opacity="1"
        d4.style.opacity="0.5"
        d5.style.opacity="0.5"
    } else if (kj.src.endsWith("images/image3.jpg")) {
        kj.src = "images/image4.jpg";    d1.style.opacity="0.5"
        d2.style.opacity="0.5"
        d3.style.opacity="0.5"
        d4.style.opacity="1"
        d5.style.opacity="0.5"

    } else if (kj.src.endsWith("images/image4.jpg")) {
        kj.src = "images/image5.jpg";
        d1.style.opacity="0.5"
        d2.style.opacity="0.5"
        d3.style.opacity="0.5"
        d4.style.opacity="0.5"
        d5.style.opacity="5"
    } else {
        kj.src = "images/image1.jpg";
        d1.style.opacity="1"
        d2.style.opacity="0.5"
        d3.style.opacity="0.5"
        d4.style.opacity="0.5"
        d5.style.opacity="0.5"
    }
}

function abc() {
    if (kj.src.endsWith("images/image1.jpg")) {
        kj.src = "images/image5.jpg";
        d1.style.opacity="0.5"
        d2.style.opacity="0.5"
        d3.style.opacity="0.5"
        d4.style.opacity="0.5"
        d5.style.opacity="1"
    } else if (kj.src.endsWith("images/image5.jpg")) {
        kj.src = "images/image4.jpg";
        d1.style.opacity="0.5"
        d2.style.opacity="0.5"
        d3.style.opacity="0.5"
        d4.style.opacity="1"
        d5.style.opacity="0.5"
    } else if (kj.src.endsWith("images/image4.jpg")) {
        kj.src = "images/image3.jpg";
        d1.style.opacity="0.5"
        d2.style.opacity="0.5"
        d3.style.opacity="1"
        d4.style.opacity="0.5"
        d5.style.opacity="0.5"
    } else if (kj.src.endsWith("images/image3.jpg")) {
        kj.src = "images/image2.jpg";
        d1.style.opacity="0.5"
        d2.style.opacity="1"
        d3.style.opacity="0.5"
        d4.style.opacity="0.5"
        d5.style.opacity="0.5"
    } else {
        kj.src = "images/image1.jpg";
        d1.style.opacity="1"
        d2.style.opacity="0.5"
        d3.style.opacity="0.5"
        d4.style.opacity="0.5"
        d5.style.opacity="0.5"
    }
}
function pi1(){
    kj.src = "images/image1.jpg";
    d1.style.opacity="1"
    d2.style.opacity="0.5"
    d3.style.opacity="0.5"
    d4.style.opacity="0.5"
    d5.style.opacity="0.5"

}
function pi2(){
    kj.src = "images/image2.jpg";
    d1.style.opacity="0.5"
    d2.style.opacity="1"
    d3.style.opacity="0.5"
    d4.style.opacity="0.5"
    d5.style.opacity="0.5"
}
function pi3(){
    kj.src = "images/image3.jpg";
    d1.style.opacity="0.5"
    d2.style.opacity="0.5"
    d3.style.opacity="1"
    d4.style.opacity="0.5"
    d5.style.opacity="0.5"
}
function pi4(){
    kj.src = "images/image4.jpg";
    d1.style.opacity="0.5"
    d2.style.opacity="0.5"
    d3.style.opacity="0.5"
    d4.style.opacity="1"
    d5.style.opacity="0.5"
}
function pi5(){
    kj.src = "images/image5.jpg";
    d1.style.opacity="0.5"
    d2.style.opacity="0.5"
    d3.style.opacity="0.5"
    d4.style.opacity="0.5"
    d5.style.opacity="1" 
}





