import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city = 'Hulluch';

  constructor(private storage: Storage) { }

  ngOnInit() {
    // On récupère la ville dans la bdd
    this.storage.get('city').then(city => {
      if (null !== city) this.city = city;
    });
  }

  save() {
    console.log(this.city);
    // On enregistre la ville dans le indexeddb ou
    // la BDD du téléphone
    this.storage.set('city', this.city);
  }

}
