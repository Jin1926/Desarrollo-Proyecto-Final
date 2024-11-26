import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DeshboardComponent } from './views/deshboard/deshboard.component';
import { NewMovieComponent } from './views/new-movie/new-movie.component';
import { EditMovieComponent } from './views/edit-movie/edit-movie.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path:'', redirectTo: 'user-movies', pathMatch:'full'},
    { path: 'login', component: LoginComponent},
    { path: 'deshboard', component: DeshboardComponent, canActivate:[authGuard]},
    { path: 'new-movie', component: NewMovieComponent},
    { path: 'edit-movie', component: EditMovieComponent},
    { path: 'user-movies', component: UserMoviesComponent}
];
