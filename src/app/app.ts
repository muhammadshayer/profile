import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   name = '';
  email = '';
  message = '';

  onSubmit() {
    console.log(this.name, this.email, this.message);
    alert('Message sent!');
  }
}


