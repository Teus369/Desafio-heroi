class hero {

    constructor(classe){
        this.classe = classe
        this.ataque = ["espada", "magia", "artes marciais", "shuriken"];
    }

    atacar(){
        switch(this.classe){
            case 'guerreiro':
                console.log(`O ${this.classe} atacou usando ${this.ataque[0]}`)
                break;
            case 'mago':
                console.log(`O ${this.classe} atacou usando ${this.ataque[1]}`)
                break;
            case 'monge':
                console.log(`O ${this.classe} atacou usando ${this.ataque[2]}`)
                break;
            case 'ninja':
                console.log(`O ${this.classe} atacou usando ${this.ataque[3]}`)
                break;
            default:
                console.log("Informe o seu tipo.")    
        }
    }
}

var resultado = new hero("")
resultado.atacar()