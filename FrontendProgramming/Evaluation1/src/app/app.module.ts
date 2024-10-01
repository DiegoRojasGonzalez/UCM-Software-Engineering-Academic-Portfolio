import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StatsComponent } from './components/stats/stats.component';
import { EventsComponent } from './components/events/events.component';
import { BannerComponent } from './components/banner/banner.component';
import { MunicipalStaffComponent } from './components/municipal-staff/municipal-staff.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AnnouncementComponent,
    FooterComponent,
    GalleryComponent,
    StatsComponent,
    EventsComponent,
    BannerComponent,
    MunicipalStaffComponent,
    NewsletterComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
