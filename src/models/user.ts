import { HobbieModel } from "./hobbies";

interface Name {
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
}

class UserModel {
  constructor(readonly name: Name, readonly hobbies: HobbieModel[]) {}
  private dateCreated: number = Date.now();
  get fullName(): string {
    return `${Object.keys(this.name).reduce((acc, cur) => {
      const left = this.name[acc] || acc || "";
      const right = this.name[cur] || cur || "";

      return `${left}${left && right ? " " : ""}${right}`;
    })}`;
  }
  get id(): string {
    return `${this.fullName.charCodeAt(0)}_${this.dateCreated}`;
  }
}

export { UserModel };
