import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROPERTIES } from 'src/app/constants/constant';
import { ResumeData } from 'src/app/model/IResumeData';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  headers = new HttpHeaders();


  constructor(private http: HttpClient) { }

  /*Resume Service*/
  getMyResume(): Observable<ResumeData>{
    return this.http.get<ResumeData>(PROPERTIES.apiUrl+'/resume');
  }
  uploadResume(pdf: File, img: File): Observable<HttpEvent<string[]>>{
    let formData = new FormData();
    formData.append('pdf', pdf);
    formData.append('img', img);

    return this.http.post<string[]>(PROPERTIES.apiUrl + '/resume/upload-files', formData, 
      {observe: 'events', reportProgress: true});
  }
  dowloadResume(): Observable<Blob>{
    this.headers.set('Accept', 'application/pdf');
    return this.http.get(PROPERTIES.apiUrl + '/resume/download',  {headers: this.headers, responseType: 'blob'});
  }

  /* Expertise Service */
  getEpertiseList():Observable<any>{
    return this.http.get(PROPERTIES.apiUrl + '/expertise');
  }
  addExpertise(img: File, name: string){
    let formData = new FormData();
    formData.append('img', img);
    formData.append('name', name);

    this.headers.set('Accept', 'Mutipart/Form-Data')
    return this.http.post(PROPERTIES.apiUrl + '/expertise/save', formData, {headers: this.headers});
  }
  deleteExpertise(id: number):Observable<any>{
    return this.http.post(PROPERTIES.apiUrl + '/delete/' + id, null);
  }
  
  
}