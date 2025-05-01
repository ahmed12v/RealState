import { User } from './../../interfaces/userwork';
import { Component, OnInit } from '@angular/core';
import { UserworkService } from '../../Services/userwork.service';
import { AddRoleDialogComponent } from '../../add-role-dialog/add-role-dialog.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SerchpipePipe } from '../../pipes/serchpipe.pipe';
import { FormsModule } from '@angular/forms';
import { AemovRoleDailogComponent } from '../../aemov-role-dailog/aemov-role-dailog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule , SerchpipePipe ,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(
    private _UserworkService: UserworkService,
    private dialog: MatDialog,
    private ToastrService: ToastrService
  ) {}

  //#region GetandRoleDialog
  spiner = false;
  AllComeUser!: User;
  userWord:string=''
  selectedUserRoles: string[] = [];

  

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers() {
    this.spiner = true;
    this._UserworkService.AllUsers().subscribe({
      next: (res) => {
        this.AllComeUser = res;
        this.spiner = false;
      },
      error: (err) => {
        this.spiner = false;
        console.error(err);
      }
    });
  }

  openAddRoleDialog(userId: string) {
    const dialogRef = this.dialog.open(AddRoleDialogComponent, {
      width: '400px',
      maxHeight: '90vh',
      disableClose: false,
      autoFocus: true,
      data: { userId },
      panelClass: 'centered-dialog'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._UserworkService.AddRole(result).subscribe({
          next: (res) =>{
            this.GetUsers()
            this.ToastrService.success('house hub' , 'Role Added done')
          } ,
          error: (err) =>{
            console.error('Error adding role:', err)
            this.ToastrService.error('house hub' , err?.error?.errors[0]?.description )

          }


        });
      }
    });
  }

  openRemoveRoleDialog(userId: string) {
    const dialogRef = this.dialog.open(AemovRoleDailogComponent, {
      width: '400px',
      maxHeight: '90vh',
      disableClose: false,
      autoFocus: true,
      data: { userId },
      panelClass: 'centered-dialog'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._UserworkService.remove(result).subscribe({
          next: (res) =>{
            this.GetUsers()
            this.ToastrService.success('house hub' , 'Role Added done')
          } ,
          error: (err) =>{
            console.error('Error adding role:', err)
            this.ToastrService.error('house hub' , err?.error?.errors[0]?.description )

          }


        });
      }
    });
  }

  
  
//#endregion
  
BlockUser(userId: string) {
  this._UserworkService.Bolcked(userId).subscribe({
    next: (res) => {
      //console.log(res)
      const user = this.AllComeUser.find(u => u.id === userId);
      this.GetUsers()
    },
    error: (err) => {
     // console.error(err);
    }
  });
}
  
}
