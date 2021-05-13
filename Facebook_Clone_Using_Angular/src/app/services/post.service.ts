import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';
import 'firebase/firestore';
import {User} from '@firebase/auth-types';
import { Observable } from 'rxjs';
// import firebase from "firebase/app"

@Injectable({
  providedIn: 'root'
})
export class PostService {
  currenUser?: User | null;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
              private authService: AuthService) {
    this.afAuth.authState.subscribe(user => this.currenUser = user);
  }
  
   getAllPosts(): Observable<any> {
    return this.afs.collection<any>('posts', ref => ref.orderBy('time', 'desc'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data(),
            };
          });
        })
      );
  }

}

