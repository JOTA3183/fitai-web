document.addEventListener('DOMContentLoaded', () => {
  // Muestra detalles del grupo muscular
  const workoutButtons = document.querySelectorAll('.workout-btn');
  const detailsDiv = document.getElementById('workout-details');

  workoutButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tipo = button.getAttribute('data-workout');
      mostrarDetalles(tipo);
    });
  });

  function mostrarDetalles(tipo) {
    let mensaje = '';

    switch (tipo) {
      case 'Piernas':
        mensaje = 'Sentadillas, Zancadas, Puente de glúteos.';
        break;
      case 'Cardio':
        mensaje = 'Jumping jacks, Burpees, Mountain climbers.';
        break;
      case 'Espalda':
        mensaje = 'Superman, Remo con banda elástica, Estiramientos.';
        break;
      default:
        mensaje = 'Selecciona una rutina para ver los detalles.';
    }

    detailsDiv.innerHTML = `<p><strong>${tipo}:</strong> ${mensaje}</p>`;
  }

  // Función para rutinas por nivel
  window.iniciarRutina = (nivel) => {
    let mensaje = '';

    switch (nivel) {
      case 'principiante':
        mensaje = 'Rutina Principiante: 20 minutos de ejercicios básicos.';
        break;
      case 'intermedio':
        mensaje = 'Rutina Intermedia: 30 minutos con intensidad moderada.';
        break;
      case 'avanzado':
        mensaje = 'Rutina Avanzada: 45 minutos de entrenamiento exigente.';
        break;
      default:
        mensaje = 'Selecciona un nivel válido.';
    }

    alert(mensaje);
  };
});