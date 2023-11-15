import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private  apiUrl = 'http://localhost:8089/api/instructor'
  constructor(private http:HttpClient) { }
  public fetchAllData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/all`);
  }
  public addInstructor(instructor:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/add`,instructor);
  }
  public fetchData (id:any){
    return this.http.get(`${this.apiUrl}/get/${id}`);
  }
}
