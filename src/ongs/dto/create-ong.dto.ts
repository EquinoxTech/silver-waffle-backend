import { IsNotEmpty, IsBoolean, IsString } from 'class-validator';
export class CreateOngDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  type: string;
  @IsNotEmpty()
  working_hours: {
    start_time: Date;
    end_time: Date;
    days: string;
  };
  @IsNotEmpty()
  @IsString()
  responsible: string;
  @IsNotEmpty()
  @IsBoolean()
  accepting_donations: boolean;

  @IsNotEmpty()
  address: {
    street: string;
    neighbourhood: string;
    state: string;
    city: string;
    number: number;
    cep: number;
  };
}
