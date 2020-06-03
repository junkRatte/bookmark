/* features */
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

/* select tab content item */
function selectItem(e) {
    removeBorder();
    removeShow();

    /* add border to tab */
    this.classList.add("tab-border");

    /* grab content item */
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    /* show item */
    tabContentItems.classList.add("show");
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

/* listen for tab click */
tabItems.forEach(item => item.addEventListener("click", selectItem));



/* accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



/* email validation */
function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your email address is invalid";
    text.style.color = "#fff";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid email address";
    text.style.color = "#fff";
  }
}