import { PrismaService } from 'src/prisma.service';
import { CreateOccupationDto } from '../../dto/create-occupation.dto';
import { UpdateOccupationDto } from '../../dto/update-occupation.dto';
import { Occupation } from '../../entities/occupation.entity';
import { OccupationRepository } from '../occupation-repository';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OccupationPrismaRepository implements OccupationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateOccupationDto): Promise<Occupation> {
    const occupation = new Occupation();

    Object.assign(occupation, { ...data });
    const newOccupation = await this.prismaService.occupation.create({
      data: { ...occupation },
    });

    return plainToInstance(Occupation, newOccupation);
  }
  async findAll(): Promise<Occupation[]> {
    return plainToInstance(
      Occupation,
      await this.prismaService.occupation.findMany(),
    );
  }
  async findOne(id: string): Promise<Occupation> {
    const occupation = await this.prismaService.occupation.findUnique({
      where: { id: id },
    });

    return occupation;
  }

  async update(id: string, data: UpdateOccupationDto): Promise<Occupation> {
    const occupationUser = await this.prismaService.occupation.update({
      where: {
        id,
      },
      data: { ...data },
    });
    return plainToInstance(Occupation, occupationUser);
  }
  async delete(id: string): Promise<void> {
    await this.prismaService.occupation.delete({ where: { id } });
  }
}
