import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffComponent } from './staff.component';
import { By } from '@angular/platform-browser';

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    component.staffMembers = [
      { name: 'Huey Canada', 
        photo: 'assets/public/images/staff/realperson1.jpeg', 
        role:'Lead Security Engineer', 
        description: 'Security Manager', 
        info:'Email: hcanada@coyotetech.com' 
    },
      { name: 'Suzie Strangelove', 
        photo: 'assets/public/images/staff/realperson1.jpeg', 
        role:'Project Manager', 
        description: 'Lead Developer', 
        info:'Email: sstrangelove@coyotetech.com' 
    }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of staff members', () => {
    const staffElements = fixture.debugElement.queryAll(By.css('.staff-member'));
    expect(staffElements.length).toBe(component.staffMembers.length);
  });

  it('should display staff names correctly', () => {
    const staffNames = fixture.debugElement.queryAll(By.css('.staff-name'));
    expect(staffNames[0].nativeElement.textContent).toContain('Huey Canada');
    expect(staffNames[1].nativeElement.textContent).toContain('Suzie Strangelove');
  });
});