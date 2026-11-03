import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { ServiceDetail } from "./service-detail";

describe("ServiceDetail", () => {
  let component: ServiceDetail;
  let fixture: ComponentFixture<ServiceDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetail],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDetail);
    fixture.componentRef.setInput('id', '2');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
