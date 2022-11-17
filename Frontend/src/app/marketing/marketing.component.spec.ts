import { ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogAnimationsExampleDialog, MarketingComponent } from './marketing.component';
import { InfoComponent } from 'app/info/info.component';
import { SocialmediaComponent } from 'app/socialmedia/socialmedia.component';
import { FinalComponent } from 'app/final/final.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('MarketingComponent', () => {
  let component: MarketingComponent;
  let fixture: ComponentFixture<MarketingComponent>;
  let el: DebugElement;
  let dialog : DialogAnimationsExampleDialog;
  let dialogfixture : ComponentFixture<DialogAnimationsExampleDialog>;

  const dialogMock = {
    close: () => { }
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [MatDialogModule , ReactiveFormsModule ,BrowserAnimationsModule, MatProgressBarModule,RouterTestingModule.withRoutes([
        { path: '', component: InfoComponent },
        { path: 'info', component: InfoComponent },
        { path: 'marketing', component: MarketingComponent },
        { path: 'socialmedia', component: SocialmediaComponent},
        { path: 'final', component: FinalComponent },
      ])],
      declarations: [MarketingComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketingComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

    dialogfixture = TestBed.createComponent(DialogAnimationsExampleDialog);
    dialog = dialogfixture.componentInstance;
    dialogfixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid values', () => {
    component.percentage.setValue({
    "amount" : "invalidpattern",
    "grow" : "invalidpattern",
    "agg" : "invalidpattern"
    });
    expect(component.percentage.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.percentage.setValue({
      "amount" : "20",
      "grow" : "30",
      "agg" : "40"
    });

    expect(component.percentage.valid).toEqual(true);
  });

  it('openDialog() should open a dialog', () => {
    const openDialogSpy = spyOn(component.dialog, 'open')
    component.openDialog('3000ms','1500ms');
    expect(openDialogSpy).toHaveBeenCalled();
});

it('submitted initially to be false', () => {
  component.oncomplete();
  expect(component.submitted).not.toBeTruthy();
});

it('should call onaddDetails method', () => {
  spyOn(component, 'oncomplete');
  let button = fixture.debugElement.query(By.css('button')).nativeElement;
  button.click();
  expect(component.oncomplete).not.toHaveBeenCalled();
});

it('should have f', () => {​​​​​​
  component.f;
 expect(component.f).toBeDefined();
})

it(`should navigate to nocustomer`, inject([Router], (routerSpy: Router) => {
  component.percentage.controls.amount.setValue('30');
  component.percentage.controls.grow.setValue('30');
  component.percentage.controls.agg.setValue('40');
  expect(component.percentage.valid).toBeTruthy();
  component.oncomplete();
  expect(component.oncomplete).not.toContain(['/marketing']);
}));

it('ifcase', () => {
  component.percentage.controls.amount.setValue('30');
  component.percentage.controls.grow.setValue('30');
  component.percentage.controls.agg.setValue('50');
  expect(component.myValidator1()).toBeFalsy();
});

it('should call myValidator1()',()=>{
  spyOn(component,'myValidator1').and.callThrough();
  component.myValidator1();
  expect(component.myValidator1).toHaveBeenCalled()
})

it('dialog should be closed after onClick()', () => {
  let spy = spyOn(dialog.dialogRef, 'close').and.callThrough();
  dialog.onClick();
  expect(spy).toHaveBeenCalled();
});

});
