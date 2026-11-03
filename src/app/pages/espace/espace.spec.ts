import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { Espace } from "./espace";

describe("Espace", () => {
  let component: Espace;
  let fixture: ComponentFixture<Espace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Espace],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Espace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
