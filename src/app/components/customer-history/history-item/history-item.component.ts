import { Component, OnInit, Input } from '@angular/core';
import { CarRental } from '..//../../models/car-rental'
import { DateTransformPipe } from '../../../common/DateTransorm.Pipe'
import { CarRentalService } from '../../../services/car-rental.service'

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @Input() historyItem: CarRental
  now = new Date();

  brandImage = "";
  carImage = "";
  constructor(public carRentalService: CarRentalService) { }

  ngOnInit() {
    let carItem = this.carRentalService.GetCarById(this.historyItem.CarId);
    this.carImage = carItem.Image;
    this.brandImage = this.carRentalService.GetBrandImage(carItem.Brand);
  }

}
