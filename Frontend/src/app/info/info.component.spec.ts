import {
  ComponentFixture,
  TestBed,inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfoComponent,DialogAnimationsExampleDialog} from './info.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MarketingComponent } from 'app/marketing/marketing.component';
import { SocialmediaComponent } from 'app/socialmedia/socialmedia.component';
import { FinalComponent } from 'app/final/final.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let dialog : DialogAnimationsExampleDialog;
  let dialogfixture : ComponentFixture<DialogAnimationsExampleDialog>;
  const dialogMock = {
    close: () => { }
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        RouterTestingModule.withRoutes([
          { path: '', component: InfoComponent },
          { path: 'info', component: InfoComponent },
          { path: 'marketing', component: MarketingComponent },
          { path: 'socialmedia', component: SocialmediaComponent },
          { path: 'final', component: FinalComponent },
        ]),
      ],
      declarations: [InfoComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogMock,
        },

      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dialogfixture = TestBed.createComponent(DialogAnimationsExampleDialog);
    dialog = dialogfixture.componentInstance;
    dialogfixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Onboarding'`, () => {
    const fixture = TestBed.createComponent(InfoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Onboarding');
  });

  it('should require valid values', () => {
    component.form.setValue({
      firstname: '',
      email: 'invalidemail',
      cemail: 'invalidemail',
      Birthday: '',
    });
    expect(component.form.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.form.setValue({
      firstname: 'Sruthi',
      email: 'sru456@gmail.com',
      cemail: 'murali123@gmail.com',
      Birthday: '27.12.2000',
    });

    expect(component.form.valid).toEqual(true);
  });

  it('openDialog() should open a dialog', () => {
    const openDialogSpy = spyOn(component.dialog, 'open');
    component.openDialog('3000ms', '1500ms');
    expect(openDialogSpy).toHaveBeenCalled();
  });

  it('submitted initially to be false', () => {
    component.onaddDetails();
    expect(component.submitted).toBeFalsy();
  });

  it('should call onaddDetails method', () => {
    spyOn(component, 'onaddDetails');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onaddDetails).not.toHaveBeenCalled();
  });

  it('should disable on invalid form', () => {
    fixture.componentInstance.submitted = true;
    fixture.detectChanges();
     const button: HTMLButtonElement = fixture.debugElement.query(By.css('.actions > button')).nativeElement;
    expect(button.attributes.getNamedItem('ng-reflect-is-disabled')?.value).not.toBeTruthy();
});

it('dialog should be closed after onYesClick()', () => {
  let spy = spyOn(dialog.dialogRef, 'close').and.callThrough();
  dialog.onClick();
  expect(spy).toHaveBeenCalled();
});

it(`should navigate to nocustomer`, inject([Router], (routerSpy: Router) => {
  component.form.controls.firstname.setValue('Sruthi');
  component.form.controls.email.setValue('murali@gmail.com');
  component.form.controls.cemail.setValue('shru@gmail.com');
  component.form.controls.Birthday.setValue('27.12.2000');
  expect(component.form.valid).toBeTruthy();
  component.onaddDetails();
  expect(component.onaddDetails).not.toContain(['/marketing']);
}));

});

