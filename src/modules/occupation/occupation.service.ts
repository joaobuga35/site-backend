import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOccupationDto } from './dto/create-occupation.dto';
import { UpdateOccupationDto } from './dto/update-occupation.dto';
import { OccupationRepository } from './repositories/occupation-repository';
import { notFound } from 'src/shared/helpers/http-helper';
import { CustomError } from 'src/shared/errors/custom-error';

@Injectable()
export class OccupationService {
  constructor(private occupationRepository: OccupationRepository) {}

  create(createOccupationDto: CreateOccupationDto) {
    return this.occupationRepository.create(createOccupationDto);
  }

  findAll() {
    return this.occupationRepository.findAll();
  }

  async findOne(id: string) {
    const occupation = await this.occupationRepository.findOne(id);
    if (!occupation) {
      return { oi: 'oi' };
    }
    return occupation;
  }

  update(id: string, updateOccupationDto: UpdateOccupationDto) {
    return this.occupationRepository.update(id, updateOccupationDto);
  }

  remove(id: string) {
    return this.occupationRepository.delete(id);
  }
}
