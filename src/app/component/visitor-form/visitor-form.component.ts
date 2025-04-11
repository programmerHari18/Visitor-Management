import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { error } from 'console';

@Component({
  selector: 'app-visitor-form',
  imports: [],
  templateUrl: './visitor-form.component.html',
  styleUrl: './visitor-form.component.css'
})
export class VisitorFormComponent implements OnInit{
  constructor(private api: ApiService){}
  ngOnInit(): void {
    this.api.get('Location?HasApprovers=true').subscribe({
      next: (res) => console.log("Location data: ", res),
      error: (err) => console.log("Error: ", err),
    })
  }

}
