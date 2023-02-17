import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { map, Subscription } from 'rxjs';
import { DogService } from 'src/app/services/dog.service';
import { Dog } from '../dogs-container/dogs-container.component';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.css']
})
export class SizeSelectorComponent implements OnInit, OnDestroy {
  sizes: string[] = [];
  allDogs: Subscription | undefined;
  filteredDogs: Subscription | undefined;
  @Output() dogs = new EventEmitter();
  constructor(private dogService: DogService) {
    this.dogService.getDogs().pipe(map((dog: Dog[]) => {
      return dog.map((dog: Dog) => dog.size)
    })).subscribe((data) => {
      this.sizes = [...new Set(['All',...data])];
    });
  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.allDogs?.unsubscribe();
    this.filteredDogs?.unsubscribe();
  }
  onSelect(event: MatSelectChange){
    if(event.value === 'All'){
    this.allDogs =  this.dogService.getDogs().subscribe((dogData) => {
        console.log('dogDatonma', dogData)
        this.dogService._dogs.next(dogData);
      })
    } else {
    this.filteredDogs =  this.dogService.getDogs().pipe(
        map((dogs: Dog[]) => {
          console.log('DOGS', dogs);
         return dogs.filter(dog => dog.size.toLowerCase() === event.value.toLowerCase())
        })
      ).subscribe((dogData: any) => {
        console.log('dogData', dogData);
        this.dogService._dogs.next(dogData);
        // this.dogs.emit(dogData);
      })
    }
  }

}
