export const asyncConfirm = (question, options) => {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  shadow.append(modal);

  const buttons = options.map(({ label, value }) => (
    `<button data-type="option" data-value="${value}" class="option">${label}</button>`
  ));

  const content = `
    <h3 class="question">${question}</h3>
    <div class="buttons">
      ${buttons.join('')}
    </div>
  `;

  modal.innerHTML = content;
  document.body.append(shadow);

  return new Promise((resolve) => {
    modal.addEventListener('click', (e) => {
      if (e.target.dataset.type !== 'option') {
        return;
      };

      e.currentTarget.parentElement.remove();
      const { value } = e.target.dataset;
      resolve(value);
    });
  });
};
