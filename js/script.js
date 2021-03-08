// variables
var burgerName = document.getElementById("burgerName");
var calculate = document.getElementById("buttonCalculate");
var ingredient = document.getElementsByClassName('ingredient');
var discount = document.getElementById('discount');
var coupons = ['BACKTOSCHOOL','GIFT','july4','SHIPFREE','FALL10','CyberMon','10off','MOM','FALL2011','GOBBLE','SAVE15'];
var totalPrice = document.getElementById("totalPrice");

// click
calculate.addEventListener("click",
  function() {
    // condition if burgerName is empty
    var sum = 50;
    if (burgerName.value == "") {
      alert("Before place your order, you must enter Your burger name!!")
    }else{
      // calculate the total price for chosen ingredients
      for (var i = 0; i < ingredient.length; i++) {
        if (ingredient[i].checked) {
          sum += parseInt(ingredient[i].value);
        }
      }
      // discount
      if (coupons.includes(discount.value) == true){
        sum -= sum * 0.2;
        // delete the coupon from the array once it's used
        var deleteCoupon = coupons.indexOf(discount.value);
        coupons.splice(deleteCoupon, 1);
      }
      // add the decimals to the sum
      sum = (Math.round(sum * 100) / 100).toFixed(2);

      // insert in the result in the html
      totalPrice.innerHTML = "$ " + sum;
      console.log(coupons)
    }
  }
);
