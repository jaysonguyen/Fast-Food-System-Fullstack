import {Collapse} from "bootstrap";

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

document.addEventListener("DOMContentLoaded", function () {
  dropDownSideBar();
});
// DOMContentLoaded  end

function dropDownSideBar() {
  document.querySelectorAll("#sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          this.toggle("active");
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
}
