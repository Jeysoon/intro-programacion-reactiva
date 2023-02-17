import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

export interface Dog {
  image: string;
  breed: string;
  name: string;
  weight: string;
  height: string;
}

@Component({
  selector: 'app-dogs-container',
  templateUrl: './dogs-container.component.html',
  styleUrls: ['./dogs-container.component.css'],
})
export class DogsContainerComponent implements OnInit {
  dogs$: any;
  columns: number = 3;
  constructor(private dogService: DogService, private breakpointObserver: BreakpointObserver) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 680px)"
    ]).subscribe((result: BreakpointState) => {
      console.log('result', result);
      if (result.matches) {
          // hide stuff
          this.columns = 1
      } else {
          // show stuff
          this.columns = 3
      }
    });
  }

  ngOnInit() {
   this.dogs$ = this.dogService.getDogs();
   this.dogService.getDogs().subscribe((dog: any) => console.log('Dog', dog))
  }
}
