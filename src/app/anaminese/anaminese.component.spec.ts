import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamineseComponent } from './anaminese.component';

describe('AnamineseComponent', () => {
  let component: AnamineseComponent;
  let fixture: ComponentFixture<AnamineseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamineseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
