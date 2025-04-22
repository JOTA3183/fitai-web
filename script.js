// Se seleccionan todos los botones de entrenamiento
const workoutButtons = document.querySelectorAll('.workout-btn');
const workoutDetails = document.getElementById('workout-details');

// Función para mostrar los detalles de un entrenamiento
const showWorkoutDetails = (workoutType) => {
  const workouts = {
    Piernas: {
      description: 'Una rutina completa para tonificar las piernas.',
      exercises: ['Sentadillas', 'Lunges', 'Prensa de Piernas'],
    },
    Cardio: {
      description: 'Rutina de Cardio para quemar grasa y mejorar resistencia.',
      exercises: ['Correr en sitio', 'Jumping Jacks', 'Saltar la cuerda'],
    },
    Espalda: {
      description: 'Rutina enfocada en fortalecer la espalda.',
      exercises: ['Pull-ups', 'Remo', 'Superman'],
    },
  };

  // Se obtienen los detalles del entrenamiento según el tipo
  const details = workouts[workoutType];

  if (details) {
    workoutDetails.innerHTML = `
      <h2>${workoutType}</h2>
      <p>${details.description}</p>
      <ul>
        ${details.exercises.map(ex => `<li>${ex}</li>`).join('')}
      </ul>
    `;
  } else {
    workoutDetails.innerHTML = '<p>Selecciona un entrenamiento.</p>';
  }
};

// Se agrega el evento de clic a cada botón
workoutButtons.forEach(button => {
  button.addEventListener('click', () => {
    const workoutType = button.dataset.workout;
    showWorkoutDetails(workoutType);
  });
});