const leftSidebar = document.querySelector(".left-sidebar");

const container = document.createElement("div");
container.classList.add("container");

const showSidebarIcon = document.createElement("button");
showSidebarIcon.classList.add("show-sidebar-icon");
showSidebarIcon.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
showSidebarIcon.setAttribute(
  "style",
  "display:flex;flex-direction:column;justify-content:flex-start;margin-top:-430px;"
);

const crossSidebarIcon = document.createElement("button");
crossSidebarIcon.classList.add("cross-sidebar-icon");
crossSidebarIcon.innerHTML = '<i class="fas fa-ban" aria-hidden="true"></i>';

document.body.appendChild(container);

document.body.appendChild(showSidebarIcon);

container.appendChild(leftSidebar);

leftSidebar.appendChild(crossSidebarIcon);

showSidebarIcon.addEventListener("click", showSidebar);
crossSidebarIcon.addEventListener("click", hideSidebar);

function showSidebar() {
  const showContainer = document.querySelector(".container");

  const showIcon = document.querySelector(".show-sidebar-icon");

  showIcon.style.marginLeft = "198px";

  if ((showContainer.style.visibility = "hidden")) {
    showContainer.setAttribute(
      "style",
      "visibility:visible;marginRight:120px;,transition:2s;"
    );
  } else {
    return;
  }
}

function hideSidebar() {
  const hideContainer = document.querySelector(".container");

  const showIcon = document.querySelector(".show-sidebar-icon");

  showIcon.style.marginLeft = "0px";

  if ((hideContainer.style.visibility = "visible")) {
    hideContainer.setAttribute("style", "visibility:hidden;,transition:2s;");
  } else {
    return;
  }
}
