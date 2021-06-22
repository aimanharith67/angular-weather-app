import { Component, OnInit } from '@angular/core';
import { Poc2Service } from '../poc2/poc2.service';
import AOS from 'aos';



@Component({
  selector: 'app-poc2',
  templateUrl: './poc2.component.html',
  styleUrls: ['./poc2.component.css'],
  // providers: [NgsRevealConfig]
})

export class POC2Component implements OnInit {
  name = 'Angular';
  weather: any;
  from = "malaysia";
  noon = 'string';
  moon = 'string';

  // Strapi
  cards: any;
  header: any;
  message: any;
  // test: any;
  url = "http://localhost:1337"

  constructor(private http: Poc2Service) { }
  getCity(city: any) {
    this.http.getPlace(city).subscribe(data => {
      console.log(data)
      this.setWeatherData(data)
    })
  }
  ngOnInit(): void {
    this.weather = {
      main: {},
      isDay: true,
      gambar: true

    }
    this.getCity('malaysia')

    this.noon = '../assets/sunny.jpg';
    this.moon = '../assets/moon.jpg';

    //AOS
    AOS.init();

    // Strapi
    this.http.getPosts().subscribe((data) => {
      console.log(data)
      this.cards = data[0].Card
      this.header = data[0].Header
      this.message = data[0].Message
      // this.test = data[0].Message[0]
    })
  }

  // Sunset Time
  setWeatherData(data: any) {
    this.weather = data;
    let sunsetTime = new Date(this.weather.sys.sunset * 1000);
    this.weather.sunset_time = sunsetTime.toLocaleTimeString();

    // Day/Night
    let currentDate = new Date();
    this.weather.isDay = (currentDate.getTime() < sunsetTime.getTime());


    // Temperature
    this.weather.temp_celcius = ((this.weather.main.temp - 32) * 5 / 9).toFixed(0)
  }



}
