"use strict";
/* let pessoa = {
  nome: 'Pietro',
  idade: 22,
  altura: 1.8,
  cpf: '111.111.111-11',
  solteiro: false,
  habilidades: ['Java', 'Angular', 'TypeScript', 'Javascript', 'Node.js', 'Spring Boot'],
  endereco: {
    rua: 'Rua Feliz',
    numero: 567,
    estado: 'CE',
    complemento: 'Sem complemento',
    cep: '123000-000'
  }
}
let pessoa2 = {
  nome: 'Pietro',
  idade: 22,
  altura: 1.8,
  cpf: '111.111.111-11',
  solteiro: false,
  habilidades: ['Java', 'Angular', 'TypeScript', 'Javascript', 'Node.js', 'Spring Boot'],
  endereco: {
    rua: 'Rua Feliz',
    numero: 567,
    estado: 'CE',
    complemento: 'Sem complemento',
    cep: '123000-000'
  },
  rg: '193817938719'
}
 */
const p = {
    altura: 1.9,
    solteiro: true,
    nome: 'Faustão',
    idade: 12,
    rg: '654654646684',
    cpf: '222.222.222-22',
    habilidades: ['HTML'],
    endereco: {
        rua: 'Rua Bacana',
        cep: '123000-000',
        complemento: 'Apartamento',
        estado: 'PE',
        numero: 789
    },
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome);
    }
};
const p2 = {
    nome: 'Paula',
    altura: 1.7,
    idade: 24,
    cpf: '222.222.222-22',
    habilidades: ['HTML'],
    endereco: {
        estado: 'CE',
        rua: 'Rua no Ceará',
        complemento: 'Complemento não sei',
        numero: 607,
        cep: '444000-000'
    },
    rg: '002932098423',
    solteiro: false,
    cumprimentar() {
        console.log('Olá para todos! Prazer em conhecê-los');
    }
};
