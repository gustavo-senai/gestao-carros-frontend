import { defineStore } from 'pinia'

export const carStore = defineStore('counter', () => {
  const carros = [
    {
      placa: 'ABC1234',
      modelo: 'Civic',
      preco: 75000.0,
      marca: 'Honda',
      cor: 'Preto',
      ano: 2018,
      kilometragem: 45000,
      estado: 'disponível',
      editando: false
    },
    {
      placa: 'XYZ5678',
      modelo: 'Corolla',
      preco: 80000.0,
      marca: 'Toyota',
      cor: 'Branco',
      ano: 2019,
      kilometragem: 30000,
      estado: 'em manutenção',
      editando: false
    },
    {
      placa: 'JKL3456',
      modelo: 'Golf',
      preco: 85000.0,
      marca: 'Volkswagen',
      cor: 'Cinza',
      ano: 2020,
      kilometragem: 25000,
      estado: 'alugado',
      editando: false
    },
    {
      placa: 'MNO7890',
      modelo: 'Focus',
      preco: 70000.0,
      marca: 'Ford',
      cor: 'Azul',
      ano: 2017,
      kilometragem: 60000,
      estado: 'disponível',
      editando: false
    },
    {
      placa: 'PQR2345',
      modelo: 'Cruze',
      preco: 78000.0,
      marca: 'Chevrolet',
      cor: 'Vermelho',
      ano: 2018,
      kilometragem: 40000,
      estado: 'em manutenção',
      editando: false
    },
    {
      placa: 'STU9876',
      modelo: 'Sentra',
      preco: 90000.0,
      marca: 'Nissan',
      cor: 'Prata',
      ano: 2021,
      kilometragem: 15000,
      estado: 'disponível',
      editando: false
    },
    {
      placa: 'VWX5432',
      modelo: 'Camry',
      preco: 95000.0,
      marca: 'Toyota',
      cor: 'Preto',
      ano: 2020,
      kilometragem: 20000,
      estado: 'alugado',
      editando: false
    }
  ]

  function isNewCar(placa: string) {
    return carros.some((car) => car.placa === placa)
  }

  function addCar(car) {
    if (isNewCar(car.placa)) {
      carros.push(car)
    }
  }
  return { carros, isNewCar, addCar }
})
