const pdf = require("html-pdf");

class PDFWriter {
    static WritePDF(filename, html) {
        //passa o nome do arquivo que quero gerar e um html para gerar o arquivo
        pdf.create(html, {}).toFile(filename, (err) => {})
        //passa o conteúdo que quero inserir dentro do pdf que vai vir no html, posso passar algumas opções (mas não foi feito nesse caso)
        //além disso vou dizer que quero gerar esse pdf para um arquivo "toFile", dentro dele fala o nome do arquivo que vou receber no primeiro parâmetro (filename) e ela precisa ter um callback(que não foi necessário)
    }
}

module.exports = PDFWriter;