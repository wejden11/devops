import { Component } from '@angular/core';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructorlist',
  templateUrl: './instructorlist.component.html',
  styleUrls: ['./instructorlist.component.css']
})
export class InstructorlistComponent {
data:any;
constructor(private instructorService:InstructorService){

}
ngOnInit(){
  this.fetchData();
}
fetchData(){
  this.instructorService.fetchAllData().subscribe((response)=>{
    this.data = response;
    dateOfHire: new Date(response.dateOfHire)
  });
}
}
