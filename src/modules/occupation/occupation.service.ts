import { Injectable } from '@nestjs/common';
import { CreateOccupationDto } from './dto/create-occupation.dto';
import { UpdateOccupationDto } from './dto/update-occupation.dto';
import { OccupationRepository } from './repositories/occupation-repository';

@Injectable()
export class OccupationService {
  constructor(private occupationRepository: OccupationRepository) {}

  create(createOccupationDto: CreateOccupationDto) {
    return this.occupationRepository.create(createOccupationDto);
  }

  findAll() {
    return this.occupationRepository.findAll();
  }

  findOne(id: string) {
    return this.occupationRepository.findOne(id);
  }

  update(id: string, updateOccupationDto: UpdateOccupationDto) {
    return this.occupationRepository.update(id, updateOccupationDto);
  }

  remove(id: string) {
    return this.occupationRepository.delete(id);
  }
}
