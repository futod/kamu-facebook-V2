export interface Post {
  id?: string;         // Firestore dokumentum azonosítója
  cim: string;
  tartalom: string;
  szerzo: string;
  datum: Date;
}
