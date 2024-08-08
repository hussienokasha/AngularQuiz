import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FloatLabelModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    PaginatorModule,
  ],
  exports: [HeaderComponent, RouterModule,FloatLabelModule,PaginatorModule],
})
export class SharedModule {}
