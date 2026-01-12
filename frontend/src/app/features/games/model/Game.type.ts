declare type GameType = {
  id: string;
  img: ImageType,
  title: string;
  description: string;
  minAge: number;
  playTime: {
    min: number;
    max: number;
  };
  players: {
    min: number;
    max: number;
  };
  difficulty: 1|2|3|4|5;
}
