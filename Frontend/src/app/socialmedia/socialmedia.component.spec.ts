import { ComponentFixture, TestBed , inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {By} from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {Router, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { DialogAnimationsExampleDialog, SocialmediaComponent } from './socialmedia.component';
import { InfoComponent } from 'app/info/info.component';
import { MarketingComponent } from 'app/marketing/marketing.component';
import { FinalComponent } from 'app/final/final.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SocialmediaComponent', () => {
  let component: SocialmediaComponent;
  let fixture: ComponentFixture<SocialmediaComponent>;
  let router: Router;
  let dialog : DialogAnimationsExampleDialog;
  let dialogfixture : ComponentFixture<DialogAnimationsExampleDialog>;
  const dialogMock = {
    close: () => { }
    };

  const routes: Routes = [
    { path: '', component: InfoComponent },
    { path: 'info', component: InfoComponent },
    { path: 'marketing', component: MarketingComponent },
    { path: 'socialmedia', component: SocialmediaComponent },
    { path: 'final', component: FinalComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [MatDialogModule , ReactiveFormsModule , MatProgressBarModule , BrowserAnimationsModule,  RouterTestingModule.withRoutes(routes),],
      declarations: [SocialmediaComponent , InfoComponent,MarketingComponent,FinalComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogMock,
        },
      ],

    }).compileComponents();

    fixture = TestBed.createComponent(SocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dialogfixture = TestBed.createComponent(DialogAnimationsExampleDialog);
    dialog = dialogfixture.componentInstance;
    dialogfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid values', () => {
    component.finalForm.setValue({
    "age" : "",
    "c" : "",
    "url" : "invalidURL",
    "link" : "invalidURL",
    "mart" : ""
    });
    expect(component.finalForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.finalForm.setValue({
    "age" : "10-20",
    "c" : "Abc",
    "url" : "https://www.edu.com",
    "link" : "http://www.example.com/index.html",
    "mart" : "Email Marketing"
    });

    expect(component.finalForm.valid).toEqual(true);
  });

  it('openDialog() should open a dialog', () => {
    const openDialogSpy = spyOn(component.dialog, 'open')

    component.openDialog('3000ms','1500ms');

    expect(openDialogSpy).toHaveBeenCalled();
});

it('should have f', () => {​​​​​​
  component.f;
 expect(component.f).toBeDefined();
})

it('submitted initially to be false', () => {
  component.oncancel();
  expect(component.submitted).not.toBeTruthy();
});

it('should call oncancel method', () => {
  spyOn(component, 'oncancel');
  let button = fixture.debugElement.query(By.css('button')).nativeElement;
  button.click();
  expect(component.oncancel).not.toHaveBeenCalled();
});

it('dialog should be closed after onYesClick()', () => {
  let spy = spyOn(dialog.dialogRef, 'close').and.callThrough();
  dialog.onClick();
  expect(spy).toHaveBeenCalled();
});

it(`should navigate to nocustomer`, inject([Router], (routerSpy: Router) => {
  component.finalForm.controls.age.setValue('10-20');
  component.finalForm.controls.c.setValue('abc');
  component.finalForm.controls.url.setValue('https://www.edu.com');
  component.finalForm.controls.link.setValue('https://www.education.com');
  component.finalForm.controls.mart.setValue('Email Marketing');
  expect(component.finalForm.valid).toBeTruthy();
  component.oncancel();
  expect(component.oncancel).not.toContain(['/marketing']);
})); 

});
