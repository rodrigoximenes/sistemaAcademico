import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css',
})
export class AlunoFormComponent {
  nome: string = '';
  nota: number = 0;

  constructor(private alunoService: AlunoService, private router: Router) {}

  adicionar() {
    const novoAluno = new Aluno(this.nome, this.nota);
    this.alunoService.adicionar(novoAluno);
    this.nome = '';
    this.nota = 0;
    this.router.navigate(['/']);
  }
}
