let progressPercent = 10;
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");

let logo = document.getElementById("logo")
logo.addEventListener("click", function(){
  document.location.href = "index.html";
});

let up = document.getElementById("progressUp");
up.addEventListener("click", function(){
  progressPercent += 1;
  if(progressPercent > 100){
    progressPercent = 100;
  }
  progressBar.style.width = progressPercent + "%";
  progressText.innerHTML = progressPercent + "%";
});

let down = document.getElementById("progressDown");
down.addEventListener("click", function(){
  progressPercent -= 1;
  if(progressPercent < 0){
    progressPercent = 0;
  }
  progressBar.style.width = progressPercent + "%";
  progressText.innerHTML = progressPercent + "%";
});

function setProgressBarColor() {
    if(progressPercent === 100){
      document.getElementById("progressBar").style.backgroundColor = getRandomColor();
    }
    else if(progressPercent >= 80 && progressPercent < 100){
      document.getElementById("progressBar").style.backgroundColor = 'green';
    }
    else if(progressPercent >= 60 && progressPercent < 80){
      document.getElementById("progressBar").style.backgroundColor = 'lightgreen';
    }
    else if(progressPercent >= 40 && progressPercent < 60){
      document.getElementById("progressBar").style.backgroundColor = 'yellow';
    }
    else if(progressPercent >= 20 && progressPercent < 40){
      document.getElementById("progressBar").style.backgroundColor = 'orange';
    }
    else if(progressPercent >= 0 &&progressPercent < 20){
      document.getElementById("progressBar").style.backgroundColor = 'red';
    }
    else {
      document.getElementById("progressBar").style.backgroundColor = 'none';
    }
    setTimeout(function () {
        setProgressBarColor();
    }, 220);
}

setProgressBarColor();
function getRandomColor(){
  let r = (Math.random() * 255).toFixed(0)
  let g = (Math.random() * 255).toFixed(0)
  let b = (Math.random() * 255).toFixed(0)
  let color = "rgb(" + r + ","+ g + "," + b + ")";
  return color;
}
