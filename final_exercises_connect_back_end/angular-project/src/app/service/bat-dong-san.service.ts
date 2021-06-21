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
    return this.httpClient.get<BatDongSan[]>(API_URL + '/realEstates');
  }

  save(batDongSan: BatDongSan): Observable<BatDongSan> {
    return this.httpClient.post<BatDongSan>(API_URL + '/realEstates', batDongSan);
  }

  batDongSanFilter(area: number, price: number, direction: string): Observable<BatDongSan[]> {
    return this.httpClient.get<BatDongSan[]>(API_URL + '/realEstates?area_like=' +
      area + '&price_like=' + price + '&direction_like=' + direction);
  }
}
