import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle, VehicleData } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicle`);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicle/${id}`);
  }

  getVehicleDataByCode(codigo: string): Observable<VehicleData[]> {
    if (!codigo) {
      return this.http.get<VehicleData[]>(`${this.apiUrl}/vehicleData`);
    }
    return this.http.get<VehicleData[]>(`${this.apiUrl}/vehicleData?codigo_like=${codigo}`);
  }
}