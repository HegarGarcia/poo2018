class Rio {
    constructor({name = "", width = 1, depth = 1, waterType = "dulce", velocity = 1, streamBed = "barro", unity = "m", state = "liquido"}) {
        this.ancho = !isNaN(width) ? width : 1;
        this.profundo = !isNaN(depth) ? depth : 1;
        this.tipoDeAgua = waterType === "salada" || waterType === "dulce" ? waterType : "dulce";
        this.nombre = name;
        this.velocidadDeAgua = !isNaN(velocity) ? velocity : 1;
        this.tipoDeCama = streamBed;
        this.unidad = unity;
        this.estado = this.constructor.isValidTipoDeCama(state) ? state : "liquido";
    }

    getNombre() {
        return this.nombre;
    }

    getAncho() {
        return this.ancho;
    }

    getProfundo() {
        return this.profundo;
    }

    getTipoDeAgua() {
        return this.tipoDeAgua;
    }

    getAreaDeSeccion() {
        return this.ancho * this.profundo;
    }

    getVelocidadCorregida() {
        let val = 1;
        
        switch (this.tipoDeCama.toLowerCase()) {
            case "arena":
            case "barro":
            case "roca":
                val = 0.09;
                break;
            case "grava":
            case "ramas":
            case "vegetacion":
                val = 0.08;
            default:
                val = 0.09;
                break;
        }

        return this.velocidadDeAgua * val;
    }

    getFlujoDeAgua() {
        return `${this.getAreaDeSeccion() * this.getVelocidadCorregida()} ${this.unidad}^3/s`;
    }

    congelar() {
        this.estado = "solido";
        console.log("Río congelado");
    }

    descongelar() {
        this.estado = "liquido";
        console.log("Río fluyendo");
    }

    overFlow() {
        throw new Error("Peligro río desbordado");
    }

    fluir() {
        if (this.estado === "liquido") {
            console.log("El río fluye");
        } else if (this.estado === "solido") {
            console.log("El río está congelado y no fluye");
        }
    }

    static isValidTipoDeCama(txt) {
        let val;
        
        switch (txt.toLowerCase()) {
            case "arena":
            case "barro":
            case "roca":
            case "grava":
            case "ramas":
            case "vegetacion":
                val = true;
            default:
                val = false;
                break;
        }

        return val;
    }

}

let rio = new Rio({name: "Rio Colima", width: 1, depth: 1, waterType: "dulce", velocity: 1, streamBed: "barro", unity: "m", state: "liquido"});