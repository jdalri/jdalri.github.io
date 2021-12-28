import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKnowledgePageComponent } from './create-knowledge-page.component';

describe('CreateKnowledgePageComponent', () => {
  let component: CreateKnowledgePageComponent;
  let fixture: ComponentFixture<CreateKnowledgePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKnowledgePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKnowledgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
