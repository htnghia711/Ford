// Click Button Event
document.getElementById("viewBtn").addEventListener("click", showHideNews);
document
  .getElementById("disclosuresBtn")
  .addEventListener("click", showHideDisclosures);

// Nút view all,view less
function showHideNews() {
  viewContent = document.querySelectorAll("#viewBtn span");
  hideNews = document.querySelectorAll(".news__content .mb-hide");
  if (viewContent[0].innerHTML == "View All") {
    viewContent[0].innerHTML = "View Less";
    viewContent[1].innerHTML = '<i class="fa fa-minus-circle"></i>';
    for (var i = 0; i < hideNews.length; i++) {
      hideNews[i].classList.add("mb-show");
    }
  } else {
    viewContent[0].innerHTML = "View All";
    viewContent[1].innerHTML = '<i class="fa fa-plus-circle"></i>';
    for (var i = 0; i < hideNews.length; i++) {
      hideNews[i].classList.remove("mb-show");
    }
  }
}

// Ẩn hiện phần Disclosures
function showHideDisclosures() {
  mainContent = document.querySelector(".disclosures");
  content = document.querySelector(".disclosures .disclosures__content");
  if (content.getAttribute("aria-hidden") == "false") {
    content.setAttribute("aria-hidden", "true");
    mainContent.classList.remove("open");
  } else {
    content.setAttribute("aria-hidden", "false");
    mainContent.classList.add("open");
  }
}

// backToTop Btn
var scrollValueOld = 0;
function backToTop() {
  var scrollValueNew = document.querySelector("html").scrollTop;
  var backtoTopEle = document.querySelector(".backtotop");
  if (scrollValueNew < scrollValueOld) {
      backtoTopEle.classList.add("show");
  } else {
    backtoTopEle.classList.remove("show");
  }
  if (document.documentElement.scrollTop < 500) {
    backtoTopEle.classList.remove("show");
  }
  scrollValueOld = scrollValueNew;
}
function toTop() {
  document.documentElement.scrollTop = 0;
}

