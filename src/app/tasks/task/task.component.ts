import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input( { required: true } ) task! : Task;

  constructor(private readonly tasksService: TasksService) {}

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }

}
