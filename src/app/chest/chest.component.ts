import { Component, OnInit, Input } from '@angular/core';
import { HoardService } from '../hoard.service'
import { HoardEntry } from '../../classes/hoardentry'
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {

  chestId: number;
  hoard: HoardEntry[] = [];
  open: boolean = false;

  constructor(private hoardService: HoardService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.chestId = data.chestId;
  }

  ngOnInit() {
    let data = this.hoardService.getHoard().subscribe((data: Object)=>{
      this.hoard = [];
      let resources: [Object] = data['resources'];
      for (let resource of resources) {
        let chestId: number = resource['chestId'];
        if (chestId == this.chestId){
          this.hoard.push(new HoardEntry(resource['type'], resource['name'], resource['link'], resource['newwindow'], resource['chestId']));
        }
      }
    });
  }

}
