import { Component } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css'],
  providers:[DatePipe]
})
export class InstructorComponent {
  data: any;
  closeResult!: string;
  form: boolean = false;
  instructor: {
    firstName: any;
    lastName: any;
    dateofhire:any;
  } = {
      firstName: null,
      lastName: null,
      dateofhire:null
    };

  constructor(private instructorService: InstructorService, private route: ActivatedRoute, private modalService: NgbModal,private datePipe: DatePipe) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.instructorService.fetchData(id).subscribe((response) => {
      this.data = response;
    });
  }
  formatDate(event: any) {
    // Formatez la date au format 'yyyy-MM-dd'
    this.instructor.dateofhire = this.datePipe.transform(event.target.value, 'yyyy-MM-dd');
  }
  addInstructor(instructor: any) {
      this.instructor.dateofhire = this.datePipe.transform(this.instructor.dateofhire, 'yyyy-MM-dd');
      return this.instructorService.addInstructor(instructor).subscribe((response) => {
      this.data = response;
      this.fetchData();
    });
  }




  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  closeForm() {

  }
  cancel() {
    this.form = false;
  }


}
