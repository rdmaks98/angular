import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:Observable<firebase.User>;
currentUser?:UserData ;
currentUser$ = new BehaviorSubject<UserData>({});

    constructor(private afs:AngularFirestore,private afAuth:AngularFireAuth) 
    {
      this.userData = afAuth.authState;
      this.userData.subscribe(user => {
        if(user)
        {
          this.afs.collection<UserData>('users')
          .doc<UserData>(user.uid)
          .valueChanges()
          .subscribe(currentUser=>{
            if(currentUser == undefined)
            {
              this.currentUser= currentUser;
              this.curretnUser$.next(this.currentUser);
            }
          });
        }
      })

     }

  }

  export interface UserData
  {
    firstname:string;
    lastname:string;
    avtar:string;
    email:string;
    id?:string;
  }
