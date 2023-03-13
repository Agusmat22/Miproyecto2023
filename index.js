function mostrar()
{

    let nombreUsuario;
    let contraseña;
    let mensaje;
    
    nombreUsuario = document.getElementById("nombreusuario").value;
    
    contraseña = document.getElementById("password");
    
    if(isNaN(nombreUsuario) == false || nombreUsuario == "")
    {
        mensaje = "Error ingrese nuevamente el nombre de usuario";
    }
    else
    {
        mensaje = "Ingreso correctamente los datos";
    }
    

    alert(mensaje);
    
}
