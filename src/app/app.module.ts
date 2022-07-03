import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosPage } from './pages/todos/todos.page';
import { CompletatiPage } from './pages/completati/completati.page';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/header/form/form/form.component';
import { FormsModule } from '@angular/forms';
import { StampaComponent } from './component/stampa/stampa.component';
import { StampaCompletatiComponent } from './component/stampa-completati/stampa-completati.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPage,
    CompletatiPage,
    HeaderComponent,
    FormComponent,
    StampaComponent,
    StampaCompletatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
