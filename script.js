document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('fitai-button');

  if (button) {
    button.addEventListener('click', () => {
      alert('¡Hola desde FitAI!');
    });
  }
});
