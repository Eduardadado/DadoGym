function ocultarImagem(imagem) {
    imagem.style.display = "none";

    // Agora, depois de 3 segundos (3000 milissegundos), a imagem reaparecerá
    setTimeout(function() {
        imagem.style.display = "inline";
    }, 3000);
}