import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorFormComponent } from './text-editor-form.component';

describe('TextEditorFormComponent', () => {
  let component: TextEditorFormComponent;
  let fixture: ComponentFixture<TextEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
