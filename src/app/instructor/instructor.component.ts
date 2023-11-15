import { Component } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { format } from 'date-fns';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  data: any;
  closeResult!: string;
  form: boolean = false;
  instructor: {
    numInstructor: any;
    firstName: any;
    lastName: any;
  } = {
      numInstructor: null,
      firstName: null,
      lastName: null,
    };

  constructor(private instructorService: InstructorService, private route: ActivatedRoute, private modalService: NgbModal) { }

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

  addInstructor(instructor: any) {
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
