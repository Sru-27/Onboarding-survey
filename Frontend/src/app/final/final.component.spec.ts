import { ComponentFixture, TestBed , inject} from '@angular/core/testing';
import { FinalComponent } from './final.component';
import {Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoComponent } from 'app/info/info.component';
import { MarketingComponent } from 'app/marketing/marketing.component';
import { SocialmediaComponent } from 'app/socialmedia/socialmedia.component';

describe('FinalComponent', () => {
  let component: FinalComponent;
  let fixture: ComponentFixture<FinalComponent>;
  let router : Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule.withRoutes([
        { path: '', component: InfoComponent },
        { path: 'info', component: InfoComponent },
        { path: 'marketing', component: MarketingComponent },
        { path: 'socialmedia', component: SocialmediaComponent },
        { path: 'final', component: FinalComponent },
      ])],
      declarations: [FinalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
