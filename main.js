let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de la Universidad Tecnologica de Aguascalientes en la carrera de Tecnologias de la Informacion.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
