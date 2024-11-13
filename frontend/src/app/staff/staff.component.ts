import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  staffMembers = [
    {
      name: 'Huey Canada',
      photo: 'assets/public/images/staff/realperson3.jpeg',
      role: 'Lead Security Engineer',
      description: 'Ransomware?..... NOW THATS A CLASSIC!',
      info: 'Email: hcanada@coyotetech.com'
    },
    {
      name: 'Suzie Strangelove',
      photo: 'assets/public/images/staff/realperson5.jpeg',
      role: 'Project Manager',
      description: '0 st4rs f0r 7h3 h0rr1bl3 s3cu17y',
      info: 'Email: sstrangelove@coyotetech.com'
    },
    {
      name: 'Courdory Klue',
      photo: 'assets/public/images/staff/realperson1.jpeg',
      role: 'Product Device Unlock Assistant',
      description: 'Most problems stem from the entity sitting between the keyboard and chair.',
      info: 'Email: cklue@coyotetech.com'
    },
    {
      name: 'Imogen Magdalena',
      photo: 'assets/public/images/staff/realperson4.jpeg',
      role: 'Social Media Renegade Manager',
      description: 'Never stop cannot stop',
      info: 'Email: imagdalena@coyotetech.com'
    },
    // Add more staff members as needed
  ];
}