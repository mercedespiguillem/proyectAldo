$(document).ready(function () {
  $("#btnSubmit").click(() => {
    $("#form2").slideDown("slow");
  });

  $("#btnSubmit").click(() => {
    $("#act2").append(`
        <div id="form2" class="container">
              <h2 class="titles">
                Envianos tus datos para realizar la inscripcion
              </h2>
              <div class="row d-flex" id="">
                <div class="col col-sm-8 col-md-6 m-2">
                  <input
                    type="text"
                    name="Nombre y apellido"
                    id=""
                    placeholder="Nombre y apellido"
                    class="form-control form-control-lg m-2"
                  />
                  <input
                    type="email"
                    name="Email"
                    id=""
                    placeholder="email"
                    class="form-control form-control-lg m-2"
                  />
                  <textarea
                    type="text"
                    name="Email"
                    id=""
                    placeholder="mensaje"
                    class="form-control form-control-lg m-2"
                  ></textarea>
                  <button type="submit" id="btn2" class="btn btn-secondary m-3">
                    Aceptar
                  </button>
                </div>
              </div>
        </div>`);
  });
});
