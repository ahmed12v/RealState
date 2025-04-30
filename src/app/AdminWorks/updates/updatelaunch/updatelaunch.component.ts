import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanchWorkService } from '../../../Services/lanch-work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatelaunch',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './updatelaunch.component.html',
  styleUrl: './updatelaunch.component.css'
})
export class UpdatelaunchComponent {
   
  spin = false;

  updateForm: FormGroup = new FormGroup({
    Name: new FormControl(null, [Validators.required]),
    Location: new FormControl(null, [Validators.required])
  });
  
  constructor(
    private _LanchWorkService: LanchWorkService,
    private _ActivatedRoute: ActivatedRoute,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}
  
  update() {
    this.spin = true;
    let id: any;
  
    this._ActivatedRoute.params.subscribe({
      next: parameter => {
        id = parameter['id'];
  
        // append to FormData
        const formData = new FormData();
        formData.append('Name', this.updateForm.get('Name')?.value);
        formData.append('Location', this.updateForm.get('Location')?.value);
        // end append
        this._LanchWorkService.UpdateLanch(id, formData).subscribe({
          next: res => {
            this.spin = false;
            console.log(res);
            this._ToastrService.success('house hub', 'Updated');
            this._Router.navigate(['/LaunchWork']);
          },
          error: err => {
            this._ToastrService.error('house hub', 'Error');
            console.log(err);
            this.spin = false;
          }
        });
      }
    });
  }
}
