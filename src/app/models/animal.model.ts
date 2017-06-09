export class Animal {
  dateVar = new Date;
  public date = (this.dateVar.getMonth()+1).toString()+'/'+this.dateVar.getDate().toString()+'/'+this.dateVar.getFullYear().toString();
  constructor(
    public animalName: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string
  ){}
}
