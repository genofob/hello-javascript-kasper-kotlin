function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " +
    document.querySelector("#name").value +
    " dit gamle røvhul på " +
    document.querySelector("#age").value +
    ", med mail: " +
    document.querySelector("#mail").value;
}
document.querySelector("button").addEventListener("click", sayHello);
