import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

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
    }
  ];

  selectedFile: File | null = null;
  uploadMessage: string | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.uploadMessage = 'Please select a file first.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    // Send the file to the server
    this.http.post('/upload-reverse-shell', formData).subscribe(
      (response) => {
        this.uploadMessage = 'File uploaded and executed successfully on the server!';
      },
      (error) => {
        this.uploadMessage = 'Error uploading file: ' + error.message;
      }
    );
  }
}