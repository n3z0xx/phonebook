import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideinfoComponent } from './sideinfo.component';

describe('SideinfoComponent', () => {
  let component: SideinfoComponent;
  let fixture: ComponentFixture<SideinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
