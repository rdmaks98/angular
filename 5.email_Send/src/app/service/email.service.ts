import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseurl:string="http://localhost"
  
  constructor(private http:HttpClient) {

   }

   sendMail(data:any)
   {
       return this.http.post(`{$this.baseUrl}/Sendmail`,data)
   }
}
