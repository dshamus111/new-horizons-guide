import { Injectable } from '@angular/core';
import { Collectable } from '../models/Collectable.model';
import { Subject } from 'rxjs';
import { openDB } from 'idb';
import { Fish, Bug} from '../models/Animal.model';


import { northFish } from '../models/north-hemi-fish-default';
import { northBugs } from '../models/north-hemi-bugs-default';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private db;

  fishList: Fish[];
  bugList: Bug[];

  constructor() {}

  async initializeDB(hemisphere: string) {
    if (hemisphere === 'north') {
      this.fishList = northFish;
      this.bugList = northBugs;
    }

    await this.createIDB();
  }

  async createIDB() {
    this.db = await openDB('collectables-db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('Fish')) {
          db.createObjectStore('Fish', {
            keyPath: 'name'
          });
        }

        if (!db.objectStoreNames.contains('Bugs')) {
          db.createObjectStore('Bugs', {
            keyPath: 'name'
          });
        }

        if (!db.objectStoreNames.contains('Fossils')) {
          db.createObjectStore('Fossils');
        }

        if (!db.objectStoreNames.contains('Art')) {
          db.createObjectStore('Art');
        }

      }
    });

    // let cursor: IDBCursor = await this.db.transaction('Fish').store.openCursor();

    for (const element of this.fishList) {
      await this.db.get('Fish', element.name)
        .then(row => {
          if (row === undefined) {
            this.db.put('Fish', element);
          }
        });
    }

    for (const element of this.bugList) {
      await this.db.get('Bugs', element.name)
        .then(row => {
          if (row === undefined) {
            this.db.put('Bugs', element);
          }
        });
    }

  }

  async update(store: string, data: any) {
    const tx = this.db.transaction(store, 'readwrite');

    await tx.store.put(data);
  }

  async getAll(store: string) {
    return await this.db.getAll(store);
  }
}
