import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './Views/user-details/user-details.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { NotFoundComponent } from './Views/not-found/not-found.component';
import { CoreModule } from '../Core/core.module';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [UserDetailsComponent, DashboardComponent, NotFoundComponent],
  imports: [CommonModule, CoreModule, SharedModule],
})
export class FeaturedModule {}
