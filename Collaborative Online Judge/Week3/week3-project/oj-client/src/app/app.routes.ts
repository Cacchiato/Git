import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProblemListByDifficultyComponent } from './components/problem-list-by-difficulty/problem-list-by-difficulty.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',  
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomePageComponent
        //component: NavbarComponent   //localhost:4200/home
    },

    {
        path: 'problems',
        component: ProblemListComponent   //localhost:4200/problems
        //pathMatch default is 'full'
    },

    {
        path: 'problems/:id',
        component: ProblemDetailComponent //localhost:4200/problems/1
        //pathMatch default is 'full'
    },

    {
        path: 'problems/diff/:difficulty',
        component: ProblemListByDifficultyComponent //localhost:4200/problems/easy
    },

    {
        path: 'new-problem',
        component: NewProblemComponent //localhost:4200/new-problem
    },

    {
        path: '**',
        redirectTo: 'problems'
    }
];

export const routing = RouterModule.forRoot(routes);