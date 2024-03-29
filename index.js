function ReadElement(selector) {
  return document.querySelector(selector);
}
const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');
const viewModal1 = ReadElement('.view-card-1');
const viewModal2 = ReadElement('.view-card-2');
const viewModal3 = ReadElement('.view-card-3');
const viewModal4 = ReadElement('.view-card-4');
const CardModal = ReadElement('.modal-section');
const emailer = ReadElement('#useremail');
const validator = ReadElement('.validator');
const submitbtn = ReadElement('#submit');
const username = ReadElement('#username');
const message = ReadElement('#message');

let myMessage;
let userName;
let email;

let userData = [];

function UpdateInput(selected) {
  function myFunction() {
    email = emailer.value;
    userName = username.value;
    myMessage = message.value;
    userData = [userName, email, myMessage];
    localStorage.setItem('userData', userData);
  }
  selected.addEventListener('change', myFunction);
}

myMessage = UpdateInput(message);
userName = UpdateInput(username);
email = UpdateInput(emailer);

const myFormData = localStorage.getItem('userData');
const myFormDataArray = myFormData.split(',');

if (myFormDataArray.length > 0) {
  [username.value, emailer.value, message.value] = myFormDataArray;
}

function Add() {
  nav.classList.add('nav-toggle');
  document.body.classList.add('stop-scrolling');
}
function AddMenu(selected) {
  return selected.addEventListener('click', Add);
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
const cardDetails = [
  {
    title: 'Tonic',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'assits/Snapshoot-Portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  }, {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'assits/Snapshoot-Portfolio2.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  }, {
    title: 'Tonic',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'assits/Snapshoot-Portfolio3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  }, {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'assits/Snapshoot-Portfolio4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  },
];
function renderModal(number) {
  const card = cardDetails[number];
  const modalInstance = ` <div class=" card-modal">
      <div class="card-modal-head">
          <h1 class="card-title card-modal-head">${card.title}</h1>
          <span class="close-modal">x</span>
      </div>
      <div class="position card-desc">
          <h4 class="client-text">${card.name}</h4>
          <H5 class="role-text">&#x25cf; ${card.technology}</H5>
          <H5 class="year-text">&#x25cf; ${card.year}</H5>
      </div>
      <img class="card-modal-img" src=${card.imageUrl} alt="The Snapshoot-Portfolio image">
      <div class="card-modal-middle">
      <div class="card-modal-middle-group1"> <p class="card-info-model">
      ${card.description}
          </p>
          </div>
          <div class="card-modal-middle-group2">
              <div class="techs" id="techs">
                  ${card.languages.map((lang) => `<div class="tag-item" id="techs-item">${lang}</div>`).join('')}
                
                  </div>
                  <hr class="card-modal-hr">
                  <div class="card-modal-btn-grp">
                  <a href=${card.liveLink} id="btn-link" <button type="button" class="view-more card-modal-btn"><p class="card-modal-btn-text">See live</p> <img class="btn-icon" src="assits/card-icon1.png" alt="icon img"></button></a>
                  <a href=${card.sourceCode} id="btn-link" <button type="button" class="view-more card-modal-btn"><p class="card-modal-btn-text">See Source</p> <img class="btn-icon" src="assits/card-icon2.png" alt="icon img"></button></a>
                  </div>
                  </div> 
                  </div>
    </div>`;

  CardModal.innerHTML = modalInstance;
}
function Addwindow(selected, modalPart, opener, number) {
  return selected.addEventListener('click', () => {
    modalPart.classList.add(opener);
    modalPart.style.top = '0px';
    if (number) {
      renderModal(number - 1);
      document.body.classList.add('stop-scrolling');
    }
  });
}

function RemoveWindow(selected, modalPart, remover) {
  return selected.addEventListener('click', () => {
    modalPart.classList.remove(remover);
    document.body.classList.remove('stop-scrolling');
  });
}

RemoveWindow(nav, nav, 'nav-toggle');

function EmailValidation(e) {
  const email = emailer.value;
  let text;
  if (email === email.toLowerCase() && email !== '') {
    text = 'Email is inserted in lowercase as required';
    validator.innerHTML = text;
    validator.classList.add('validator-green');
    submitbtn.style.marginTop = '20px';
  } else {
    text = 'Email is required and has to be in lowercase';
    validator.innerHTML = text;
    validator.classList.remove('validator-green');
    validator.classList.add('validator-red');
    submitbtn.style.marginTop = '20px';
    e.preventDefault();
  }
}
const e = this;
submitbtn.addEventListener('click', () => EmailValidation(e));

Addwindow(menu, nav, 'nav-toggle');
Addwindow(viewModal1, CardModal, 'nav-toggle', 1);
Addwindow(viewModal2, CardModal, 'nav-toggle', 2);
Addwindow(viewModal3, CardModal, 'nav-toggle', 3);
Addwindow(viewModal4, CardModal, 'nav-toggle', 4);
RemoveWindow(CardModal, CardModal, 'nav-toggle');
RemoveWindow(closeNav, nav, 'nav-toggle');
RemoveWindow(nav, nav, 'nav-toggle');