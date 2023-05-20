/* 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.*/

const drItem = document.querySelectorAll(".dropdown-item");
drItem.forEach(item => item.classList.add('super-dropdown'));


// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const itemBtm = document.querySelector('.btn');
itemBtm.classList.toggle('btn-secondary');


// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const classMenu = document.querySelector('.menu');
classMenu.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const target = document.querySelector('.dropdown');
target.nextElementSibling.insertAdjacentHTML('afterBegin', '<a href="#">link</a>');


// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

document.getElementById('dropdownMenuButton').id = 'superDropdown';

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

document.querySelector('[aria-labelledby="dropdownMenuButton"]')
.dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle". 

document.querySelector('.dropdown-toggle').removeAttribute('type');

