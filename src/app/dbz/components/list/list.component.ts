import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()
public characterList: Character[] = [{
  id   : '1',
  name : 'Trunks',
  power: 10
}]

@Output()
public deleteCharacter: EventEmitter<string> = new EventEmitter();

public onDeleteCharacter(index: string):void {
  this.deleteCharacter.emit(index);
  }
}
