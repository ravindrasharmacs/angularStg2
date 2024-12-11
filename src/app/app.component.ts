import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 
  title = 'angularstg2';
  data: any;
  currentDate: Date = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData();
  }
}
