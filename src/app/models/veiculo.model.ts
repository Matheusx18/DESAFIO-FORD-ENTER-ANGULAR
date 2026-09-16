export interface Vehicle {
  id: string;
  modelo: string;
  totalVendas: number;
  conectados: number;
  updateSoftware: number;
  imagemUrl: string;
}

export interface VehicleData {
  codigo: string;
  odometro: string;
  nivelCombustivel: string;
  status: string;
  lat: number;
  lng: number;
}