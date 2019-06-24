var playButton = document.getElementsByClassName("play-button");
var pauseButton = document.getElementsByClassName("pause-button");
var subUtilOpener = document.getElementsByClassName("sub-util-opener");
var subUtils = document.getElementsByClassName("sub-util");
var languageButton = document.getElementById("language-btn");
var selectedLanguage = document.getElementById("selected-language");
var languageModal = document.getElementById("language-modal");
var html = document.getElementById("html");
var blurBg = document.querySelector(".blur-bg");
var cancelModel = document.querySelector(".cancel-modal");
var languageLinks = Array.from(document.querySelectorAll(".language-link"));

playButton = Array.from(playButton);
pauseButton = Array.from(pauseButton);

/*Play Button and Pause */
playButton.map((item, index) => {
  item.addEventListener("click", e => {
    item.classList.add("none");
    pauseButton[index].classList.remove("none");
  });
  return item;
});

pauseButton.map((item, index) => {
  item.addEventListener("click", e => {
    item.classList.add("none");
    playButton[index].classList.remove("none");
  });
  return item;
});

/*Sub Util */

subUtilOpener = Array.from(subUtilOpener);
subUtils = Array.from(subUtils);

subUtilOpener.map((opener, index) => {
  opener.addEventListener("click", e => {
    if (subUtils[index].classList.contains("open")) {
      subUtils[index].classList.remove("open");
    } else {
      subUtils[index].classList.add("open");
    }
  });
  return opener;
});

/*Language Button */
languageButton.addEventListener("click", e => {
  languageModal.classList.add("open");
  html.classList.add("none");
  blurBg.classList.add("active");
});

cancelModel.addEventListener("click", e => {
  languageModal.classList.remove("open");
  html.classList.remove("none");
  blurBg.classList.remove("active");
});

languageLinks.map(item => {
  item.addEventListener("click", e => {
    selectedLanguage.textContent = item.textContent;
    languageModal.classList.remove("open");
    html.classList.remove("none");
    blurBg.classList.remove("active");
  });
  return item;
});
