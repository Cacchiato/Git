import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProblemListByDifficultyComponent } from './components/problem-list-by-difficulty/problem-list-by-difficulty.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';

import { routing } from './app.routes';

import { DataService } from './services/data.service';
import { CollaborationService } from './services/collaboration.service';
import { InputService } from './services/input.service';
import { SearchPipe } from './pipes/search.pipe';
import { SessionComponent } from './components/session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    EditorComponent,
    NavbarComponent,
    ProblemListByDifficultyComponent,
    HomePageComponent,
    SearchPipe,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    InputService,
    CollaborationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
