import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking the component as standalone
  imports: [RouterOutlet, FormsModule],  // Import necessary modules here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = '/assets/1.jpg.jpg';
  userName: string = "";
  nameError:string="";
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: MouseEvent): void {
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onInput($event:any){
    console.log("Change event occurred",$event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect";
  }
}