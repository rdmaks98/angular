import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { dataWise } from '../models/datawise';
import { GlobalDataSummary } from '../models/globalData';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalData: any = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-17-2020.csv`;
  private dataWiseUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`;
  constructor(private http:HttpClient) { }


  getGlobal()
  {
    return this.http.get(this.globalData, { responseType: 'text' }).pipe(
      map(result => {
        let data :GlobalDataSummary[] = [];
        let raw = [];
        let rows = result.split('\n');
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/);

          let cs = {
            country : cols[3],
            confirmed : +cols[7],
            death : +cols[8],
            recovered : +cols[9],
            active : +cols[10],
          };
          let temp : GlobalDataSummary = raw[cs.country];
            if(temp)
          {
            temp.active = cs.active + temp.active;
            temp.confirmed = cs.confirmed + temp.confirmed;
            temp.death = cs.death + temp.death;
            temp.recovered = cs.recovered + temp.recovered;
          
          raw[cs.country] = temp;
          }
          else
          {
            raw[cs.country] = cs;
          }
        })
        return <GlobalDataSummary[]> Object.values(raw);
      })
    )
  }

  getDateWiseData()
  {
    return this.http.get(this.dataWiseUrl,{responseType : 'text'}).pipe(map(result=>{
      let rows = result.split("\n");
      let Main ={};
      let headers = rows[0]; 
      let date = headers.split(/,(?=\S)/);
      date.splice(0,4);
      rows.splice(0,1);
      rows.forEach(row=>{
        let cols = row.split(/,(?=\S)/)
        let con = cols[1];
        cols.splice(0,4);
      
        Main[con] = [];
        cols.forEach((value,index)=>{
          let dw : dataWise = {
            cases :+value,
            country : con,
            date : new Date(Date.parse(date[index])) 
          }
          Main[con].push(dw);
        })
      })
      return Main;
    }));
  }
}
