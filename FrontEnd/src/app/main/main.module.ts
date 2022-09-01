import { NgxMaskModule } from 'ngx-mask';
import { DebitoComponent } from './pages/debito/debito.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { UserComponent } from './pages/user/user.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { LayoutComponent } from './layout/layout.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    LayoutComponent,
    ExtratoComponent,
    UserComponent,
    CreditoComponent,
    DebitoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,

    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,

    NgxMaskModule.forRoot()
  ]
})
export class MainModule { }
