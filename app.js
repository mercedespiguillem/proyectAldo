// VARIABLES PARA EL FORM DE CONTACTO

let button = document.getElementById("btnSubmit");
button.addEventListener("click", showForm);
const element = document.getElementById("act2");

function showForm(e) {
  e.preventDefault();
  createForm(element);
}

function createForm(element) {
  if (element.childNodes[0]) {
    element.removeChild(element.childNodes[2]);
  }

  const form = document.createElement("form");

  form.className = "card row col-md-10 d-flex align-content-center m-3 p-3";
  form.innerHTML = `<div id="form2">
  <h2 class="titles">
    Envianos tus datos para realizar la inscripcion
  </h2>
  <div class="row d-flex" id="">
    <div class="col col-sm-8 col-md-6 m-2">
      <input
        required
        type="text"
        name="Nombre y apellido"
        id="name"
        placeholder="Nombre y apellido"
        class="form-control form-control-lg m-2"
      />
      <input
      required
        type="email"
        name="Email"
        id="email"
        placeholder="email"
        class="form-control form-control-lg m-2"
      />
      <input
      required
        type="number"
        name="dni"
        id="dni"
        placeholder="Número de documento"
        class="form-control form-control-lg m-2"
      />
      <textarea
        type="text"
        name="textArea"
        id=""
        placeholder="Escribí aquí la actividad en la que te querés inscribir"
        class="form-control form-control-lg m-2"
      ></textarea>
      <button type="submit" id="btn2" class="btn btn-secondary m-3">
        Aceptar
      </button>
    </div>
  </div>
</div>`;

  element.appendChild(form);
}
