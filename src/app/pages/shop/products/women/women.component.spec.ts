import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenComponent } from './women.component';

describe('WomenComponent', () => {
  let component: WomenComponent;
  let fixture: ComponentFixture<WomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
