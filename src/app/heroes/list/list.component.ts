import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Iroman','Hulk','Thror'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
