import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ChartType } from 'chart.js';
import { InfoService } from 'app/service/crud.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent implements OnInit {
  percentage: FormGroup;
  submitted: false;
  body : any;
  Result : any;

  amount: number = 0;
  grow: number = 0;
  agg: number = 0;

  validform = false;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [
    'Moderate',
    'Growth',
    'Aggressive Growth',
  ];
  public demodoughnutChartData: number[] = [this.amount, this.grow, this.agg];

  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private router: Router,
    public infoservice : InfoService
  ) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit() {
    this.percentage = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      grow: ['', [Validators.required, Validators.pattern(/^[.\d]+$/)]],
      agg: ['', [Validators.required, Validators.pattern(/^[.\d]+$/)]],
    });

    }

  // myValidator(group: FormGroup) {
  //   let sum = 0;
  //   for (let a in group.controls) {
  //     sum += group.get([a]).value;
  //   }
  //   return sum !== 100 ? { notValid: true } : null;
  // }

  myValidator1() {
    this.validform = false;
    let sum = 0;
    if (this.percentage.valid) {
     const formdata = this.percentage.value;
     sum =
       parseInt(formdata['amount']) +
       parseInt(formdata['agg'] + parseInt(formdata['grow']));
      if (sum == 100) {
        this.amount = parseInt(formdata['amount']);
        this.grow = parseInt(formdata['grow']);
        this.agg = parseInt(formdata['agg']);
        this.validform = true;
        this.demodoughnutChartData = [this.amount, this.grow, this.agg];
      } else { }
    }
    return this.validform;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.percentage.controls;
  }

  oncomplete() {
    if (this.percentage.valid) {
      this.router.navigate(['/socialmedia']);

      this.body = this.percentage.value;
      sessionStorage.setItem('marketing',JSON.stringify(this.body))
    }
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animation-example-dialog.html',
})
export class DialogAnimationsExampleDialog {

  Info : any = [];

  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private router: Router,
    public activatedRoute : ActivatedRoute,
    public infoservice : InfoService
  ) { }

  onClick() {
    this.router.navigate(['/info']);
    this.dialogRef.close();

    // this.infoservice.deleteInfo(Info['_id']).subscribe((data) => {
    //   console.log('Deleted Info successfully');
    // })
  }
}
