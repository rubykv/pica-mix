import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorFormComponent } from './text-editor-form/text-editor-form.component';
import { QuillModule } from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
