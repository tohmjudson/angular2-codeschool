import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';
import { RacingDataService } from './racing-data.service';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent{
    carParts : CarPart[];

    constructor(private racingDataService: RacingDataService){}

    ngOnInit(){
        this.racingDataService.getCarParts()
            .subscribe(carParts => this.carParts = carParts)
    }

    upQuantity(carPart){
        if(carPart.quantity < carPart.inStock)carPart.quantity++;
    };

    downQuantity(carPart){
        if(carPart.quantity != 0)carPart.quantity--;
    };

    totalCarParts(){
    let sum = 0;
    if(Array.isArray(this.carParts)){
        for (let carPart of this.carParts){sum += carPart.inStock};
    }
    return sum
    };
}