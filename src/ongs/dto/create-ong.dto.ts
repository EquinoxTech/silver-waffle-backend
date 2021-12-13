export class CreateOngDto {
  name: string;

  description: string;

  type: string;

  working_hours: {
    start_time: Date;
    end_time: Date;
    days: string;
  };

  responsible: string;

  accepting_donations: boolean;

  address: {
    street: string;
    neighbourhood: string;
    state: string;
    city: string;
    number: number;
    cep: number;
  };
}
