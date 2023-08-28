/**
 * variavéis
 */

// tipos primitivos: boolean, number, string
/* let ligado: boolean = false;
let nome: string = "João Marcos";
let idade: number = 38;
let altura: number = 1.75;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

// objeto - sem previsibilidade
let produto: object = {
    name: "João Marcos",
    cidade: "Humaitá",
    estado: "AM",
    idade: 38,
    sexo: 'M',
};

// objeto - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
}*/

/**
 * arrays
 */

/* let dados: string[] = ["João Marcos", "Poliane", "Ellen"];
let dados2: Array<string> = ["João Marcos", "Poliane", "Ellen"];

let infos: (string | number)[] = ["João Marcos", 38, "Poliane", 35, "Ellen", 17];
 */
/**
 * Tuplas
 */

// let boleto: [string, number, number] = ["água conta", 199.90, 321456987]

/**
 * arrays métodos - 
 * Todos os métodos que você aprendeu no JavaScript serve para o TypeScript
 */
// dados.pop();

/**
 * Datas
 */

// let aniversario: Date = new Date("2023-08-27 18:15");
// console.log(aniversario.toString());

// funções
/* function addNumber(x: number, y:number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Olá, ${name}!`;
}

function callToPhone(phone: string | number): number | string {
    return phone;
}


async function getDatabase(id: number): Promise<string> {
    return "João Marcos";
} 

let soma: number = addNumber(4, 7);
// console.log("O resultado da soma é igual a: ", soma);

let pessoa: string = addToHello("João Marcos");*/
// console.log(pessoa);

// console.log(callToPhone("(92) 99988-7766"));

// console.log(getDatabase(2));

// interfaces (type X interfaces)
/* type robot = {
    readonly id: number | string;
    name: string;
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHallo(): string
}

const bot1: robot = {
    id: 1,
    name: "megaman",
}

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHallo: function (): string {
        throw new Error("Function not implemented.");
    }
}
 */
// console.log(bot1.name = "cutman");
// console.log(bot2);

/* class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHallo(): string {
        return `Olá, ${this.name}`;
    }
}

const p = new Pessoa (1, "gutsman");  */
// console.log(p.sayHallo());

// classes
/**
 * data modifiers -> modificadores de acesso
 * public
 * private
 * protected 
 */

/* class Character {
    private name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points!`);
    }
} */

// Character: superclass
// Magician: subclass
/* class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoints: number
     ) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.skill = 20;
p1.attack(); */

// generics
/* function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["João Marcos", "Goku"], ["Vegeta"]);

numArray.push([9], [7]);
numArray.sort();
console.log(numArray);

stgArray.push(["Saitama"], ["Baki"]);
stgArray.sort();
console.log(stgArray); */

/* let dado: string = "João Marcos";
let idade: number = 38;
console.log("Olá,", dado, "você tem", idade, "anos!"); */

// decorators
/* function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {} */

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "João Marcos" });
    }
}

// @apiVersion("1.10")

// attribute decorator

function minLength(length: number) {
    return(target: any, key: string) => {
        let _value = target[key];
        
        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api{
    @minLength(10)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("usuarioAdm");
console.log(api.name);

