let imgToggleBtn = document.getElementById("resolution-toggle");
let imagesToToggle = document.querySelectorAll(".to-toggle");

const onToggle = (e)=> {
  if(imgToggleBtn.classList.contains("h")) {
    imgToggleBtn.classList.toggle("h");
    imgToggleBtn.innerHTML = "Low res";
    imagesToToggle.forEach((img) => {
      img.classList.toggle("low");
      let currentSrc = img.src;
      let newSrc = currentSrc.replace("-low", "");
      img.src = newSrc;
    });
  } else {
    imgToggleBtn.classList.toggle("h");
    imgToggleBtn.innerHTML = "Hi res";
    imagesToToggle.forEach((img) => {
      img.classList.toggle("low");
      let currentSrc = img.src;
      let splitSrc = currentSrc.split(".");
      let newSrc = [splitSrc[0], "-low.", splitSrc[1]].join("");
      img.src = newSrc;
    });
  }
}

imgToggleBtn.addEventListener("click", onToggle);
