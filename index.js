$(window).load(function(){
  $('#loading').hide();
});

//video
var vid1 = document.getElementById('video1');
var vid2= document.getElementById('video2');
var vid3 = document.getElementById('video3');
function pauseVid1(){
  vid1.pause();
}
function pauseVid2(){
  vid2.pause();
}
function pauseVid3(){
  vid3.pause();
}
// 함수를 두개 만드는거 말고 방법이 없을까?
// ++++++++++++++ Project 1 +++++++++++++++++++++++
var modal1 = document.getElementById('myModal1');
var modal_title1 = document.getElementById('modal_title1');
var span=document.getElementsByClassName('close')[0];

modal_title1.onclick=function(){
  modal1.style.display="block";
}

span.onclick=function(){
  modal1.style.display="none";
  pauseVid3();

}

window.onclick=function(event){
  if(event.target==modal1){
    modal1.style.display="none";

  }
}
// +++++++++++++ Project 2 +++++++++++++++++++++++++
var modal2 = document.getElementById('myModal2');
var modal_title2 = document.getElementById('modal_title2');
var span=document.getElementsByClassName('close')[1];

modal_title2.onclick=function(){
  modal2.style.display="block";
}

span.onclick=function(){
  modal2.style.display="none";
    pauseVid1();
}

window.onclick=function(event){
  if(event.target==modal2){
    modal2.style.display="none";
      pauseVid1();
  }
}

// +++++++++++++ Project 3 +++++++++++++++++++++++++
var modal3 = document.getElementById('myModal3');
var modal_title3 = document.getElementById('modal_title3');
var span=document.getElementsByClassName('close')[2];

modal_title3.onclick=function(){
  modal3.style.display="block";
}

span.onclick=function(){
  modal3.style.display="none";
  pauseVid2();
}

window.onclick=function(event){
  if(event.target==modal3){
    modal3.style.display="none";
    pauseVid2();
  }
}


// +++++++++++++ Project 4 +++++++++++++++++++++++++
var modal4 = document.getElementById('myModal4');
var modal_title4 = document.getElementById('modal_title4');
var span=document.getElementsByClassName('close')[3];

modal_title4.onclick=function(){
  modal4.style.display="block";
}

span.onclick=function(){
  modal4.style.display="none";

}

window.onclick=function(event){
  if(event.target==modal4){
    modal4.style.display="none";
  }
}

// $(document).ready(function(){
//   $("#modal_title4").click(function(){
//     $("myModal4").show();
//   });
// })


// var stopVideo = function(e){
//   var modal = e.querySelector('#myModal4');
//   var video = e.querySelector('video');
//   if(modal !==null){
//     var iframeSrc=iframe.src;
//     iframe.src=iframeSrc;
//   }
//   if(video!==null){
//     video.pause();
//   }
// }


//+++++++++++태그 위치 이동시키는 jquery+++++++//
function fnMove(mv){
  var offset= $("#section" + mv).offset().top;
  $("html, body").animate({scrollTop : offset}, 300);
}
