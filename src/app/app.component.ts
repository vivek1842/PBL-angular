import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // styles : [
  //   `
  //   .green{
  //     color: 'green';
  //   }
  //   `
  // ]
})
export class AppComponent {
  title = "10";
  a = 2+2;

  siteUrl = window.location.href;
  public test = true;
  public color = "danger";
  public hasError = true;
  public highlight_color = "orange"; 

  greet() {
    alert("Welcome")
    console.log(("event binding working"));
    
  }
}
