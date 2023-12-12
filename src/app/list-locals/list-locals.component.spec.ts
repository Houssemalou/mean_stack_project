import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocalsComponent } from './list-locals.component';

describe('ListLocalsComponent', () => {
  let component: ListLocalsComponent;
  let fixture: ComponentFixture<ListLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLocalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
