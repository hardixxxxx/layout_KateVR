export function initForm() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    location.hash = 'home';

    form.reset();
  });
}
