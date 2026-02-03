import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BrandFetchRequest {
  url: string;
  linkedin?: boolean;
  facebook?: boolean;
  youtube?: boolean;
  instagram?: boolean;
  x?: boolean;
}

export interface BrandResponse {
  Logo?: any;
  Colors?: any[];
  Fonts?: any[];
  Images?: any[];
  Company?: any;
  _performance?: any;
  _message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  fetchBrandWithApiKey(request: BrandFetchRequest, apiKey: string, customOrigin?: string): Observable<BrandResponse> {
    const headers = new HttpHeaders({
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'X-Custom-Origin': customOrigin || 'rivo.ai/api/mahesh'
    });

    return this.http.post<BrandResponse>(
      `${this.apiUrl}/api/secure/rivofetch`,
      request,
      {headers}
    );
  }

  fetchBrandWithJWT(request: BrandFetchRequest, jwtToken: string): Observable<BrandResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${jwtToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<BrandResponse>(
      `${this.apiUrl}/forward`,
      request,
      { headers }
    );
  }
}
