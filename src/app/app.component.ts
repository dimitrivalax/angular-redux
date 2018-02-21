import {Component} from '@angular/core';
import { TodoDataService } from './service/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  title = 'todo list';
}
