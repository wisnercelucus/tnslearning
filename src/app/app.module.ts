import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { AppComponent } from './app.component';
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { StackComponent} from './layouts/stack/stack.component';
import { FlexBoxComponent } from './layouts/flexbox/flexbox.component';
import { ChallengeEditComponent} from './challenges/challenge-edit/challenge-edit.component';
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [
    AppComponent,
    CurrentChallengeComponent,
    ChallengeEditComponent,
    StackComponent,
    FlexBoxComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
