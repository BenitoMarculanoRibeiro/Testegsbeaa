function sizeOfThings() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var screenWidth = screen.width;
    var screenHeight = screen.height;

    document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
    document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;
    document.getElementById('cabecalho').style.width = (windowWidth * 0.9) + "px";
    document.getElementById('cabecalho').style.height = (windowHeight * 0.1) + "px";
    document.getElementById('corpo').style.width = (windowWidth * 1.0) + "px";
    document.getElementById('corpo').style.height = (windowHeight * 0.8) + "px";
    document.getElementById('rodape').style.width = (windowWidth * 0.9) + "px";
    document.getElementById('rodape').style.height = (windowHeight * 0.1) + "px";
};

function downloadArquivo(content, filename, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
};