// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener('DOMContentLoaded', function () {
    const authColumn = document.querySelector('.header__column_auth');
    const menuBody = document.querySelector('.menu__body');
    const mediaQuery = window.matchMedia('(max-width: 514px)');
    const headerContainer = document.querySelector('.header__container');
    const originalNextElement = document.querySelector('.header__column_wide').nextSibling;
  
    function moveAuthItems() {
      if (mediaQuery.matches) {
        if (!menuBody.contains(authColumn)) {
          menuBody.appendChild(authColumn);
        }
      } else {
        if (headerContainer.contains(menuBody)) {
          headerContainer.insertBefore(authColumn, originalNextElement);
        }
      }
    }
  
    mediaQuery.addListener(moveAuthItems);
  
    moveAuthItems();
  });

//   .......................................................................................

window.addEventListener("load", function (e) {
  document.body.insertAdjacentHTML('beforeend', `<div class="main-bg"></div>`);
});