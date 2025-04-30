import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-role-dialog',
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
  templateUrl: './add-role-dialog.component.html',
  styleUrl: './add-role-dialog.component.css'
})
export class AddRoleDialogComponent {
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
