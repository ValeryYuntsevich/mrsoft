import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserListService } from 'src/app/core/services/user-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  bio: string;
  src: string;

  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private userList: UserListService) {}

  ngOnInit(): void {
    this.userList.getUserProfile(this.data.more).subscribe((data:any) => {
      console.log(data)
      if (data) {
        this.bio = data.bio;
        this.src = this.userList.API_URL + data.pic;
      }
    })
  }

}
