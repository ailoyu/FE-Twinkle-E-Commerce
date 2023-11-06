import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-sales-analytics',
  templateUrl: './sales-analytics.component.html',
  styleUrls: ['./sales-analytics.component.scss']
})
export class SalesAnalyticsComponent implements OnInit  {
  title = 'chartDemo';

  barChart: any;

  constructor() { }

  ngOnInit() 
  {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Data1',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 1
          },
          {
            label: 'Data2',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }]
      },
      options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
      }
  });
    //
    
  }
}
