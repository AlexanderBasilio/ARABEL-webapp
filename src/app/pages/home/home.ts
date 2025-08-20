import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Material {
  id: number;
  name: string;
  type: string;
  isEco: boolean;
  image: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  materials: Material[] = [
    {
      id: 1,
      name: 'Lino',
      type: 'ECOLÓGICO',
      isEco: true,
      image: '/img/lino.jpg',
      description: 'Fibra natural biodegradable. Se obtiene de la planta de lino y es completamente sostenible.'
    },
    {
      id: 2,
      name: 'Poliéster',
      type: 'SINTÉTICO',  
      isEco: false,
      image: '/img/poliéster.jpg',
      description: 'Derivado del petróleo. Tarda cientos de años en degradarse y contamina el medio ambiente.'
    },
    {
      id: 3,
      name: 'Algodón Orgánico',
      type: 'ECOLÓGICO',
      isEco: true,
      image: '/img/algodon.jpg',
      description: 'Cultivado sin pesticidas ni químicos. Biodegradable y amigable con el medio ambiente.'
    }
  ];

  currentIndex: number = 0;

  get currentMaterial(): Material {
    return this.materials[this.currentIndex];
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.materials.length;
  }

  previousSlide(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.materials.length - 1 
      : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
