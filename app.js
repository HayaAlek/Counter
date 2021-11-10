//set the count
let count = 0;
//select value
const value =document.querySelector("#value");
//select the buttons
const btns = document.querySelectorAll(".btn");

//console.log(btns);


//for each loop fot buttons 
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        count--;
      }
      else if(styles.contains("increase")){
          count ++;
      }
      else if(styles.contains("rest")){
          count=0;
      }
      if (count > 0){
        value.style.color ="green";
    }
    if (count < 0){
        value.style.color ="red";
    }
    if (count ==0){
        value.style.color ="rgb(14, 9, 50);";
    }
      value.textContent = count;
  });
  
})