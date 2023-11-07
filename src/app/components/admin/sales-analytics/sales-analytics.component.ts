import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { DataAnalytics } from 'src/app/service/data-analytics.service';


@Component({
  selector: 'app-sales-analytics',
  templateUrl: './sales-analytics.component.html',
  styleUrls: ['./sales-analytics.component.scss']
})
export class SalesAnalyticsComponent implements OnInit  {
  title = 'chartDemo';

  barChart: any;
  pieChart: any;


  constructor(
    private dataAnalytics: DataAnalytics
  ) { }

  ngOnInit() 
  {
    this.dataAnalytics.getCategoryStatistics().subscribe((data) => {
      debugger
      const labels = data.map((item) => `${item[0]} (${item[1]} pair of shoes)`);

      const percentages = data.map((item) => item[2]);

      const backgroundColors = this.generateRandomColors(data.length);

      this.pieChart = new Chart('pieChart', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: percentages,
              backgroundColor: backgroundColors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    });
    this.dataAnalytics.getProviderStatistics().subscribe((data) => {
      debugger
      const labels = data.map((item) => `${item[0]} (${item[1]} pair of shoes)`);
      const percentages = data.map((item) => item[2]);

      const backgroundColors = this.generateRandomColors(data.length);

      this.pieChart = new Chart('pieChart2', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: percentages,
              backgroundColor: backgroundColors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    });
    this.dataAnalytics.getQuantityOfEachProductStatistics().subscribe((data) => {
      debugger
      console.log(data)
      const products = data.map((item) => `${item[0]}: ${item[1]}`);
      const quantities = data.map((item) => item[2]);
      const barChart = new Chart('barChart', {
        type: 'bar',
        data: {
          labels: products,
          datasets: [
            {
              label: 'Quantity of each products',
              data: quantities,
              backgroundColor: 'rgba(75, 192, 192, 0.2',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    });
    
  }


  generateRandomColors(numColors: number) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(randomColor);
    }
    return colors;
  }
}
