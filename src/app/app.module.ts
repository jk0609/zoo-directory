import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent }  from './components/animal-list.component';
// import { NewAnimalComponent }  from './components/new-animal.component';
// import { UpdateAnimalComponent }  from './components/update-animal.component';
// import { AgePipe } from './pints-remaining.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    // NewAnimalComponent,
    // UpdateAnimalComponent,
    // AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
