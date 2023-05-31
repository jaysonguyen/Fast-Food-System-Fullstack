import $ from "jquery";

document.addEventListener("DOMContentLoaded", function () {
  // dropDownSideBar();
  toggleAddProductForm();
  console.log("run into this");
});

// DOMContentLoaded  end
setSideNav();

// setSideNav();

function dropDownSideBar() {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      console.log("Click");
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  });
}

function toggleAddProductForm() {
  $("#addProduct").click(() => {
    $("#addProductForm").removeClass("d-none");
    $("#addProduct").addClass("d-none");
  });

  $("#removeAddProductForm").click(() => {
    $("#addProductForm").addClass("d-none");
    $("#addProduct").removeClass("d-none");
  });
}

function setSideNav() {
  let route = window.location.pathname.split("/")[2];
  let route2 = window.location.pathname.split("/")[3];

  console.log(route, route2);

  let $item = $("#sidebar .nav-link").filter(function () {
    return (
      $(this).prop("href").split("/").splice(-1)[0].indexOf(route) !== -1 ||
      $(this).prop("href").split("/").splice(-1)[0].indexOf(route2) !== -1
    );
  });

  let $item2 = $("#mySidebar .nav-link").filter(function () {
    return (
      $(this).prop("href").split("/").splice(-1)[0].indexOf(route) !== -1 ||
      $(this).prop("href").split("/").splice(-1)[0].indexOf(route2) !== -1
    );
  });

  console.log("item2: ", $("#mySidebar .nav-link"));

  let $authHeader = $("#auth-header .nav-link").filter(function () {
    return (
      $(this).prop("href").split("/").splice(-1)[0].indexOf(route) !== -1 ||
      $(this).prop("href").split("/").splice(-1)[0].indexOf(route2) !== -1
    );
  });
  $item.map((idx, val) => val.classList.toggle("active"));
  $item2.map((idx, val) => val.classList.toggle("active"));
  $authHeader.map((idx, val) => val.classList.toggle("active"));
}
