import { Component ,OnInit , ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,
    ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularstg2';
  @ViewChild(ExampleComponent) exComp!: ExampleComponent;

  ngOnInit() {
    if(this.exComp){
      this.exComp.ngOnInit();
    }
   
    }
  // ExampleComponent: exComp = new ExampleComponent();
}
