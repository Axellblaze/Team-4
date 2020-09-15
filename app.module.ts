import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { NewdongleComponent } from './newdongle/newdongle.component';
import { RechargedongleComponent } from './rechargedongle/rechargedongle.component';
import { PlansdongleComponent } from './plansdongle/plansdongle.component';
import { BilldongleComponent } from './billdongle/billdongle.component';
import { ProductdongleComponent } from './productdongle/productdongle.component';
import { NewconnectionpostpaidComponent } from './newconnectionpostpaid/newconnectionpostpaid.component';
import { RechargepostpaidComponent } from './rechargepostpaid/rechargepostpaid.component';
import { ProductpostpaidComponent } from './productpostpaid/productpostpaid.component';
import { PlanspostpaidComponent } from './planspostpaid/planspostpaid.component';
import { ConversionpostpaidComponent } from './conversionpostpaid/conversionpostpaid.component';
import { BillpostpaidComponent } from './billpostpaid/billpostpaid.component';
import { NewconnectionprepaidComponent } from './newconnectionprepaid/newconnectionprepaid.component';
import { RechargeprepaidComponent } from './rechargeprepaid/rechargeprepaid.component';
import { PlansprepaidComponent } from './plansprepaid/plansprepaid.component';
import { ProductsprepaidComponent } from './productsprepaid/productsprepaid.component';
import { ConversionprepaidComponent } from './conversionprepaid/conversionprepaid.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PrepaidregComponent } from './prepaidreg/prepaidreg.component';
import { PostpaidregComponent } from './postpaidreg/postpaidreg.component';
import { DongleregComponent } from './donglereg/donglereg.component';
import { FormsModule } from '@angular/forms';
import { PhonenumberverificationComponent } from './phonenumberverification/phonenumberverification.component';
import{HttpClientModule} from '@angular/common/http';
import { PhoneLoginComponent } from './phone-login/phone-login.component'
import {ReactiveFormsModule} from '@angular/forms'
const config = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  projectId: '<your-project-id>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};
@NgModule({
  declarations: [
    AppComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    LoginComponent,
    AboutComponent,
    HelpComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AchievementsComponent,
    ProductsComponent,
    ServicesComponent,
    HomeComponent,
    NetworkComponent,
    NewdongleComponent,
    RechargedongleComponent,
    PlansdongleComponent,
    BilldongleComponent,
    ProductdongleComponent,
    NewconnectionpostpaidComponent,
    RechargepostpaidComponent,
    ProductpostpaidComponent,
    PlanspostpaidComponent,
    ConversionpostpaidComponent,
    BillpostpaidComponent,
    NewconnectionprepaidComponent,
    RechargeprepaidComponent,
    PlansprepaidComponent,
    ProductsprepaidComponent,
    ConversionprepaidComponent,
    NewuserComponent,
    PrepaidregComponent,
    PostpaidregComponent,
    DongleregComponent,
    PhonenumberverificationComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
