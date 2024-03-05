import { Component, Input, OnInit } from '@angular/core';
import { GetPhotocardsService } from '../../services/get-photocards.service';

@Component({
  selector: 'app-photocard',
  templateUrl: './photocard.component.html',
  styleUrl: './photocard.component.css'
})
export class PhotocardComponent implements OnInit{
  @Input() photocard:any;

  constructor(private dataService: GetPhotocardsService){}

  addtocart(photocard: any): void {
    this.dataService.addToCart(photocard);
    //console.log('in method');
  }
  ngOnInit(): void {
    
  }
}
