import { TestBed , fakeAsync , tick , inject} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FinalComponent } from './final/final.component';
import { InfoComponent } from './info/info.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {Router, Routes} from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

describe('AppComponent', () => {
let router;
  const routes: Routes = [
    { path: '', component: InfoComponent },
    { path: 'info', component: InfoComponent },
    { path: 'marketing', component: MarketingComponent },
    { path: 'socialmedia', component: SocialmediaComponent },
    { path: 'final', component: FinalComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [ RouterTestingModule , MatDialogModule , AppRoutingModule , ReactiveFormsModule , RouterTestingModule],
      declarations: [AppComponent , HeaderComponent , FinalComponent,InfoComponent,MarketingComponent,SocialmediaComponent]
    }).compileComponents();
  });
  beforeEach(inject([Router], _router => {
    router = _router;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Onboarding'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Onboarding');
  });

  it('default route redirects to info', fakeAsync(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('')).toBe(true);
  }));

});
