import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  ujBejegyzes: Post = {
    cim: '',
    tartalom: '',
    szerzo: '',
    datum: new Date()
  };

  constructor(private postService: PostService) {}

  bejegyzesBekuldese() {
    this.ujBejegyzes.datum = new Date();
    this.postService.addPost(this.ujBejegyzes)
      .then(() => {
        alert('Sikeresen hozzáadva!');
        this.ujBejegyzes = { cim: '', tartalom: '', szerzo: '', datum: new Date() };
      })
      .catch(error => {
        console.error('Hiba történt:', error);
        alert('Hiba történt a mentés során.');
      });
  }
}
