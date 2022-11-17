import { Component, OnInit, Injectable} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { InfoService } from 'app/service/crud.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})

@Injectable()
export class InfoComponent implements OnInit {
  public form: FormGroup;
  submitted = false;
  title = 'Onboarding';
  infoResult : any;
  body : any;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public router: Router,
    public infoservice : InfoService
  ) {

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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
        ],
      ],
      Middle : new FormControl(),
      Last : new FormControl(),
      Birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cemail: ['', [Validators.required, Validators.email]],
      interests : new FormControl()
    });
    // this.getInfos();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  // getInfos() {
  //   this.infoservice.getInfos().subscribe((data : any[]) => {
  //      this.infoResult = data;
  //      console.log(this.infoResult);
  //   });
  // }


  onaddDetails() : any {
    if (this.form.valid) {
      this.router.navigate(['/marketing']);

      this.body  = this.form.value;
      sessionStorage.setItem('info',JSON.stringify(this.body))
    }
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    public router: Router
  ) {}

  onClick() {
    this.router.navigate(['/info']);
    this.dialogRef.close();
  }
}
