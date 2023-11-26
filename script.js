class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo === "guerreiro") {
      console.log("guerreiro atacou usando espada");
    } else if (this.tipo === "mago") {
      console.log("mago atacou usando magia");
    } else if (this.tipo === "monge") {
      console.log("monge atacou usando artes marciais");
    } else if (this.tipo === "ninja ") {
      console.log("ninja atacou usando shuriken");
    }
  }
}

const mago = new Heroi("Gandolf", 998, "guerreiro");

mago.atacar();
