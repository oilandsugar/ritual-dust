const imgToggleBtn = document.getElementById("resolution-toggle");
const imagesToToggle = document.querySelectorAll(".to-toggle");
const userPref = localStorage.getItem("image-resolution");

const setHiRes = () => {
  localStorage.setItem("image-resolution", "high");
  imgToggleBtn.classList.toggle("h");
  imgToggleBtn.innerHTML = "Low res";
  imgToggleBtn.setAttribute("aria-label", "Load low resolution images");
  imgToggleBtn.title = "Load low resolution images";
  imagesToToggle.forEach((img) => {
    img.classList.toggle("low");
    img.src = img.dataset.srchi;
  });
}

const setLowRes = () => {
  localStorage.setItem("image-resolution", "low");
  imgToggleBtn.classList.toggle("h");
  imgToggleBtn.innerHTML = "Hi res";
  imgToggleBtn.setAttribute("aria-label", "Load high resolution images");
  imgToggleBtn.title = "Load high resolution images";
  imagesToToggle.forEach((img) => {
    img.classList.toggle("low");
    img.src = img.dataset.srclow;
  });
}

if(userPref && userPref == "high") {
  setHiRes();
}

const onToggle = (e)=> {
  if(imgToggleBtn.classList.contains("h")) {
    setHiRes();
  } else {
    setLowRes();
  }
}

imgToggleBtn.addEventListener("click", onToggle);
