import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../shared/services/crud.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  public manageForm: FormGroup;
  public submitted: boolean = false;

  constructor(private route: Router, private formBuilder: FormBuilder, private crudService: CrudService) {
    this.manageForm = this.formBuilder.group({
      userId: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(40)]],
      body: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.manageForm.controls; }

  goToList() {
    this.route.navigate(['list']);
  }

  save() {
    this.submitted = true;
    if (this.manageForm.invalid) {
      return;
    }
    this.crudService.saveRecord(this.manageForm.value).subscribe(() => {
      this.route.navigate(['list']);
    });
  }

}
