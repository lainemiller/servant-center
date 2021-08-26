import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-form-page-five',
  templateUrl: './ia-form-page-five.component.html',
  styleUrls: ['./ia-form-page-five.component.scss'],
})
export class IaFormPageFiveComponent implements OnInit {
  page5Form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.buildForm();
  }

  buildForm() {
    this.page5Form = this.fb.group({});
  }
}
