import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {SpacesPageComponent} from "./pages/spaces-page/spaces-page.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {TopicsPageComponent} from "./pages/topics-page/topics-page.component";
import {KnowledgePageComponent} from "./pages/knowledge-page/knowledge-page.component";
import {CreateKnowledgePageComponent} from "./pages/create-knowledge-page/create-knowledge-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/spaces', pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'spaces',
        component: SpacesPageComponent
      },
      {
        path: 'topics/spaceId/:spaceId',
        component: TopicsPageComponent
      },
      {
        path: 'knowledges/topicId/:topicId',
        component: KnowledgePageComponent
      },
      {
        path: 'knowledges/create',
        component: CreateKnowledgePageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
