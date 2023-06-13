import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { DalleComponent } from './dalle/dalle.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import{CdalleVarComponent}from './cdalle-var/cdalle-var.component';
import{WhisperComponent}from './whisper/whisper.component';


const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'demo', component: DemoComponent  },
{ path: 'demo/chat-with-support-bot', component: CustomerSupportComponent  },
// { path: 'customer-support', component: CustomerSupportComponent  },

{path : 'dalle', component: DalleComponent},
{path : 'cdalle-var', component: CdalleVarComponent},
{path : 'whisper', component: WhisperComponent}

]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  HeaderComponent,
  HomeComponent  ,
  DemoComponent,
  HeaderComponent,
  CustomerSupportComponent,
]
