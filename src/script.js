function travelNow() {
  let name = prompt("What's your name?").toLowerCase().trim();
  let country = prompt("Where's country do you live?").toLowerCase().trim();
  if (country === "indonesia") {
    alert(
      `Hi ${name}💖, terima kasih atas datanya dan akan segera kami hubungi🌤`
    );
  } else {
    alert(`Hi ${name}😎, thank you! we'll be in touch🤩`);
  }
}
let travelButton = document.querySelector("button");
travelButton.addEventListener("click", travelNow);
