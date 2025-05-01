import { UserworkService } from './../Services/userwork.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddRoleDialogComponent } from '../add-role-dialog/add-role-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../interfaces/userwork';

@Component({
  selector: 'app-aemov-role-dailog',
  standalone: true,
  imports: [
     CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule
  ],
  templateUrl: './aemov-role-dailog.component.html',
  styleUrl: './aemov-role-dailog.component.css'
})
export class AemovRoleDailogComponent {


  roleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string }
  ) {
    this.roleForm = this.fb.group({
      userId: [data.userId, Validators.required],
      roleName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.roleForm.valid) {
      this.dialogRef.close(this.roleForm.value);
    }
  }
    }
