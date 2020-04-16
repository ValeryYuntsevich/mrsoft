import { Component, OnInit, ViewChild } from '@angular/core';
import { UserListService } from 'src/app/core/services/user-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IUsers, IUserList } from 'src/app/core/models/users';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'shortInfo', 'details', 'delete'];
  dataSource = new MatTableDataSource();
  userList = [];
  length: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private userListService: UserListService, 
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userListService.getUsersList().subscribe((data: IUsers) => {
      if (data) {
        this.userList = data.data as IUserList[];
        this.dataSource.data = this.userList;
        this.dataSource.paginator = this.paginator;
        this.setQueryParams();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteByIdUser(element: IUserList) {
    const date = new Date();
    this.userList = this.deleteUser(element);
    this.userList.push({ ...element, disabled: true, date: date });
    this.dataSource.data = this.userList;
  }

  deleteUser(element: IUserList) {
    return this.userList.filter(val => {
      return val.id != element.id;
    });
  }

  resetByIdUser(element: IUserList) {
    this.userList = this.deleteUser(element);
    this.userList.push({ ...element, disabled: false });
    this.dataSource.data = this.userList;
  }

  getUserProfile(element: IUserList) {
    this.addQueryParams('name', element.name);
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '40%',
      data: element
    });
  }

  addQueryParams(names, data) {
    this.router.navigate([], {
      queryParams: {
        [names]: data ? data : null
      },
      queryParamsHandling: 'merge',
    });
  }

  setQueryParams(event?) {
    const pageSize = event ? event.pageSize : 5;
    this.addQueryParams('pageSize', pageSize);
  }

}
