export interface Game {
  id: number;
  name: string;
  nameEn: string;
  difficulty: number;
  creator: string;
  accuracy: number;
  image: string;
}

export interface Template {
  id: number;
  image: string;
  color: string;
}
