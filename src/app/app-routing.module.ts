import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"skills",component:SkillsComponent,title:"Skills"},
  {path:"experience",component:ExperienceComponent,title:"Experience"},
  {path:"work",component:WorkComponent,title:"Work"},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
