import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdutoComponentComponent } from './form-produto-component.component';

describe('FormProdutoComponentComponent', () => {
  let component: FormProdutoComponentComponent;
  let fixture: ComponentFixture<FormProdutoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProdutoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProdutoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
