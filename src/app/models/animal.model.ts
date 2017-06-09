export class Animal {
  public date = new Date;
  constructor(
    public name:string,
    public age:number,
    public diet:string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string
  ){}
}
