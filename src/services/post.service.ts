import { Injectable } from '@angular/core';
import { Post } from '../app/services/post.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private collectionName = 'posts';

  constructor(private afs: AngularFirestore) {}

  // CREATE
  addPost(post: Post): Promise<any> {
    return this.afs.collection<Post>(this.collectionName).add(post);
  }

  // READ - összes lekérése
  getPosts(): Observable<Post[]> {
    return this.afs.collection<Post>(this.collectionName).valueChanges({ idField: 'id' });
  }

  // UPDATE
  updatePost(id: string, post: Partial<Post>): Promise<void> {
    return this.afs.collection(this.collectionName).doc(id).update(post);
  }

  // DELETE
  deletePost(id: string): Promise<void> {
    return this.afs.collection(this.collectionName).doc(id).delete();
  }
}
