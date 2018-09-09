const slide1button = document.querySelector('.slide1button');
slide1button.addEventListener('click', myFunction);

var i = 0;

function myFunction() {
    
    if (i == 0) {
        document.getElementById("works1").style.display = null;
        i+=1;
        console.log(i);
      } else {
        document.getElementById("works1").style.display = "none";
        i = 0;
      }
    }
    