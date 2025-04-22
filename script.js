document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.workout-btn');
  const details = document.getElementById('workout-details');

  const workouts = {
    Piernas: "✅ Sentadillas<br>✅ Zancadas<br>✅ Elevaciones de talones",
    Cardio: "✅ Jumping jacks<br>✅ Correr en el lugar<br>✅ Burpees",
    Espalda: "✅ Superman<br>✅ Remo invertido<br>✅ Estiramientos gato/vaca"
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.workout;
      details.innerHTML = `<h2>${type}</h2><p>${workouts[type]}</p>`;
    });
  });
});