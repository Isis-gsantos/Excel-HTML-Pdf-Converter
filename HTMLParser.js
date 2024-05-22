const ejs = require("ejs");

class HtmlParser {
    static async Parse(table) {
        //para converter a tabela para o html precisa de um arquivo html do ejs base para gerar as tabelas, que é o table.ejs
        /*
            dentro do body do arquivo ejs primeiramente foi colocado as seguintes tags para depois prosseguir com o que vai dentro desse método Parse (conteúdo abaixo)
            <body>
                <table>
                    <thead>
                        <!-- quero printar o cabeçalho, que é um array -->
                        <% header.forEach(col => { %>
                            <th><%= col %></th>
                            <!-- para cada elemento dentro do cabeçalho vou fazer algo e esse algo é printar a coluna no html -->
                        <% }) %>
                    </thead>
                </table>
            </body>
        */
        return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows});
        //com o renderFile estou dizendo para pegar o arquivo ejs, olhe o que tem dentro dele (conteúdo citado acima) e processe esse arquivo. Dentro dele falo qual arquivo quero processar, como segundo parâmetro passar os dados que o ejs precisa para printar por ex o cabeçalho (variável header)
    }
}

module.exports = HtmlParser;