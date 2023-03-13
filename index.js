function ReadElement(selector) {
  return document.querySelector(selector);
}
const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');
function AddMenu(selected) {
  return selected.addEventListener('click', () => nav.classList.add('nav-toggle'));
}
function RemoveMenu(selected) {
  return selected.addEventListener('click', () => nav.classList.remove('nav-toggle'));
}
AddMenu(menu);
RemoveMenu(closeNav);
RemoveMenu(choose);
const viewModal1 = ReadElement('.view-card-1');
const viewModal2 = ReadElement('.view-card-2');
const viewModal3 = ReadElement('.view-card-3');
const viewModal4 = ReadElement('.view-card-4');
const cardDetails = [
  {
    title: 'Tonic',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  }, {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio4.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  }, {
    title: 'Tonic',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  }, {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/qusai-issa-ab5a59156/',
    sourceCode: 'https://github.com/qusai122',
  },
];
function renderModal(number) {
  const card = details[number];
  const modalInstance = ` <div class=" card-modal">
      <div class="card-modal-head">
          <h1 class="title card-modal-head">${card.title}</h1>
          <span class="close-modal">x</span>
      </div>
      <div class="position card-modal-head-body">
          <h4 class="place">${card.name}</h4>
          <H5 class="post-name">&#x25cf; ${card.technology}</H5>
          <H5 class="post-year">&#x25cf; ${card.year}</H5>
      </div>
      <img class="card-modal-img" src=${card.imageUrl} alt="The Snapshoot-Portfolio image">
      <div class="card-modal-middle">
      <p class="description">
      ${card.description}
          </p>
          <div class="card-modal-middle-group">
              <div class="techs" id="techs">
                  ${card.languages.map((lang) => `<div class="single-tech" id="techs-item">${lang}</div>`).join('')}
                
                  </div>
                  <hr class="card-modal-hr">
                  <div class="card-modal-btn-grp">
                  <a href=${card.liveLink} id="btn-link" ><button type="button" class="view-more card-modal-btn">See live <img class="btn-icon" src="images/icons/Icon.png" alt="icon img"></button></a>
                  <a href=${card.sourceCode} id="btn-link" <button type="button" class="view-more card-modal-btn">See Source <img class="btn-icon" src="images/icons/Vector.png" alt="icon img"></button></a>
                  </div>
                  </div> 
                  </div>
    </div>`;

  WorkModal.innerHTML = modalInstance;
}
function AddMenu(selected, modalPart, opener, number) {
  return selected.addEventListener('click', () => {
    modalPart.classList.add(opener);
    modalPart.style.top = '0px';

    if (number) {
      renderModal(number - 1);
    }
  });
}