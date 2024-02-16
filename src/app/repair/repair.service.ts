import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Repair } from './repair'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  repairUrl: string = '192.168.1.65:3001?file=newfile'


  constructor(private http: HttpClient) { }

  getrepairs(): Observable<Repair> {
    return this.http.get<Repair>(this.repairUrl)
  }
}
