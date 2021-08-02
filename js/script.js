let namebox1 = document.getElementById("namebox1");
let databox1 = document.getElementById("databox1");
let search_btn1 = document.getElementById("search-btn1");

let namebox2 = document.getElementById("namebox2");
let databox2 = document.getElementById("databox2");
let search_btn2 = document.getElementById("search-btn2");

let namebox3 = document.getElementById("namebox3");
let databox3 = document.getElementById("databox3");
let search_btn3 = document.getElementById("search-btn3");

let namebox4 = document.getElementById("namebox4");
let databox4 = document.getElementById("databox4");
let search_btn4 = document.getElementById("search-btn4");

let upbutton = document.getElementById("upbutton");

//Backgrounds//
let box1 = document.getElementById("sec01box");
let box2 = document.getElementById("sec02box");
let box3 = document.getElementById("sec03box");
let box4 = document.getElementById("sec04box");
//

//BOX1
box1.addEventListener('mouseenter', e => {
    namebox1.style.display = 'none';
    databox1.style.display = 'none';
    search_btn1.style.display = 'block'
    box1.style.background = 'url(../img/sec2-1.jpg)';
})

box1.addEventListener('mouseleave', e => {
    namebox1.style.display = 'block';
    databox1.style.display = 'block';
    search_btn1.style.display = 'none';
    box1.style.background = 'linear-gradient(0deg, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.65)), url(../img/sec2-1.jpg)';
})
//

//BOX2
box2.addEventListener('mouseenter', e => {
    namebox2.style.display = 'none';
    databox2.style.display = 'none';
    search_btn2.style.display = 'block';
    box2.style.background = 'url(../img/sec2-2.jpg)';
})

box2.addEventListener('mouseleave', e => {
    namebox2.style.display = 'block';
    databox2.style.display = 'block';
    search_btn2.style.display = 'none';
    box2.style.background = 'linear-gradient(0deg, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.65)), url(../img/sec2-2.jpg)';
})
//

//BOX3
box3.addEventListener('mouseenter', e => {
    namebox3.style.display = 'none';
    databox3.style.display = 'none';
    search_btn3.style.display = 'block';
    box3.style.background = 'url(../img/sec2-3.jpg)';
})

box3.addEventListener('mouseleave', e => {
    namebox3.style.display = 'block';
    databox3.style.display = 'block';
    search_btn3.style.display = 'none';
    box3.style.background = 'linear-gradient(0deg, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.65)), url(../img/sec2-3.jpg)';
})
//

//BOX4
box4.addEventListener('mouseenter', e => {
    namebox4.style.display = 'none';
    databox4.style.display = 'none';
    search_btn4.style.display = 'block';
    box4.style.background = 'url(../img/sec2-4.jpg)';
})

box4.addEventListener('mouseleave', e => {
    namebox4.style.display = 'block';
    databox4.style.display = 'block';
    search_btn4.style.display = 'none';
    box4.style.background = 'linear-gradient(0deg, rgba(51, 51, 51, 0.65), rgba(51, 51, 51, 0.65)), url(../img/sec2-4.jpg)';
})
//

//SCROLL
var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.3;  //speed
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}

//SCROLLUP
var smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 10);
    }
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
  } else {
      document.getElementById('upbutton').style.display = 'none';
  }
}

