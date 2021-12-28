import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpacesPageComponent } from './pages/spaces-page/spaces-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from "./auth/auth.guard";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from './components/alert/alert.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopicsPageComponent } from './pages/topics-page/topics-page.component';
import { KnowledgePageComponent } from './pages/knowledge-page/knowledge-page.component';
import { KnowledgeContentDisplayComponent } from './components/knowledge-content-display/knowledge-content-display.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { CreateKnowledgePageComponent } from './pages/create-knowledge-page/create-knowledge-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SpacesPageComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    PageHeaderComponent,
    PaginationComponent,
    AlertComponent,
    SpinnerComponent,
    TopicsPageComponent,
    KnowledgePageComponent,
    KnowledgeContentDisplayComponent,
    CreateKnowledgePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
