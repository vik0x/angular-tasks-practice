import { Component, OnInit } from '@angular/core';
import { Task } from './interface/task';
import { AddingFormHandlerService } from './adding-form-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Tasks';
  public adding: boolean = false;
  public tasks: Task[] = [];
  public drafts: Task[] = [];
  public tasksToShow = [1,2,3];

  constructor(private isAdding: AddingFormHandlerService) { };
  
  newTask(item: Task) {
    this.removeDraft(item.id);
    if (this.adding === false) {
      this.drafts.push(item);
      this.drafts = this.drafts.filter(current => current !== null);
    }
    else {
      item.id = 1;
      const index = this.tasks.length;
      if (index > 0) {
        item.id = this.tasks[index -1].id + 1;
      }
      this.tasks.push (item);
      this.adding = false;
    }
  }

  getDraft(id: number) {
    const index = Object.keys(this.drafts).find(item => this.drafts[item].id === id);
    if (typeof index === 'undefined') {
      return {};
    }
    return this.drafts[index];
  } 

  removeDraft(id: number) {
    const draftIndex = Object.keys(this.drafts).find(drf => this.drafts[drf].id === id);
    if (typeof draftIndex !== 'undefined') {
      delete this.drafts[draftIndex];
    }
  }
  addingHandler() {
    this.adding = !this.adding;
    this.isAdding.adding.next(this.adding);
  }
  
}
