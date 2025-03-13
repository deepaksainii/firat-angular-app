import {Component, computed, EventEmitter, Input,Output, input,output} from '@angular/core';
import {type User} from "./user.model";
import {CardComponent} from "../shared/card/card.component";

// interface User  {
//   id:string,
//   name:string,
//   avatar:string
// }

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        CardComponent
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) user!:{
  //   id:string,
  //   name:string,
  //   avatar:string
  // }
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:Boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return "assets/users/"+this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  //select = output<string>();
  // imagePath = computed(() => {
  //   return "assets/users/"+this.avatar();
  // })

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
