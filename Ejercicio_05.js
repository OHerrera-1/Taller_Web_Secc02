function generarUsuario(nombreCompleto) {
  let usuario = nombreCompleto.toLowerCase();
  usuario = usuario.replaceAll(" ", "");
  usuario = usuario + "_dev";
  return usuario;
}

console.log(generarUsuario("Juan Perez"));    
console.log(generarUsuario("Maria Lopez"));
