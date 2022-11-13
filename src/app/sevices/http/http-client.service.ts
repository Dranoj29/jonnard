import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROPERTIES } from 'src/app/constants/constant';
import { ResumeData } from 'src/app/model/IResumeData';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  public getMyResume(): Observable<ResumeData>{
    return this.http.get<ResumeData>(PROPERTIES.apiUrl+'/resume');
  }

  public uploadResume(pdf: File, img: File): Observable<HttpEvent<string[]>>{
    let formData = new FormData();
    formData.append('pdf', pdf);
    formData.append('img', img);

    return this.http.post<string[]>(PROPERTIES.apiUrl + '/resume/upload-files', formData, 
      {observe: 'events', reportProgress: true});
  }

  public dowloadResume(): Observable<Blob>{
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/pdf');
    return this.http.get(PROPERTIES.apiUrl + '/resume/download',  {headers: headers, responseType: 'blob'});
  }
}