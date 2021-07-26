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
      img.src = img.dataset.srchi;
    });
  } else {
    imgToggleBtn.classList.toggle("h");
    imgToggleBtn.innerHTML = "Hi res";
    imgToggleBtn.setAttribute("aria-label", "Load high resolution images");
    imgToggleBtn.title = "Load high resolution images";
    imagesToToggle.forEach((img) => {
      img.classList.toggle("low");
      let currentSrc = img.src;
      img.src = img.dataset.srclow;
    });
  }
}

imgToggleBtn.addEventListener("click", onToggle);
