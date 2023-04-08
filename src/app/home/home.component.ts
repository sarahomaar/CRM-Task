import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem }from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
httpClient: any;
constructor(private dataService:DataService){}
searchWord:string='';
data:any[]=[];
ngOnInit():void{
  
  this.dataService.getData().subscribe({
    next:(data)=>this.data=data.deals
    
  })
  
  
}
//Drop Cards
drop(event:CdkDragDrop<any[]>){
  
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}
}

