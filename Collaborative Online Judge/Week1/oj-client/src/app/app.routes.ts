import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProblemListByDifficultyComponent } from './components/problem-list-by-difficulty/problem-list-by-difficulty.component';
import { ProblemListByNameComponent } from './components/problem-list-by-name/problem-list-by-name.component';
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
        component: ProblemListComponent //localhost:4200/problems
    },

    {
        path: 'problems/:id',
        component: ProblemDetailComponent //localhost:4200/problems/1
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
        path: 'problem-search/:name',
        component: ProblemListByNameComponent, //localhost:4200/new-problem
        pathMatch: 'full'
    },

    {
        path: '**',
        redirectTo: 'home'
    }
];

export const routing = RouterModule.forRoot(routes);