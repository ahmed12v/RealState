import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LanchWorkService } from '../../../Services/lanch-work.service';

@Component({
  selector: 'app-lauch',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './lauch.component.html',
  styleUrl: './lauch.component.css'
})
export class LauchComponent {
spin=false

  AddForm: FormGroup = new FormGroup({
    Name: new FormControl(null, [Validators.required]),
    Location: new FormControl(null, [Validators.required]),
  });
  BannerImage!: File;
  MasterPlanImage!: File;
  LocationImage!: File;
  PaymentPlanImage!: File;
  files: Record<string, File> = {};
  
  onFileChange(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      this.files[type] = file;
    }
  }
  
  constructor(
    private _LanchWorkService: LanchWorkService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}
  
  Add() {
    this.spin = true;
        // append to FormData
        const formData = new FormData();
        formData.append('Name', this.AddForm.get('Name')?.value);
        formData.append('Location', this.AddForm.get('Location')?.value);
        formData.append('PaymentPlanImage',this.files['PaymentPlanImage'] );
        formData.append('LocationImage', this.files['LocationImage']);
        formData.append('MasterPlanImage', this.files['MasterPlanImage']);
        formData.append('BannerImage', this.files['BannerImage']);
        // end append
        this._LanchWorkService.AddLanch(formData).subscribe({
          next: res => {
            this.spin = false;
            console.log(res);
            this._ToastrService.success('house hub', 'Add to Launches Table');
            this._Router.navigate(['/LaunchWork']);
          },
          error: err => {
            this._ToastrService.error('house hub', 'Error');
            console.log(err);
            this.spin = false;
          }
        });
      }

    }
  

