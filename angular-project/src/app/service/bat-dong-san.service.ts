import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BatDongSan} from "../model/bat-dong-san";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BatDongSanService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BatDongSan[]> {
    return this.httpClient.get<BatDongSan[]>(API_URL + '/batDongSanList');
  }

  save(batDongSan: BatDongSan): Observable<BatDongSan> {
    return this.httpClient.post<BatDongSan>(API_URL + '/batDongSanList', batDongSan);
  }

  batDongSanFilter(dienTich: number, gia: number, huong: string): Observable<BatDongSan[]> {
    return this.httpClient.get<BatDongSan[]>(API_URL + '/batDongSanList?dienTich_like=' +
      dienTich + '&gia_like=' + gia + '&huong_like=' + huong);
  }
}
