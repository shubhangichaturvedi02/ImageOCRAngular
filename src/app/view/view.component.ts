import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  uploadedImage: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  extractedText: string = '';
  boldText: string = '';

  constructor(private http: HttpClient) {
  }
  onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      this.uploadedImage = target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageUrl = reader.result;
      reader.readAsDataURL(this.uploadedImage);

      this.uploadImage(this.uploadedImage).subscribe((response: any) => {
        this.boldText = response.bold_words;
        this.extractedText = response.extracted_text;
      });
    }
  }
  uploadImage(file: File) {
    const formData = new FormData();
    const token = localStorage.getItem('');
    formData.append('image', file);
    return this.http.post('http://127.0.0.1:5000/upload', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
