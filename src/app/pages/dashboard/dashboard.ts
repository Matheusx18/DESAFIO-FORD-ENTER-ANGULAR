import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { forkJoin } from 'rxjs';

export interface VeiculoCompleto {
  id: string;
  modelo: string;
  totalVendas: number;
  conectados: number;
  updateSoftware: number;
  imagemUrl: string;
  codigo: string;
  odometro: string;
  nivelCombustivel: string;
  status: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  veiculos: VeiculoCompleto[] = [];
  veiculoSelecionado: VeiculoCompleto | null = null;
  filtroVin: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    forkJoin({
      veiculos: this.http.get<any[]>('http://localhost:3000/vehicle'),
      dadosVin: this.http.get<any[]>('http://localhost:3000/vehicleData')
    }).subscribe({
      next: ({ veiculos, dadosVin }) => {
        // Cruza os dados do modelo com os dados de VIN correspondentes pelo ID
        this.veiculos = veiculos.map(v => {
          const vinInfo = dadosVin.find(d => String(d.id) === String(v.id)) || {};
          return { ...v, ...vinInfo };
        });

        if (this.veiculos.length > 0) {
          this.veiculoSelecionado = this.veiculos[0];
        }
      },
      error: (err) => console.error('Erro ao carregar dados:', err)
    });
  }

  selecionarPorId(id: string): void {
    const encontrado = this.veiculos.find(v => String(v.id) === String(id));
    if (encontrado) {
      this.veiculoSelecionado = encontrado;
    }
  }

  selecionarPorVin(codigoVin: string): void {
    const encontrado = this.veiculos.find(v => v.codigo === codigoVin);
    if (encontrado) {
      this.veiculoSelecionado = encontrado;
    }
  }

  get veiculosTabela(): VeiculoCompleto[] {
    if (!this.filtroVin.trim()) {
      return this.veiculos;
    }
    return this.veiculos.filter(v => 
      v.codigo.toLowerCase().includes(this.filtroVin.toLowerCase())
    );
  }
}
export { DashboardComponent as Dashboard };