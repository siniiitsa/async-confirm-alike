const toButton = ({ label, value }) => (
  `<button data-type="option" data-value="${value}" class="option">
    ${label}
  </button>`
);

const buildButtonsHTML = (options) => (
  options.map(toButton).join('')
);

const buildModal = (question, options) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <h3 class="question">${question}</h3>
    <div class="buttons">
      ${buildButtonsHTML(options)}
    </div>
  `;

  return modal;
}

export const asyncConfirm = (question, options) => {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');
  const modal = buildModal(question, options);
  shadow.append(modal);
  document.body.prepend(shadow);

  return new Promise((resolve) => {
    modal.addEventListener('click', (e) => {
      if (e.target.dataset.type !== 'option') {
        return;
      };

      shadow.remove();
      const { value } = e.target.dataset;
      resolve(value);
    });
  });
};
