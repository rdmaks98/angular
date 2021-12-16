import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { dataWise } from 'src/app/models/datawise';
import { GlobalDataSummary } from 'src/app/models/globalData';
import { DataServiceService } from 'src/app/services/data-service.service';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  data : GlobalDataSummary[];
  countries : string[] = [];
  totalConfirmed=0;
  totalActive=0;
  totalDeath=0;
  totalRecoverd=0;
  selectCountry:dataWise[];
  loading:true;
  options: {
    height : 500, 
    animation:{
      duration: 1000,
      easing: 'out',
    },
  }

  dataWise;
  lineChart : GoogleChartInterface = {
    chartType : 'LineChart',
  }
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
    merge(
      this.service.getDateWiseData().pipe(
        map(result=>{
          this.dataWise = result;
        })
      ), 
      this.service.getGlobal().pipe(map(result=>{
        this.data = result;
        this.data.forEach(cs=>{
          this.countries.push(cs.country)
        })
      }))
    ).subscribe(
      {
        complete : ()=>{
         this.updatevalues('India')
        }
      }
    )
  }

 

  updateChart()
  {
    let dataTable = [];
    dataTable.push(['Date','Cases'])
    this.selectCountry.forEach(cs=>{
      dataTable.push([cs.date,cs.cases])
    })
  }

  updatevalues(country : string)
  {
    this.data.forEach(cs=>{
      if(cs.country == country)
      {
        this.totalActive = cs.active
        this.totalConfirmed = cs.confirmed
        this.totalDeath = cs.death
        this.totalRecoverd = cs.recovered
      }
    })
    this.selectCountry = this.dataWise[country];
    this.updateChart();
  }
  
}
