
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task';
  width=700;
  public showtable=false;
  public changeid=false;
  public  Changename=false;
  public Changeage=false;
  public Changeplace=false;


  items = [
    { id: 1, name: 'Parvathi G',age:22, place: 'Kochi' },
    { id: 2, name: 'Narmadhaa',age:23, place: 'Chennai' },
    { id: 3, name: 'Sara',age:24, place: 'Thrissur' },
    { id: 3, name: 'Swetha',age:24, place: 'Thrissur' }
  ];

  Show(){
    this.showtable=true;
  }

  Change(){
    this.changeid=true;
    this. Changename=true;
    this.Changeage=true;
    this.Changeplace=true;


  }

}