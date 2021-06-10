const btnEnviar = document.querySelector("#btnEnviar");
const inputFile = document.querySelector("#inputFile");
btnEnviar.addEventListener("click", upload);

async function upload() {
  if (inputFile.files.length > 0) {
    const formData = new FormData();
    formData.append("archivo", inputFile.files[0]); // En la posición 0; es decir, el primer elemento

    const url = "guardar.php";
    const respuesta = await fetch(url, { method: "POST", body: formData });
    const decodificado = await respuesta.text();
    console.log(decodificado);
  } else {
    alert("Selecciona un archivo");
  }
}
