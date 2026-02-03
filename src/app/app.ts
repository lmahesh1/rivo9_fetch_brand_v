import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrandService, BrandFetchRequest, BrandResponse } from './services/brand.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'RIVO9 Brand Fetch Tester';
  
  brandUrl = 'https://www.apple.com';
  apiKey = '';
  jwtToken = '';
  
  loading = false;
  response: BrandResponse | null = null;
  error: string | null = null;
  activeTab: 'apikey' | 'jwt' = 'apikey';

  constructor(private brandService: BrandService) {}

  testApiKeyEndpoint() {
    if (!this.apiKey.trim()) {
      this.error = 'Please enter an API Key';
      return;
    }

    this.loading = true;
    this.error = null;
    this.response = null;

    const request: BrandFetchRequest = {
      url: this.brandUrl
    };

    this.brandService.fetchBrandWithApiKey(request, this.apiKey).subscribe({
      next: (data) => {
        this.response = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || err.message || 'Request failed';
        this.loading = false;
      }
    });
  }

  testJWTEndpoint() {
    if (!this.jwtToken.trim()) {
      this.error = 'Please enter a JWT Token';
      return;
    }

    this.loading = true;
    this.error = null;
    this.response = null;

    const request: BrandFetchRequest = {
      url: this.brandUrl
    };

    this.brandService.fetchBrandWithJWT(request, this.jwtToken).subscribe({
      next: (data) => {
        this.response = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || err.message || 'Request failed';
        this.loading = false;
      }
    });
  }

  clearResponse() {
    this.response = null;
    this.error = null;
  }

  switchTab(tab: 'apikey' | 'jwt') {
    this.activeTab = tab;
    this.clearResponse();
  }
}
