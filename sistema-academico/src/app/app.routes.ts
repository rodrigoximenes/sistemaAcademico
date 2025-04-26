import { Routes } from '@angular/router';
import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';


export const routes: Routes = [
 { path: '', component: AlunoListComponent },
 { path: 'novo', component: AlunoFormComponent }
];
