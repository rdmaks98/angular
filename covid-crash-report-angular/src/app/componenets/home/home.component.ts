import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/globalData';
import { GoogleChartInterface } from 'ng2-google-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalconfirmed = 0;
  totalactive = 0;
  totalrecovered = 0;
  totaldeath = 0;
  loading=true;
  gd: GlobalDataSummary[];

  // chart1
  pieChart: GoogleChartInterface = {
    chartType: 'Piechart',
  }

  // chart2
  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart'
  }
  constructor(private service: DataServiceService) { }

  initChart(caseType : string) {
    let datatable = [];
    datatable.push(["Country", "Cases"]);
    this.gd.forEach(cs => {
      let value : number;
      if(caseType == 'c')
        if(cs.confirmed > 2000)
          value = cs.confirmed
        
      if(caseType == 'a')
        if(cs.active > 2000)
          value = cs.active

      if(caseType == 'r')
        if(cs.recovered > 2000)
          value = cs.recovered

      if(caseType == 'd')
        if(cs.confirmed > 400)
            value = cs.death


        datatable.push([
          cs.country, value
        ])
    })
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
      options: {
        height: 700,
        animation : {
          duration:100,
          easing:'out',
        }
      },
    };
    this.columnChart = {
      chartType : 'ColumnChart',
      dataTable : datatable,
      options : {
        height : 400
      }
    }
  }

  ngOnInit(): void {

    this.service.getGlobal()
      .subscribe(
        {
          next: (result) => {
            this.gd = result;
            result.forEach(cs => {
              if (!Number.isNaN(cs.confirmed)) {
                this.totalactive += cs.active;
                this.totalconfirmed += cs.confirmed;
                this.totalrecovered += cs.recovered;
                this.totaldeath += cs.death;
              }
            })
            this.initChart('c');
          }
        }
      )
  }

  updateChart(input : HTMLInputElement)
  {
    console.log(input.value);
    this.initChart(input.value)
  }

}
