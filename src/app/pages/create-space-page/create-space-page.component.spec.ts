import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpacePageComponent } from './create-space-page.component';

describe('CreateSpacePageComponent', () => {
  let component: CreateSpacePageComponent;
  let fixture: ComponentFixture<CreateSpacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpacePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
