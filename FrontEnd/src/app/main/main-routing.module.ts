import { UserComponent } from './pages/user/user.component';
import { DebitoComponent } from './pages/debito/debito.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'extrato', component: ExtratoComponent },
    { path: 'credito', component: CreditoComponent },
    { path: 'debito', component: DebitoComponent },
    { path: 'user', component: UserComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
