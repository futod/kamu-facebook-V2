import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from '../../pipes/relative-time.pipe';
import { SzovegRoviditesPipe } from '../../pipes/szoveg-rovidites.pipe';

@Component({
  selector: 'bejegyzesek',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports:[CommonModule, RelativeTimePipe, SzovegRoviditesPipe],
  standalone: true
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  torles(id: string | undefined) {
  if (!id) return;
  this.postService.deletePost(id);
}
  }
