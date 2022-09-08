import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenComponent } from './men.component';

describe('MenComponent', () => {
  let component: MenComponent;
  let fixture: ComponentFixture<MenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
