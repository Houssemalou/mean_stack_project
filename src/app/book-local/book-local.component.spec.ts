import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLocalComponent } from './book-local.component';

describe('BookLocalComponent', () => {
  let component: BookLocalComponent;
  let fixture: ComponentFixture<BookLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
