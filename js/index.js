/***************validadción******************/
function validacion() {
    let correcto = true;
    let nombre = document.getElementById('nombre').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let email = document.getElementById('email').value.trim();
  
    if (nombre === "" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ]{2,}/i.test(nombre)) {
      document.getElementById('nombreHelp').style.visibility = "visible";
      document.getElementById('nombre').style.borderColor = "red";
      correcto = false;
    } else {
      document.getElementById('nombreHelp').style.visibility = "hidden";
      document.getElementById('nombre').style.borderColor = "";
    }
  
    if (apellidos === "" || /^\s+$/.test(apellidos) || /[0-9]/.test(apellidos) || !/[a-zñ]{2,}/i.test(apellidos)) {
      document.getElementById('apellidosHelp').style.visibility = "visible";
      document.getElementById('apellidos').style.borderColor = "red";
      correcto = false;
    } else {
      document.getElementById('apellidosHelp').style.visibility = "hidden";
      document.getElementById('apellidos').style.borderColor = "";
    }
  
    if (email !== "" && !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/.test(email)) {
      document.getElementById('emailHelp').style.visibility = "visible";
      document.getElementById('email').style.borderColor = "red";
      correcto = false;
    } else {
      document.getElementById('emailHelp').style.visibility = "hidden";
      document.getElementById('email').style.borderColor = "";
    }
  
    return correcto;
  }
  