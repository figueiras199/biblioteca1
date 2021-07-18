import React from 'react'

function login() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <div class="login-form bg-light mt-4 p-4">
              <form action="" method="" class="row g-3">
                <h4>Bienvenido a tu biblioteca</h4>
                <div class="col-12">
                  <label>Correo</label>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    placeholder="Inserte su correo"
                  />
                </div>
                <div class="col-12">
                  <label>Constraseña</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Inserte su contraseña"
                  />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      {" "}
                      Recuerdeme
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-dark float-end">
                    Login
                  </button>
                </div>
              </form>
              <hr class="mt-4" />
              <div class="col-12">
                <p class="text-center mb-0">
                  No tienes una cuenta? <a href="#">Iniciar</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default login
