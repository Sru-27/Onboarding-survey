import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';
import { URLValidator } from './_helpers/url.validator';
import { InfoService } from 'app/service/crud.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css'],
})
export class SocialmediaComponent implements OnInit {

  finalForm: FormGroup;
  submitted: false;
  Result : any;
  body : any;
  info : any;
  marketing : any;
  socialmedia : any;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    public infoservice : InfoService
  ) {
    this.finalForm = new FormGroup({
      marketing: new FormControl(),
    });
  }

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
    this.finalForm = this.formBuilder.group(
      {
        mart: new FormControl(),
        age: ['', [Validators.required]],
        c: ['', [Validators.required]],
        url: ['', [Validators.required]],
        link: ['', [Validators.required]],
        website: new FormControl()
      },
      {
        validators: [
          URLValidator('url'),
          URLValidator('link'),
        ],
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.finalForm.controls;
  }

  oncancel() {
    if (this.finalForm.valid) {
      this.router.navigate(['/final']);

     this.body = this.finalForm.value;
     sessionStorage.setItem('socialmedia',JSON.stringify(this.body))

     this.info = sessionStorage.getItem('info');
     const info = JSON.parse(this.info);

     this.marketing = sessionStorage.getItem('marketing');
     const marketing = JSON.parse(this.marketing);

     this.socialmedia = sessionStorage.getItem('socialmedia');
     const socialmedia = JSON.parse(this.socialmedia);

     const values = {...(info as object),...(marketing as object),...(socialmedia as object)}

     this.infoservice.createInfo(values).subscribe((response: any) => {
      console.log(response);
     });

      };
    }

  }

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {

  Info : any = [];
  Marketing : any = [];

  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private formBuilder: FormBuilder,
    public infoservice : InfoService,
    private router: Router
  ) {}

  onClick() {
    this.router.navigate(['/info']);
    this.dialogRef.close();
  }
}
