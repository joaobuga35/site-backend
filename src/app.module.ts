import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendMailModule } from './modules/mails/send-mail.module';
import { SponsorModule } from './modules/sponsor/sponsor.module';
import { MailModule } from './shared/providers/mailer/mailer.module';
import { OccupationModule } from './modules/occupation/occupation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailModule,
    SponsorModule,
    SendMailModule,
    OccupationModule,
  ],
  providers: [],
})
export class AppModule {}
