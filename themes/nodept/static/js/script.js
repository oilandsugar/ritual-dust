/* IF NO JS */

document.getElementById("hasJavaScript").style.display = "inline";
document.getElementById("noscript").style.display = "none";

/* GET CURRENT MOON PHASE, SEASON AND NEXT PAGAN HOLIDAY */

var Phases = {
  phases: [
    "New moon",
    "Waxing crescent moon",
    "Quarter moon",
    "wWaxing gibbous moon",
    "Full moon",
    "Waning gibbous moon",
    "Last quarter moon",
    "Waning crescent moon",
  ],
  phase: function (year, month, day) {
    let season;
    let nextHoliday;
    let daysToNextHoliday;

    switch (month) {
      case "01":
        season = "winter";
        nextHoliday = "Imbolg";
        break;
      case "02":
        season = "winter";
        if (day < 2) {
          nextHoliday = "Imbolg";
        } else {
          nextHoliday = "Earrach";
        }
        break;
      case "03":
        if (day < 19) {
          season = "winter";
          nextHoliday = "Earrach";
        } else {
          season = "Spring";
          nextHoliday = "Bealtaine";
        }
        break;
      case "04":
        season = "spring";
        nextHoliday = "Bealtaine";
        break;
      case "05":
        season = "spring";
        nextHoliday = "Samhradh";
        break;
      case "06":
        if (day < 19) {
          season = "spring";
          nextHoliday = "Lúnasa";
        } else {
          season = "summer";
          nextHoliday = "Lúnasa";
        }
        break;
      case "07":
        season = "summer";
        nextHoliday = "Lúnasa";
        break;
      case "08":
        season = "summer";
        nextHoliday = "Fómhar";
        break;
      case "09":
        if (day < 21) {
          season = "summer";
          nextHoliday = "Fómhar";
        } else {
          season = "fall";
          nextHoliday = "Samhain";
        }
        break;
      case "10":
        season = "fall";
        nextHoliday = "Samhain";
        break;
      case "11":
        season = "fall";
        nextHoliday = "Gheimhreadh";
        break;
      case "12":
        if (day < 20) {
          season = "fall";
          nextHoliday = "Gheimhreadh";
        } else {
          season = "winter";
          nextHoliday = "Imbolg";
        }
        break;
    }

    let c = (e = jd = b = 0);

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; // jd is total days elapsed
    jd /= 29.5305882; // divide by the moon cycle
    b = parseInt(jd); // int(jd) -> b, take integer part of jd
    jd -= b; // subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); // scale fraction from 0-8 and round

    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
    return {
      season: season,
      nextHoliday: nextHoliday,
      daysToNextHoliday: daysToNextHoliday,
      phase: b,
      name: Phases.phases[b],
    };
  },
};

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

console.log(Phases.phase(yyyy, mm, dd));

let currentPhase = Phases.phase(yyyy, mm, dd);

document.getElementById("phases").innerHTML +=
  "<a href='/folklore/druidism/#celebrations-and-important-calendar-dates'><span>Currently " +
  currentPhase.season +
  " - " +
  currentPhase.nextHoliday +
  " is coming</span></a>";

/* SWITCH THEME BASED ON THE SEASON */

/* SWITCH THEME DARK MODE OR LIGHT MODE */

const modeToggleBtn = document.getElementById("mode-switcher");
const themeModeUserPref = localStorage.getItem("theme-mode");

const setDarkMode = () => {
    localStorage.setItem("theme-mode", "dark");
    modeToggleBtn.classList.toggle("d");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

const setLightMode = () => {
    localStorage.setItem("theme-mode", "light");
    modeToggleBtn.classList.toggle("d");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

if (themeModeUserPref && themeModeUserPref == "dark") {
  setDarkMode();
}

const onModeSwitch = (e) => {
    console.log("mode switch");
  if (modeToggleBtn.classList.contains("d")) {
    setLightMode();
  } else {
    setDarkMode();
  }
};

modeToggleBtn.addEventListener("click", onModeSwitch);

/* TOGGLE IMAGE QUALITY */

const imgToggleBtn = document.getElementById("resolution-toggle");
const imagesToToggle = document.querySelectorAll(".to-toggle");
const imgQualityUserPref = localStorage.getItem("image-resolution");

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
};

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
};

if (imgQualityUserPref && imgQualityUserPref == "high") {
  setHiRes();
}

const onToggle = (e) => {
  if (imgToggleBtn.classList.contains("h")) {
    setHiRes();
  } else {
    setLowRes();
  }
};

imgToggleBtn.addEventListener("click", onToggle);
