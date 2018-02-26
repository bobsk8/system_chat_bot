import { Component, OnInit } from '@angular/core';
import { Modal } from '../../../../model/modal';
import { Category } from '../../../../model/category';
import { User } from '../../../../model/user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../../../../service/app.service';
import { CategoryService } from '../../../../service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  closeResult: string;
  category: Category = new Category();
  modalContent = new Modal();
  user: User = new User();
  categories: Category[] = [];
  categoryUpdate: Category = new Category();

  constructor(
    private activeModal: NgbModal,
    private appService: AppService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {      
      if (!data.login || data.role_id!=1) {        
        this.appService.redirect('');
      }      
      this.user = data;
      this.getCategory();            
    });
  }

  update(content: any) {
    this.categoryService.update(this.categoryUpdate)
      .subscribe(data => {
        this.getCategory();        
        this.categoryUpdate = new Category();        
        this.modalContent.title = 'Alteração de categoria'
        this.modalContent.body = 'Alterado com sucesso!';      
        this.open(content)
      }, err => console.log(err));
  }

  getCategory(){
    this.categoryService.getAll()
    .subscribe(c => this.categories = c);
  }

  deleteBtn(category, content) {
    this.categoryService.delete(category)
      .subscribe(data => {
        this.modalContent.title = 'Exclusão de categoria'
        this.modalContent.body = 'Excluido com sucesso!';
        this.open(content)
        this.getCategory();
      }, err => console.log(err))
  }

  submit(category,modal){
    this.categoryService.create(category)
    .subscribe(d => {      
      this.modalContent.title = 'Salvo com sucesso!'
      this.modalContent.body = 'Sua categoria foi salva com sucesso!';
      this.activeModal.open(modal).result
        .then(result => {
          this.category = new Category();
          this.getCategory();
        });
    });
  }

  updateBtn(category, contentUpdate) {
    Object.assign(this.categoryUpdate, category);
    this.open(contentUpdate);
  }

  open(content: any) {
    this.activeModal.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
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

}
