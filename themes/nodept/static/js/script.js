let imgToggleBtn = document.getElementById("resolution-toggle");
let imagesToToggle = document.querySelectorAll(".to-toggle");

const onToggle = (e)=> {
  if(imgToggleBtn.classList.contains("h")) {
    imgToggleBtn.classList.toggle("h");
    imgToggleBtn.innerHTML = "Low res";
    imgToggleBtn.setAttribute("aria-label", "Load low resolution images");
    imgToggleBtn.title = "Load low resolution images";
    imagesToToggle.forEach((img) => {
      img.classList.toggle("low");
      let currentSrc = img.src;
      let newSrc = currentSrc.replace("-low", "");
      img.src = newSrc;
    });
  } else {
    imgToggleBtn.classList.toggle("h");
    imgToggleBtn.innerHTML = "Hi res";
    imgToggleBtn.setAttribute("aria-label", "Load high resolution images");
    imgToggleBtn.title = "Load high resolution images";
    imagesToToggle.forEach((img) => {
      img.classList.toggle("low");
      let currentSrc = img.src;
      let splitSrc = currentSrc.split(".");
      console.log(splitSrc, "split")
      let newSrc = [splitSrc[0], "-low.", splitSrc[1]].join("");
      console.log(newSrc, "new")
      img.src = newSrc;
    });
  }
}

imgToggleBtn.addEventListener("click", onToggle);
