import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { Demande } from "./demande";

describe("Demande", () => {
  let component: Demande;
  let fixture: ComponentFixture<Demande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demande],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Demande);
    fixture.componentRef.setInput('id', '2');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
