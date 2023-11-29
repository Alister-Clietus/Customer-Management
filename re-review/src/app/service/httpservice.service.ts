import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService 
{
  private USERNAME = 'Admin';
  constructor(private http: HttpClient  ) 
  {

  }
  public postdata<T>(url: string, data: any): Observable<T> 
  {
    return this.http.post<T>(url,data);
  }

  public deleteData<T>(url: string,data: any): Observable<T> 
  {
    return this.http.post<T>(url,data);
  }

  public update<T>(url: string, data: any): Observable<T> 
  {
    return this.http.put<T>(url,data);
  }
  
  public getbyid<T>(url: string, data: any): Observable<T> 
  {
    return this.http.post<T>(url,data);
  }

  setUssername(username: any): void 
  {
    localStorage.setItem(this.USERNAME, username);
    console.log(this.getUsername())
  } //set username ends here ***********************************************

  getUsername(): string | null 
  {
    return localStorage.getItem(this.USERNAME);
  } //getusername ends here *************************************************

  removeUsername(): void 
  {
    localStorage.removeItem(this.USERNAME);
  } //remove token ends here *********************************************
}
