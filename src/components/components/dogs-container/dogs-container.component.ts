import { Component, OnInit } from '@angular/core';

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
  dogs: Dog[] = [];
  constructor() {}

  ngOnInit() {
    // this.dogs = [
    //   {
    //     image:
    //       'https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg',
    //     breed: 'Affenpinscher',
    //     name: 'Buddy',
    //     weight: '7-9 lbs',
    //     height: '9-11 inches',
    //   },
    //   {
    //     image: 'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
    //     breed: 'Akita',
    //     name: 'Max',
    //     weight: '70-130 lbs',
    //     height: '24-28 inches',
    //   },
    //   {
    //     image:
    //       'https://images.dog.ceo/breeds/alaskan-malamute/n02110063_10536.jpg',
    //     breed: 'Alaskan Malamute',
    //     name: 'Luna',
    //     weight: '75-100 lbs',
    //     height: '22-26 inches',
    //   },
    //   {
    //     image: 'https://images.dog.ceo/breeds/american-bulldog/n02180_3133.jpg',
    //     breed: 'American Bulldog',
    //     name: 'Duke',
    //     weight: '60-120 lbs',
    //     height: '20-28 inches',
    //   },
    //   {
    //     image:
    //       'https://images.dog.ceo/breeds/american-pit-bull-terrier/n02085620_7655.jpg',
    //     breed: 'American Pit Bull Terrier',
    //     name: 'Rocky',
    //     weight: '30-60 lbs',
    //     height: '18-21 inches',
    //   },
    //   {
    //     image: 'https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg',
    //     breed: 'Australian Shepherd',
    //     name: 'Pepper',
    //     weight: '40-65 lbs',
    //     height: '18-23 inches',
    //   },
    //   {
    //     image: 'https://images.dog.ceo/breeds/beagle/n02088364_3498.jpg',
    //     breed: 'Beagle',
    //     name: 'Charlie',
    //     weight: '18-30 lbs',
    //     height: '13-15 inches',
    //   },
    //   {
    //     image: 'https://images.dog.ceo/breeds/boxer/n02108089_3883.jpg',
    //     breed: 'Boxer',
    //     name: 'Rufus',
    //     weight: '50-70 lbs',
    //     height: '21-25 inches',
    //   },
    //   {
    //     image:
    //       'https://images.dog.ceo/breeds/bulldog-english/n02105855_2692.jpg',
    //     breed: 'English Bulldog',
    //     name: 'Oliver',
    //     weight: '40-50 lbs',
    //     height: '14-15 inches',
    //   },
    //   {
    //     image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3084.jpg',
    //     breed: 'Chihuahua',
    //     name: 'Mimi',
    //     weight: '3-6 lbs',
    //     height: '6-9 inches',
    //   },
    // ];
    this.dogs = [
      {
        image: 'https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_960_720.jpg',
        breed: 'Bulldog',
        name: 'Buddy',
        weight: '40-50 lbs',
        height: '12-16 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg',
        breed: 'Labrador',
        name: 'Luna',
        weight: '55-80 lbs',
        height: '21.5-24.5 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497__340.jpg',
        breed: 'Doberman',
        name: 'Duke',
        weight: '55-75 lbs',
        height: '21.5-24 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986__340.jpg',
        breed: 'Akita',
        name: 'Rocky',
        weight: '70-130 lbs',
        height: '24-28 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2021/02/16/02/28/australian-6019636_960_720.jpg',
        breed: 'Australian Cattle Dog',
        name: 'Charlie',
        weight: '31-35 lbs',
        height: '17-20 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2018/01/17/00/46/shiba-inu-3087207_960_720.jpg',
        breed: 'Shiba Inu',
        name: 'Rufus',
        weight: '17-23 lbs',
        height: '13.5-16.5 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2023/01/24/13/17/animal-7741005_960_720.jpg',
        breed: 'Bichon Frise',
        name: 'Max',
        weight: '12-18 lbs',
        height: '9.5-11.5 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_960_720.jpg',
        breed: 'Corgi',
        name: 'Bailey',
        weight: '22-31 lbs',
        height: '10-12 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2010/12/13/10/20/beagle-puppy-2681_960_720.jpg',
        breed: 'Beagle',
        name: 'Oliver',
        weight: '18-30 lbs',
        height: '13-15 inches',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg',
        breed: 'Poodle',
        name: 'Rosie',
        weight: '45-60 lbs',
        height: '15-20 inches',
      },
    ];
  }
}
