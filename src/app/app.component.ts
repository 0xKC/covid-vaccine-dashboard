import { Component } from '@angular/core';
import { DataloadService } from './services/dataload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-vaccine-dashboard';
  constructor(private dataload : DataloadService){
    this.dataload.loadData().subscribe((res)=> console.log(res))
  }

}
