import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mutationObserver';

  constructor(){


  }
  ngOnInit() {
  }

  /**
   * On change button click add the button inside editable div
   */
  public changePad(){

    var button = document.createElement('button');
    button.innerText = "Add";
    button.setAttribute("height","100px");
    button.setAttribute("width","100px");
    document.getElementById('editDiv').appendChild(button);
  
   }
}
