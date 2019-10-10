import { Component, OnInit } from '@angular/core';
import { HoardService } from '../hoard.service'
import { HoardEntry } from '../../classes/hoardentry'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { ChestComponent } from '../chest/chest.component'


import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-hoard',
  templateUrl: './hoard.component.html',
  styleUrls: ['./hoard.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '105px',
        width: '105px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      }))
  ]) ]
})



export class HoardComponent implements OnInit {

  hoard: HoardEntry[] = [];
  hoardMap: Map<number, HoardEntry[]> = new Map();
  chestIdsMapMouseHover: Map<number, boolean> = new Map();
  chestIdsMapImage: Map<number, string> = new Map();
  chestIds: number[] = [];
  colorBox: string = 'color-box-large';

  constructor(private hoardService: HoardService, public dialog: MatDialog) { 
  }

  mouseOver(chestId: number) {
    this.chestIdsMapMouseHover.set(chestId, true);
    this.chestIdsMapImage.set(chestId, "assets/chest2.jpg");
    //console.log("MouseOver for chestId:"+chestId);
  }

  mouseOut(chestId: number) {
    this.chestIdsMapMouseHover.set(chestId, false);
    this.chestIdsMapImage.set(chestId, "assets/chest1.jpg");
    //console.log("mouseOut for chestId:"+chestId);
  }

  isChestHovered(chestId: number): boolean {
    //console.log("isChestHovered for chestId:"+chestId);
    return this.chestIdsMapMouseHover.get(chestId);
  }

  chestImage(chestId: number): string {
    console.log("chestImage for chestId:"+chestId);
    if (this.chestIdsMapImage.has(chestId)){
      return this.chestIdsMapImage.get(chestId);
    }
    else{
      return "assets/chest1.jpg";
    }
  }


  onClick(chestId: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    dialogConfig.position = {
      'top': '0',
      left: '0'
  };

    const dialogRef = this.dialog.open(ChestComponent, {
      height: '400px',
      width: '600px',
      data: { chestId: chestId },
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    let data = this.hoardService.getHoard().subscribe((data: Object)=>{
      let resources: [Object] = data['resources'];
      for (let resource of resources) {
        let chestId: number = resource['chestId'];
        console.log("chestId: "+chestId);
        let hoardArrayRef: HoardEntry[] = [];
        if (this.hoardMap.has(chestId)){
          hoardArrayRef = this.hoardMap.get(chestId);
        }
        else{
          this.chestIds.push(chestId);
          this.hoardMap.set(chestId, []);
          hoardArrayRef = this.hoardMap.get(chestId);
        }
        this.chestIdsMapMouseHover.set(chestId, false);
        this.chestIdsMapImage.set(chestId, "assets/chest1.jpg");
        hoardArrayRef.push(new HoardEntry(resource['type'], resource['name'], resource['link'], resource['newwindow'], resource['chestId']));
      }
    });
  }

}
