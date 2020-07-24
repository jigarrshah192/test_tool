import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {

  }

  getAllRecord() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  saveRecord(record) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(record))
  }


}
