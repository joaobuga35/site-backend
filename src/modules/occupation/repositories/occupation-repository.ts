import { CreateOccupationDto } from '../dto/create-occupation.dto';
import { UpdateOccupationDto } from '../dto/update-occupation.dto';
import { Occupation } from '../entities/occupation.entity';

export abstract class OccupationRepository {
  abstract create(data: CreateOccupationDto): Promise<Occupation> | Occupation;
  abstract findAll(): Promise<Occupation[]> | Occupation[];
  abstract findOne(id: string): Promise<Occupation> | Occupation;
  abstract findByEmail(email: string): Promise<Occupation> | Occupation;
  abstract update(
    id: string,
    data: UpdateOccupationDto,
  ): Promise<Occupation> | Occupation;
  abstract delete(id: string): Promise<void> | void;
}
