import ClienteDAO from '../DB/clienteDAO.js';

export default class Cliente {
    //Atributos da classe Cliente

    #cpf
    #nome
    #telefone
    #email

    //Construtor
    constructor(cpf = "", nome = "", telefone = "", email = "") {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#telefone = telefone;
        this.#email = email;
    }

    // Getters e setters

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    toString(){
        return `
            CPF: ${this.#cpf}\n
            Nome: ${this.#nome}\n
            Telefone: ${this.#telefone}\n
            Email: ${this.#email}\n
        `
    }

    toJSON() {
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            telefone: this.#telefone,
            email: this.#email
        }
    }

    async gravar(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.gravar(this);
    }

    async alterar(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.alterar(this);
    }

    async excluir(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.excluir(this);
    }

    async consultar(){
        const clienteDAO = new ClienteDAO();
        return await clienteDAO.consultar();
    }

    async consultarCodigo(cpf){
        const clienteDAO = new ClienteDAO();
        return await clienteDAO.consultarCodigo(cpf);
    }
}