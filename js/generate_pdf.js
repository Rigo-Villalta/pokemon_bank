function generatePdf(id) {
    const comprobante = new jsPDF('p', 'pt', 'letter');
    comprobante.canvas.height = 72 * 11;
    comprobante.canvas.width = 72 * 8.5;

    comprobante.fromHTML(document.getElementById(id));

    comprobante .save('comprobante.pdf');
};