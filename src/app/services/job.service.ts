import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { jobOffer } from '../models/jobOffer.model';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, user).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
  registerUser(user: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/register`, user).pipe(
      catchError((error) => {
        return error;
      })
    );
  }

  getJobsWithQuery(filter: string): Observable<any> {
    const params = { filter: filter }
    return this.httpClient.get(`${environment.apiUrl}/jobs/query`, { params: params })
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }
  getJobs(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/jobs`)
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }
  getJobsCompany(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/jobs`)
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }
  postJob(job: jobOffer): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/job`, job).pipe(
      catchError(error => {
        return error;
      })
    );
  }
  getJob(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/job/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  updateJob(job: jobOffer): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/job/${job._id}`, job).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  deleteJob(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/job/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }
}
