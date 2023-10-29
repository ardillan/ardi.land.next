export const getExperience = (birthDate: Date): number => {
  const today = new Date();
  const nextBirthDay = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  const dayInMiliseconds = 1000 * 60 * 60 * 24;

  if (nextBirthDay < today) {
    nextBirthDay.setFullYear(today.getFullYear() + 1);
  }

  const daysToNextBirthday = Math.ceil(
    (nextBirthDay.getTime() - today.getTime()) / dayInMiliseconds
  );

  return daysToNextBirthday;
};

// export const calcularDias = (fechaNacimiento: Date): number => {
//   const hoy = new Date();
//   const proximoCumpleaños = new Date(
//     hoy.getFullYear(),
//     fechaNacimiento.getMonth(),
//     fechaNacimiento.getDate()
//   );

//   if (proximoCumpleaños < hoy) {
//     proximoCumpleaños.setFullYear(hoy.getFullYear() + 1);
//   }

//   const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
//   return Math.ceil(
//     (proximoCumpleaños.getTime() - hoy.getTime()) / unDiaEnMilisegundos
//   );
// };
