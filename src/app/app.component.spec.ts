import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('suma 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app._add("3","7");
    expect(result).toBe("10");
  });
  
  it('should add zero to a number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result1 = app._add("0", "7");
    const result2 = app._add("3", "0");
    expect(result1).toBe("7");
    expect(result2).toBe("3");
  });

  it('should add a positive and a negative number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app._add("3", "-7");
    expect(result).toBe("-4");
  });

  it('should add two negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app._add("-3", "-7");
    expect(result).toBe("-10");
  });

  it('suma 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app._add("54","87");
    expect(result).toBe("142");
  });


  it('resta 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app.subs("36","27");
    expect(result).toBe("9");
  });

  it('resta 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app.subs("186","96");
    expect(result).toBe("91");
  });

  it('divide 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app.div("165","8");
    expect(result).toBe("20,625");
  });

  it('should divide a positive number by a negative number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.div("165", "-8");
    expect(result).toBe("-20.625");
  });

  it('divide 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app.div("856","8");
    expect(result).toBe("63");
  });

  it('should divide a positive number by a small positive decimal number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.div("8", "0.5");
    expect(result).toBe("16");
  });

  it('should handle division by zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => app.div("165", "0")).toThrow(new Error("Cannot divide by zero"));
  });


  it('should divide two decimal numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.div("8.4", "2.1");
    expect(result).toBe("4");
  });
  
  it('multiplica 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app.mult("3","7");
    expect(result).toBe("21");
  });

  it('multiplica 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var result = app.mult("856","8");
    expect(result).toBe("108");
  });

  it('should multiply two decimal numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.mult("8.5", "4.2");
    expect(result).toBe("35.7");
  });

  it('should multiply any number by zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result1 = app.mult("856", "0");
    const result2 = app.mult("0", "8");
    expect(result1).toBe("0");
    expect(result2).toBe("0");
  });

  it('should multiply two negative numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.mult("-856", "-8");
    expect(result).toBe("6848");
  });

  it(`should have the 'calculator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('calculator');
  });


});
