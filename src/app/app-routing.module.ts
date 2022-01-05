import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {SpacesPageComponent} from "./pages/spaces-page/spaces-page.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {TopicsPageComponent} from "./pages/topics-page/topics-page.component";
import {KnowledgePageComponent} from "./pages/knowledge-page/knowledge-page.component";
import {CreateKnowledgePageComponent} from "./pages/create-knowledge-page/create-knowledge-page.component";
import {CreateTopicPageComponent} from "./pages/create-topic-page/create-topic-page.component";
import {CreateSpacePageComponent} from "./pages/create-space-page/create-space-page.component";

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
      // SPACES
      {
        path: 'spaces',
        component: SpacesPageComponent
      },
      {
        path: 'spaces/create',
        component: CreateSpacePageComponent
      },
      // TOPICS
      {
        path: 'topics/spaceId/:spaceId',
        component: TopicsPageComponent
      },
      {
        path: 'topics/create',
        component: CreateTopicPageComponent
      },
      // KNOWLEDGE
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
