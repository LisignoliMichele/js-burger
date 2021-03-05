// variables
var burgerName = document.getElementById("burgerName");
var calculate = document.getElementById("buttonCalculate");
var ingredient = document.getElementsByClassName('ingredient');
var sum = 0;
// click
calculate.addEventListener("click",
  function() {
    // condition if burgerName is empty
    if (burgerName.value == "") {
      alert("Before place your order, you must enter Your burger name!!")
    }else{
      // calculate the total price for chosen ingredients
      for (var i = 0; i < ingredient.length; i++) {
        if (ingredient[i].checked) {
          sum += parseInt(ingredient[i].value);
        }
      }

    }
  }
);
