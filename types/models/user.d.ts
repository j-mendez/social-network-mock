import { HobbieModel } from "./hobbies";
interface Name {
    firstName: string;
    middleName?: string;
    lastName: string;
    suffix?: string;
}
declare class UserModel {
    readonly name: Name;
    readonly hobbies: HobbieModel[];
    constructor(name: Name, hobbies: HobbieModel[]);
    private dateCreated;
    get fullName(): string;
    get id(): string;
}
export { UserModel };
