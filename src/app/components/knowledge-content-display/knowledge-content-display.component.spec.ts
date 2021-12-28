import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeContentDisplayComponent } from './knowledge-content-display.component';

describe('KnowledgeContentDisplayComponent', () => {
  let component: KnowledgeContentDisplayComponent;
  let fixture: ComponentFixture<KnowledgeContentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeContentDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
