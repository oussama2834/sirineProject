import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './clients/client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private API_URL = 'http://localhost:8080/api/clients';
  constructor(private httpClient: HttpClient) { }
  getClientsList(): Observable<Client[]> {
    const getClientsUrl = `${this.API_URL}`;
    return this.httpClient.get<Client[]>(getClientsUrl);
  }
  createClient(client: Client): Observable<any> {
    const createClientUrl = `${this.API_URL}`;
    return this.httpClient.post(createClientUrl, client);
  }
  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.API_URL}/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Object> {
    return this.httpClient.put(`${this.API_URL}/${id}`, client);
  }

  deleteClient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
