import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-adultpage',
  templateUrl: './adultpage.component.html',
  styleUrls: ['./adultpage.component.css']
})
export class AdultpageComponent {
  details:Cards[]=[];
  constructor(private service:CardsService){ }

    ngOnInit():void{
      this.service.getdetails().subscribe(data=>this.details=data);
  }

}
