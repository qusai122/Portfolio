function ReadElement(selector) {
  return document.querySelector(selector);
}
const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');
function Add() {
  nav.classList.add('nav-toggle');
  document.body.classList.add('stop-scrolling');}
function AddMenu(selected) {
  return selected.addEventListener('click',Add);
}
function Remove() {
  nav.classList.remove('nav-toggle');
  document.body.classList.remove('stop-scrolling');
}
function RemoveMenu(selected) {
  return selected.addEventListener('click', Remove);
}
AddMenu(menu);
RemoveMenu(closeNav);
RemoveMenu(choose);