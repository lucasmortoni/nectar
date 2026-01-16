import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display label when provided', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const labelElement = fixture.nativeElement.querySelector('.input-label');
    expect(labelElement.textContent).toContain('Test Label');
  });

  it('should update value on input', () => {
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('.input-field');
    input.value = 'test value';
    input.dispatchEvent(new Event('input'));
    expect(component.value).toBe('test value');
  });

  it('should emit inputChange event', () => {
    fixture.detectChanges();
    let emittedValue: string | undefined;
    component.inputChange.subscribe((value: string) => {
      emittedValue = value;
    });
    const input = fixture.nativeElement.querySelector('.input-field');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(emittedValue).toBe('test');
  });

  it('should show error message when hasError is true', () => {
    component.hasError = true;
    component.errorMessage = 'This field is required';
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('.error-text');
    expect(errorElement.textContent).toContain('This field is required');
  });

  it('should show hint text when provided', () => {
    component.hint = 'This is a hint';
    fixture.detectChanges();
    const hintElement = fixture.nativeElement.querySelector('.hint-text');
    expect(hintElement.textContent.trim()).toBe('This is a hint');
  });

  it('should apply error class when hasError is true', () => {
    component.hasError = true;
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('.input-field');
    expect(inputElement.classList.contains('input-error')).toBe(true);
  });

  it('should be disabled when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('.input-field');
    expect(inputElement.disabled).toBe(true);
  });
});
