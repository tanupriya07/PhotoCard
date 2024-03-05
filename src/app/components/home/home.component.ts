import { Component, OnInit } from '@angular/core';
import { GetPhotocardsService } from '../../services/get-photocards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  photocards: any[]=[];

  constructor(private dataService: GetPhotocardsService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.photocards = data;
    });
  }
}
