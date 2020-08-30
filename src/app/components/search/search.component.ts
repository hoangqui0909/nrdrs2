import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .form-control {
        margin-bottom: 15px;
      }
    `
  ]
})
export class SearchComponent implements OnInit {
form: FormGroup;
  
@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
searchText: string = '';
constructor(private fb: FormBuilder,
private userService: UserService) {}
ngOnInit(): void {
this.buildForm();
}
buildForm(): void {
this.form = this.fb.group({
name: new FormControl(''),
discription: new FormControl(''),
nar: new FormControl(''),
sak: new FormControl(''),
sa1: new FormControl(''),
sai: new FormControl(''),
yam: new FormControl(''),
anb: new FormControl(''),
sas: new FormControl(''),
kab: new FormControl(''),
kar: new FormControl(''),
ter: new FormControl(''),
jir: new FormControl(''),
tsu: new FormControl(''),
sa2: new FormControl(''),
cho: new FormControl(''),
oro: new FormControl(''),
zet: new FormControl(''),
jug: new FormControl(''),
shi: new FormControl(''),
kan: new FormControl(''),
kib: new FormControl('')
});
}

 search(filters: any): void {
Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
this.groupFilters.emit(filters);
}
  
}