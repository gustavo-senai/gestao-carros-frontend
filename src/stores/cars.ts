import { defineStore } from 'pinia';
import civic from '@/assets/img/carros/civic.jpeg';
import corolla from '@/assets/img/carros/corolla.jpeg';
import golf from '@/assets/img/carros/golf.jpeg';
import focus from '@/assets/img/carros/focus.jpeg';
import cruze from '@/assets/img/carros/cruze.jpeg';
import sentra from '@/assets/img/carros/sentra.jpeg';
import camry from '@/assets/img/carros/camry.jpeg';

export const carStore = defineStore('carStore', () => {
  const carros = [
    {
      placa: 'ABC1234',
      modelo: 'Civic',
      preco: 75000.0,
      marca: 'Honda',
      cor: 'Preto',
      ano: 2018,
      kilometragem: 45000,
      estado: 'Disponível',
      editando: false,
      imagem: civic
    },
    {
      placa: 'XYZ5678',
      modelo: 'Corolla',
      preco: 80000.0,
      marca: 'Toyota',
      cor: 'Branco',
      ano: 2019,
      kilometragem: 30000,
      estado: 'Em manutenção',
      editando: false,
      imagem: corolla
    },
    {
      placa: 'JKL3456',
      modelo: 'Golf',
      preco: 85000.0,
      marca: 'Volkswagen',
      cor: 'Cinza',
      ano: 2020,
      kilometragem: 25000,
      estado: 'Alugado',
      editando: false,
      imagem: golf
    },
    {
      placa: 'MNO7890',
      modelo: 'Focus',
      preco: 70000.0,
      marca: 'Ford',
      cor: 'Azul',
      ano: 2017,
      kilometragem: 60000,
      estado: 'Disponível',
      editando: false,
      imagem: focus
    },
    {
      placa: 'PQR2345',
      modelo: 'Cruze',
      preco: 78000.0,
      marca: 'Chevrolet',
      cor: 'Vermelho',
      ano: 2018,
      kilometragem: 40000,
      estado: 'Em manutenção',
      editando: false,
      imagem: cruze
    },
    {
      placa: 'STU9876',
      modelo: 'Sentra',
      preco: 90000.0,
      marca: 'Nissan',
      cor: 'Prata',
      ano: 2021,
      kilometragem: 15000,
      estado: 'Disponível',
      editando: false,
      imagem: sentra
    },
    {
      placa: 'VWX5432',
      modelo: 'Camry',
      preco: 95000.0,
      marca: 'Toyota',
      cor: 'Preto',
      ano: 2020,
      kilometragem: 20000,
      estado: 'Alugado',
      editando: false,
      imagem: camry
    }
  ];

  function isNewCar(placa) {
    return carros.some((car) => car.placa === placa);
  }

  function addCar(car) {
    if (!isNewCar(car.placa)) {
      carros.push(car);
    }
  }

  return { carros, isNewCar, addCar };
});
