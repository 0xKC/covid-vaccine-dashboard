import { Component, OnInit } from '@angular/core';
import { DataloadService } from 'src/app/services/dataload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   results_json:any;

  constructor(private dataload : DataloadService) {

    this.dataload.loadData().subscribe((res)=> this.results_json=JSON.stringify(res))
   }

  ngOnInit(): void {
  }

}
