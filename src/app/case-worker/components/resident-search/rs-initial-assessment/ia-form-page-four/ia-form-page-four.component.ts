import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-four',
  templateUrl: './ia-form-page-four.component.html',
  styleUrls: ['./ia-form-page-four.component.scss'],
})
export class IaFormPageFourComponent implements OnInit {
  page4Form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.buildForm();
  }

  buildForm() {
    this.page4Form = this.fb.group({});
  }
}
