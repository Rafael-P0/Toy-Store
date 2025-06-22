import prompt from 'prompt-sync';
const ler = prompt();


export function MostrarMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Cadastrar novo produto ");
    console.log("2. Listar todos os produtos ");
    console.log("3. Adicionar quantidade ao estoque");
    console.log("4. Retirar quantidade do estoque");
    console.log("5. Relatório de estoque");
    console.log("6. Apagar produto");
    console.log("7. Buscar produto");
    console.log("8. Editar produto");
    console.log("9. relatório de gastos");
    console.log("0 - Sair");
    let escolha = Number(ler());
    return escolha
}