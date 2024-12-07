import { Component , OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  data: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData<any>('users').subscribe(
      response => this.data = response,
      error => console.error('Error fetching data:' , error)
    );
  }
}


