import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Task } from '../interface/task';
import { AddingFormHandlerService } from '../adding-form-handler.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements Task, OnInit {
  public id: number;
  public title: string;
  public description: string;

  @Input () task : Task;
  
  @Output () item: EventEmitter <Task> = new EventEmitter();
  @Output () draft: EventEmitter <Task> = new EventEmitter();

  constructor(private adding: AddingFormHandlerService) {
    adding.watchAdding().subscribe((isAdding: boolean) => {
      if (isAdding === false) {
        this.item.emit({
          id: 0,
          title: this.title,
          description: this.description,
        });
      }
    });
  }
  
  ngOnInit(): void {
    this.id = this.task.id || 0;
    this.title = this.task.title || '';
    this.description = this.task.description || '';
  }
  
  createTask() {
    this.item.emit({
      id: this.id,
      title: this.title,
      description: this.description,
    });
  } 
  
}
