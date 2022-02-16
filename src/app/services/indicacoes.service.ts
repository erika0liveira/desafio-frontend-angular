import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Indicacao from '../models/indicacao.model';

@Injectable()
export class IndicacoesService {

  constructor(private http: HttpClient) {}

  obterIndicacoes():Observable<Indicacao[]> {
    return this.http.get<Indicacao[]>("https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes")
  }

  obterPorId(id:number):Observable<Indicacao> {
    return this.http.get<Indicacao>("https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes/" + id)
  }

  cadastrar(indicacao:Indicacao):Observable<Indicacao> {
    return this.http.post<Indicacao>("https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes", indicacao)
  }

  deletar(id:number):Observable<void> {
    return this.http.delete<void>("https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes/" + id)
  }
}
