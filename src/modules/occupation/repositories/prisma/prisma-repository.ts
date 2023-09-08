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
    console.log(occupation);
    const newOccupation = await this.prismaService.occupation.create({
      data: { ...occupation },
    });
    console.log(newOccupation);

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
      where: { id },
    });
    return plainToInstance(Occupation, occupation);
  }

  async update(id: string, data: UpdateOccupationDto): Promise<Occupation> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
