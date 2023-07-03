import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 50;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }

}
