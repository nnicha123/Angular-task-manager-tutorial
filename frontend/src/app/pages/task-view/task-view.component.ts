import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.listId) {
        this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      } else {
        this.tasks = undefined;
        console.log("Task doesn't exist");
      }
    });
    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }
  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(() => {
      console.log('Completed successfully');
      task.completed = !task.completed;
    });
  }
}
