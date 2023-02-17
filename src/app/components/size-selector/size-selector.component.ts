import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { map } from 'rxjs';
import { DogService } from 'src/app/services/dog.service';
import { Dog } from '../dogs-container/dogs-container.component';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.css']
})
export class SizeSelectorComponent implements OnInit {
  sizes: string[] = [];
  @Output() dogs = new EventEmitter();
  constructor(private dogService: DogService) {
    this.dogService.getDogs().pipe(map((dog: Dog[]) => {
      return dog.map((dog: Dog) => dog.size)
    })).subscribe((data) => {
      this.sizes = [...new Set(data)];
    });
  }

  ngOnInit() {

  }
  onSelect(event: MatSelectChange){
      this.dogService.getDogs().pipe(
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