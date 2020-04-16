import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppMaterialModule } from '../app-material.module';
import { ProfileComponent } from './components/user-list/profile/profile.component';

@NgModule({
  declarations: [UserListComponent, ProfileComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [UserListComponent],
})
export class SharedModule { }
