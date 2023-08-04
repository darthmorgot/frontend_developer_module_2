(function () {
  'use strict';

  // Управление (открытие-закрытие) меню кнопкой-гамбургером
  function openCloseMenu() {
    let btn = document.querySelector('.nav__menu-button');
    let navList = document.querySelector('.nav__list');
    let navTop = document.querySelector('.nav__top');

    btn.addEventListener('click', () => {
      for (let i = 0; i < btn.children.length - 1; i++) {
        if (btn.children[i].classList.contains('toggle')) {
          btn.children[i].classList.remove('toggle');
          addRemoveClass(btn, 'nav__menu-button--open', 'nav__menu-button--close');
        } else {
          btn.children[i].classList.add('toggle');
          addRemoveClass(btn, 'nav__menu-button--close', 'nav__menu-button--open');
        }
      }

      navList.classList.toggle('toggle');
      navTop.classList.toggle('nav__top--close-menu');
    });
  }

  /** Добавление-удаление класса элементу, в данном случае кнопке-гамбургеру
   * для отображения открытия или закрытия меню
   * @param elem кнопка-гамбургер
   * @param removeClass удаляемый класс
   * @param addClass добавляемый класс
   */
  function addRemoveClass(elem, removeClass, addClass) {
    elem.classList.remove(removeClass);
    elem.classList.add(addClass);
  }

  openCloseMenu();
})();
