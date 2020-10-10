import { HobbieGroupModel } from "@app/models";
declare const initHobbies: () => HobbieGroupModel;
declare const initFollowers: ({ hobbiesCollection, usersCollection, user }: {
    hobbiesCollection: any;
    usersCollection: any;
    user: any;
}) => any;
export { initHobbies, initFollowers };
