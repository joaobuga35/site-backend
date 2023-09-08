export class Occupation {
  readonly id: string;
  name: string;
  office: string;
  image: string;
  linkedin?: string;
  discord?: string;
  readonly created_at: string;

  constructor() {
    this.created_at = String(new Date());
  }
}
