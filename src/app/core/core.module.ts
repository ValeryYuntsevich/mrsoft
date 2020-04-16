import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent, 
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CoreModule { }
