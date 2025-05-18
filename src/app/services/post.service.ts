import { Injectable } from '@angular/core';
import {Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private firestore: Firestore) {}

  // GET - Összes bejegyzés lekérése
  getPosts(): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');
    return collectionData(postsCollection, { idField: 'id' }) as Observable<Post[]>;
  }

  // POST - Új bejegyzés hozzáadása
  addPost(post: Post) {
    const postsCollection = collection(this.firestore, 'posts');
    return addDoc(postsCollection, post);
  }

  // DELETE - Bejegyzés törlése
  deletePost(id: string) {
    const postDoc = doc(this.firestore, `posts/${id}`);
    return deleteDoc(postDoc);
  }

  // PUT - Bejegyzés frissítése
  updatePost(id: string, post: Partial<Post>) {
    const postDoc = doc(this.firestore, `posts/${id}`);
    return updateDoc(postDoc, post);
  }
}
export type { Post };

