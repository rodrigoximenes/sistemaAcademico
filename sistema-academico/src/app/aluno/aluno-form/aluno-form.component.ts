import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css',
})
export class AlunoFormComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: AlunoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      nota: [
        null,
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
    });
  }

  salvar() {
    if (this.form.valid) {
      this.service.adicionar(this.form.value).subscribe({
        next: () => this.router.navigate(['/']),
        error: () => alert('Erro ao salvar aluno.'),
      });
    }
  }
}
