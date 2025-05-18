import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, query, where, orderBy, limit, startAfter, getDocs, QuerySnapshot, DocumentData } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kereses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './kereses.component.html',
  styleUrls: ['./kereses.component.css']
})
export class KeresesComponent implements OnInit {
  eredmenyek: any[] = [];

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    await this.lekerdezesek();
  }

  async lekerdezesek() {
    const kollekcio = collection(this.firestore, 'posts');

    // Kilistázza azokat a posztokat, amiket admin csinált azaz a szerzőnél admin volt beírva
    const q1 = query(kollekcio, where('szerzo', '==', 'admin'));
    const r1 = await getDocs(q1);
    this.eredmenyek.push({ cim: 'Admin posztok', adatok: r1.docs.map(d => d.data()) });

    // 2. Kilistázza a posztokat dátum szerint csökkenő sorrendbe és csak 3at. azaz a 3 legújabbat
    const q2 = query(kollekcio, orderBy('datum', 'desc'), limit(3));
    const r2 = await getDocs(q2);
    this.eredmenyek.push({ cim: 'Legújabb 3 poszt', adatok: r2.docs.map(d => d.data()) });

    // 3. Kilistázza az első 5 postot
    const q3 = query(kollekcio, orderBy('datum', 'asc'), limit(5));
    const r3 = await getDocs(q3);
    this.eredmenyek.push({ cim: 'Első 5 poszt', adatok: r3.docs.map(d => d.data()) });

    // 4. Kilistázza azokaz a posztokat, ahol a szerző neve "G" betű után kezdődikm például Hedvig
    const q4 = query(kollekcio, where('szerzo', '!=', ''), orderBy('szerzo'), startAfter('G'), limit(3));
    const r4 = await getDocs(q4);
    this.eredmenyek.push({ cim: 'G utáni szerzők', adatok: r4.docs.map(d => d.data()) });
  }
}
