import { Point } from 'geojson';

export class CreateOngDto {
  id: number;

  title: string;

  description: string;

  working_hours: string;

  street: string;

  number: number;

  state: string;

  city: string;

  neighbourhood: string;

  location: Point;

  responsible: string;
}
