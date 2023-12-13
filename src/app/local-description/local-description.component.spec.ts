import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDescriptionComponent } from './local-description.component';

describe('LocalDescriptionComponent', () => {
  let component: LocalDescriptionComponent;
  let fixture: ComponentFixture<LocalDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
