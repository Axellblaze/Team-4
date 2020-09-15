import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NetworkComponent } from './network/network.component';
import { NewconnectionpostpaidComponent } from './newconnectionpostpaid/newconnectionpostpaid.component';
import { RechargedongleComponent } from './rechargedongle/rechargedongle.component';
import { RechargepostpaidComponent } from './rechargepostpaid/rechargepostpaid.component';
import { PlanspostpaidComponent } from './planspostpaid/planspostpaid.component';
import { ProductpostpaidComponent } from './productpostpaid/productpostpaid.component';
import { ConversionpostpaidComponent } from './conversionpostpaid/conversionpostpaid.component';
import { BillpostpaidComponent } from './billpostpaid/billpostpaid.component';
import { NewconnectionprepaidComponent } from './newconnectionprepaid/newconnectionprepaid.component';
import { RechargeprepaidComponent } from './rechargeprepaid/rechargeprepaid.component';
import { PlansprepaidComponent } from './plansprepaid/plansprepaid.component';
import { ProductsprepaidComponent } from './productsprepaid/productsprepaid.component';
import { ConversionprepaidComponent } from './conversionprepaid/conversionprepaid.component';
import { NewdongleComponent } from './newdongle/newdongle.component';
import { PlansdongleComponent } from './plansdongle/plansdongle.component';
import { ProductdongleComponent } from './productdongle/productdongle.component';
import { BilldongleComponent } from './billdongle/billdongle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { HeaderComponent } from './header/header.component';
import { PhonenumberverificationComponent } from './phonenumberverification/phonenumberverification.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'products',component:ProductsComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'network',component:NetworkComponent},
  {path:'newconnectionpostpaid',component:NewconnectionpostpaidComponent},
  {path:'rechargepostpaid',component:RechargepostpaidComponent},
  {path:'planspostpaid',component:PlanspostpaidComponent},
  {path:'productpostpaid',component:ProductpostpaidComponent},
  {path:'conversionpostpaid',component:ConversionpostpaidComponent},
  {path:'billpostpaid',component:BillpostpaidComponent},
  {path:'newconnectionprepaid',component:NewconnectionprepaidComponent},
  {path:'rechargeprepaid',component:RechargeprepaidComponent},
  {path:'plansprepaid',component:PlansprepaidComponent},
  {path:'productsprepaid',component:ProductsprepaidComponent},
  {path:'conversionprepaid',component:ConversionprepaidComponent},
  {path:'newdongle',component:NewdongleComponent},
  {path:'rechargedongle',component:RechargedongleComponent},
  {path:'plansdongle',component:PlansdongleComponent},
  {path:'productdongle',component:ProductdongleComponent},
  {path:'billdongle',component:BilldongleComponent},
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'prepaid',component:PrepaidComponent},
  {path:'postpaid',component:PostpaidComponent},
  {path:'dongle',component:DongleComponent},
  {path:'Phonenumber',component:PhonenumberverificationComponent},
  {path:"phone-login",component:PhoneLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
