import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';
import { CounterService } from './counter.service';
import { Counter2Service } from './counter2.service';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazyLoadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // //UseClass-without changing code in component we can create instance from seprate class
  // providers: [{provide: CounterService, useClass: Counter2Service}],


  // //UseExisting- Either counterservice or counter2service will get instance for counter 2 service
  // providers: [Counter2Service,{provide: CounterService, useExisting: Counter2Service}],


  // //UseValue- when we have to bind any object in dependency injection
  // providers: [
  //   Counter2Service,{provide: CounterService, useExisting: Counter2Service},
  //   {provide: 'appTitle', useValue: {title: 'this is the title of app', description: 'this is description' }}
  // ],

  //UseFactory- Apply logic before creating instance of service
  providers: [
    {
      provide: CounterService, useFactory: (testService: TestService) => 
      testService.status ? new CounterService(): new Counter2Service(),
    deps: [TestService]
   }, TestService
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
