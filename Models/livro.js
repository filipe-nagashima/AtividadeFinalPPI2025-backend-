import LivroDAO from '../DB/livroDAO.js';

export default class Livro {
    //Atributos da classe Livro

    #cod
    #titulo
    #autor
    #cpf
    #cliente

    //Construtor
    constructor(cod = 0, titulo = "", autor = "", cliente = {}) {
        this.#cod = cod;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#cliente = cliente;
    }

    // Getters e setters

    get cod() {
        return this.#cod;
    }

    set cod(cod) {
        this.#cod = cod;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        this.#titulo = titulo;
    }

    get autor() {
        return this.#autor;
    }

    set autor(autor) {
        this.#autor = autor;
    }

    get cliente() {
        return this.#cliente;
    }

    set cliente(cliente) {
        this.#cliente = cliente;
    }

    toString(){
        return `
            Cód: ${this.#cod}\n
            Título: ${this.#titulo}\n
            Autor: ${this.#autor}\n
            Cliente: ${this.#cliente}\n
        `
    }

    toJSON() {
        return {
            cod: this.#cod,
            titulo: this.#titulo,
            autor: this.#autor,
            cliente: this.#cliente
        }
    }

    async gravar(){
        const livroDAO = new LivroDAO();
        await livroDAO.gravar(this);
    }

    async alterar(){
        const livroDAO = new LivroDAO();
        await livroDAO.alterar(this);
    }

    async excluir(){
        const livroDAO = new LivroDAO();
        await livroDAO.excluir(this);
    }

    async consultar(){
        const livroDAO = new LivroDAO();
        return await livroDAO.consultar();
    }

    async consultarCodigo(cod){
        const livroDAO = new LivroDAO();
        return await livroDAO.consultarCodigo(cod);
    }
}