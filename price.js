var arrprice = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
var arrview = ["10K", "50K", "100K", "500K", "1M"];
var percent = [0, 25, 50, 75, 100];
var arrprice25 = ["$6.00", "$9.00", "$12.00", "$18.00", "$27.00"];

let slider = document.getElementById("inp");

// console.log(check.checked);
slider.addEventListener("input", function () {
  price();
});
function price() {
  let check = document.getElementById("switch");
  if (check.checked != true) {
    let x = document.getElementById("inp").value;

    let r;
    if (x == 0) {
      r = x;
    } else {
      r = x / 20 - 1;
    }
    let y = document.getElementById("views");
    let z = document.getElementById("price");
    y.innerHTML = arrview[r];
    z.innerHTML = arrprice[r];
    let val = percent[x / 20 - 1];
    let range = document.getElementById("inp");
    range.style.background =
      "linear-gradient(to right, rgb(93, 234, 220) " +
      val +
      "%, rgb(233, 222, 222) " +
      val +
      "%)";
  } else {
    let x = document.getElementById("inp").value;

    let r;
    if (x == 0) {
      r = x;
    } else {
      r = x / 20 - 1;
    }
    let y = document.getElementById("views");
    let z = document.getElementById("price");
    y.innerHTML = arrview[r];
    z.innerHTML = arrprice25[r];
    let val = percent[x / 20 - 1];
    let range = document.getElementById("inp");
    range.style.background =
      "linear-gradient(to right, rgb(93, 234, 220) " +
      val +
      "%, rgb(233, 222, 222) " +
      val +
      "%)";
  }
}
