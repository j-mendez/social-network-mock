import { UserModel, HobbieExperience, HobbieModel, HobbieGroupMap, HobbieGroupModel, HobbieType } from "@app/models";
declare const generateRandomString: () => string;
declare const generateRandomHobbie: () => number;
declare const generateRandomHobbies: () => HobbieModel[];
declare const generateRandomUsers: (size?: number, hobbies?: boolean | HobbieGroupModel | undefined) => UserModel[];
declare const generateSocialNetwork: (size?: number, currentUser?: UserModel | undefined) => {
    me: UserModel;
    hobbiesCollection: HobbieGroupModel;
    usersCollection: UserModel[];
    followersCollection: any;
};
export { generateRandomString, generateRandomHobbie, generateRandomHobbies, generateRandomUsers, generateSocialNetwork, UserModel, HobbieExperience, HobbieModel, HobbieGroupMap, HobbieGroupModel, HobbieType, };
export default generateSocialNetwork;
