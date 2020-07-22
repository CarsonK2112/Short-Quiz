
var timer = 60

var start_timer = document.getElementById("start_button")
var stop_timer = document.getElementById("question_5_submit")

var sections = Array.from(document.getElementsByClassName("section"));
var buttons = Array.from(document.getElementsByClassName("indicator"))
var index = 0
var score = 0
var initials_entry = []
var score_entry = []
retrieve_initials()
retrieve_score()

function handleclick (event) {
  event.preventDefault()
  sections[index].classList.add("hide");
  index ++
  console.log("click")
  sections[index].classList.remove("hide");
}

for (var i = 0; i < buttons.length; i++) {
  buttons [i].addEventListener("click", handleclick)
}
document.getElementById("question_1_submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("Rome").checked) {
      score += 5
      console.log(score)
    }
    else {
      timer -= 5
    }
  });

  document.getElementById("question_2_submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("France").checked) {
      score += 5
      console.log(score)
    }
    else {
      timer -= 5
    }
  });

  document.getElementById("question_3_submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("Thomas Edison").checked) {
      score += 5
      console.log(score)
    }
    else {
      timer -= 5
    }
  });

  document.getElementById("question_4_submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("Thomas Edison").checked) {
      score += 5
      console.log(score)
    }
    else {
      timer -= 5
    }
  });

  document.getElementById("question_5_submit").addEventListener("click", function (event) {
    event.preventDefault()
    if (document.getElementById("Ada Lovelace").checked) {
      score += 5
      console.log(score)
    }
    else {
      timer -= 5
    }
  });

function endgame () {
  for (var i = 0; i<sections.length; i++){}
  document.getElementById("end_screen").classList.remove("hide")
  console.log("gameover")
}

start_timer.addEventListener ("click", function (){
  var gametimer = setInterval (function (){
    if (timer===0){
      clearInterval (gametimer);{
      endgame ()
    }}
    timer -- 
    console.log(timer)
    document.getElementById("timer").innerHTML=timer
  }, 1000)
})

stop_timer.addEventListener ("click", function (){
 if (timer!==0){
   timer=0
 }
 
});

document.getElementById("question_5_submit").addEventListener("submit", function(){
  // if (timer)
  clearInterval();
});

let player_number = 1

document.getElementById("submit_button").addEventListener("click", function (){
  var initials = document.getElementById("initials").value
  console.log(initials, initials_entry)
  initials_entry.push(initials)
  score_entry.push(score)
  store_initials()
  store_score()
  document.getElementById("demo_two").innerHTML = score_entry;
  document.getElementById("demo").innerHTML = initials_entry;
})

function store_initials(){
  localStorage.setItem("initials", initials_entry)
}

function retrieve_initials(){
  initials_entry = localStorage.getItem("initials").split (",")
  console.log(initials_entry)
}

for (i = 0; i < initials_entry; i++) {
  text += initials_entry[i] + "<br>";
}

function store_score(){
  localStorage.setItem("score", score_entry)
  console.log(score_entry)
}

function retrieve_score(){
  score_entry = localStorage.getItem("score").split (",")
  console.log(score_entry)
}




