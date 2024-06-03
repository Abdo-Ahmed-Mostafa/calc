const allBtn = document.querySelectorAll(".num1");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const myInput = document.querySelector(".value");
allBtn.forEach((element) => {
  element.addEventListener("click", () => {
    myInput.value += element.innerHTML;
  });
});

clear.addEventListener("click", () => {
  myInput.value = myInput.value.slice(0, -1);
});

del.addEventListener("click", () => {
  myInput.value = "";
});

equal.addEventListener("click", () => {
  if (
    !isNaN(myInput.value[0]) &&
    !isNaN(myInput.value[myInput.value.length - 1])
  ) {
    myInput.value = eval(myInput.value);
  }
});
