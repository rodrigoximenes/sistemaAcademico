import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './aluno.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  private http = inject(HttpClient);
  private readonly API = 'https://localhost:7088/api/aluno';

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.API);
  }

  adicionar(aluno: Omit<Aluno, 'id'>): Observable<Aluno> {
    return this.http.post<Aluno>(this.API, aluno);
  }
}
