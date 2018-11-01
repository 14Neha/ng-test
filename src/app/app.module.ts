import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {GitApiService} from './git-api.service';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
     Ng2OrderModule,
    NgbModule.forRoot()
  ],
  providers: [GitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
