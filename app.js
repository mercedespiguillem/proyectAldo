// FORM DE CONTACTO QUE APARECE AL HACER CLIC EN EL BOTON CONTACTANOS

let boton = document.getElementById("btnSubmit");
boton.addEventListener("click", showForm);

const element = document.getElementById("act2");

function showForm(e) {
  e.preventDefault();
  createForm(element);
}

function createForm(element) {
  if (element.childNodes[0]) {
    element.removeChild(element.childNodes[2]);

    const formulary = document.createElement("form");

    formulary.id = "form";
    formulary.className = "card m-3 p-5";
    formulary.innerHTML = `<div class="container-fluid">
  <h2 class="titles mb-4">
    Envianos tus datos para realizar la inscripción
  </h2>
      <div class="mb-3">
        <input required
            type="text"
            name="name"
            id="name"
            placeholder="Nombre y apellido"
            class="form-control form-control-lg m-2">
      </div>
      <div class="mb-3">
        <input required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="form-control form-control-lg m-2">
      </div>
      <div class="mb-3">
        <input
        required
        type="number"
        name="dni"
        id="dni"
        placeholder="Número de documento"
        class="form-control form-control-lg m-2"/>
      </div>  
      <div class="mb-3">
        <input
        required
        type="number"
        name="phone"
        id="phone"
        placeholder="Número de teléfono"
        class="form-control form-control-lg m-2"/>
      </div>  
      <div class="mb-3">
        <textarea
        required
        type="text"
        name="message"
        id="message"
        placeholder="Escriba aquí su mensaje"
        class="form-control form-control-lg m-2"></textarea>
      </div>
      <input type="submit" id="button" value="Enviar mensaje" class="btn btn-secondary m-3"/>
    </div>`;

    element.appendChild(formulary);
  }
}
// JS DE EMAIL JS, CAMBIO DE ESTADO DEL BOTON Y ENVIO DEL MENSAJE

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_8wkmphp";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar mensaje";
      alert("El mensaje ha sido enviado con éxito!");
    },
    (err) => {
      btn.value = "Enviar mensaje";
      alert(JSON.stringify(err));
    }
  );
});
