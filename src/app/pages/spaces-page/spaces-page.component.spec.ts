import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesPageComponent } from './spaces-page.component';

describe('SpacesPageComponent', () => {
  let component: SpacesPageComponent;
  let fixture: ComponentFixture<SpacesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
