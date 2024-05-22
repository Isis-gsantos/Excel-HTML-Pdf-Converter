class Table {
    constructor(arr) {
        this.header = arr[0];
        arr.shift(); 
        this.rows = arr;
    }

    get RowCount() {
        return this.rows.length; //isso vai retornar a quantidade de linhas atuais que eu tenho na minha tabela. Se eu declarasse isso dentro do constructor ele iria permanecer pra sempre apenas uma quantidade x e não atualizaria a quantidade real caso eu venha a excluir uma linha
    }

    //campo virtual de contagem de colunas
    get ColumnCount() {
        return this.header.length;
    }
}

module.exports = Table;