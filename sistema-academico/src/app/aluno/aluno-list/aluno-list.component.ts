import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './aluno-list.component.html',
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];
  displayedColumns = ['id', 'nome', 'nota', 'acoes'];

  constructor(private service: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (dados: any) => {
        (this.alunos = dados.alunos)
      },
      error: () => alert('Erro ao carregar alunos.'),
    });
  }

  editar(aluno: Aluno) {
    alert(`Editar aluno ${aluno.nome} (simulação)`);
  }

  remover(aluno: Aluno) {
    alert(`Remover aluno ${aluno.nome} (simulação)`);
    // Aqui você chamaria service.remover(aluno.id)
  }
}
