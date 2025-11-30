import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TaskManager } from './pages/task-manager/task-manager';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'task',component:TaskManager}
];
