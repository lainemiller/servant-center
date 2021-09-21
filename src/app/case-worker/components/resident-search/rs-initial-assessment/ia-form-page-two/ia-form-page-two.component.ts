import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-two',
  templateUrl: './ia-form-page-two.component.html',
  styleUrls: ['./ia-form-page-two.component.scss'],
})
export class IaFormPageTwoComponent implements OnInit {
  page2Form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.buildForm();
  }

  buildForm() {
    this.page2Form = this.fb.group({});
  }
}
