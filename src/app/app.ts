import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Home } from './pages/home/home';
import { TaskManager } from "./pages/task-manager/task-manager";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, TaskManager, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
