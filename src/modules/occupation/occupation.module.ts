import { Module } from '@nestjs/common';
import { OccupationService } from './occupation.service';
import { OccupationController } from './occupation.controller';
import { PrismaService } from 'src/prisma.service';
import { OccupationRepository } from './repositories/occupation-repository';
import { OccupationPrismaRepository } from './repositories/prisma/prisma-repository';

@Module({
  controllers: [OccupationController],
  providers: [
    OccupationService,
    PrismaService,
    {
      provide: OccupationRepository,
      useClass: OccupationPrismaRepository,
    },
  ],
  exports: [OccupationService],
})
export class OccupationModule {}
