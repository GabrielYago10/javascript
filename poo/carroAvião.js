// Definindo a classe Carro com apenas cor e ano
class Carro {
    // O construtor recebe as propriedades cor e ano
    constructor(cor, ano) {
      this.cor = cor;
      this.ano = ano;
    }
  
    // Método para exibir informações do carro
    criarCarro() {
      console.log(`Carro - Cor: ${this.cor}`);
      console.log(`Ano: ${this.ano}`);
     
    }
  
    // Método para ligar o carro
    ligar() {
      console.log(`Carro de cor ${this.cor} está ligado.`);
    }
  
    // Método para desligar o carro
    desligar() {
      console.log(`Carro de cor ${this.cor} está desligado.`);
      console.log("----------------------------")
    }
  }

  //Herança 

  class Aviao extends Carro {
    constructor(cor, ano, envergadura){
        super(cor, ano)
        this.envergadura = envergadura
    }
    criarAviao() {
        console.log ("--------------------------")
        console.log(`cor do aviao ${this.cor}`)
        console.log(`ano do aviao ${this.ano}`)
        console.log(`Envergadura: ${this.envergadura}`)
    }

    ate() {
        console.log(`aviao  está acelerando.`);
      }

      pousar() {
        console.log(`Avião pousou.`);
        console.log("----------------------------")
      }

    
  }
  
  // Criando dois objetos (carros)
  const carro1 = new Carro("Preto", 2020);
  carro1.criarCarro();
  carro1.ligar();
  carro1.desligar();

  
  const carro2 = new Carro("Prata", 2022);
  carro2.criarCarro();
  carro2.ligar();
  carro2.desligar();


  const aviao = new Aviao("branco", 2012, 15,"m")
  aviao.criarAviao()
  aviao.ate()
  aviao.pousar()
 
  