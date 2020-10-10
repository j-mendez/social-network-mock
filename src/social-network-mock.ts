import {
  UserModel,
  HobbieExperience,
  HobbieGroupMap,
  HobbieType,
  HobbieGroupModel,
} from "@app/models";
import { initHobbies } from "@app/core";
import { ENUM_SPLIT } from "@app/config";

// GENERATE RANDOM DATA
const generateRandomString = () => Math.random().toString(36).substring(3);

const generateRandomHobbie = () =>
  Math.floor(Math.random() * (Object.keys(HobbieType).length / ENUM_SPLIT));

const generateRandomHobbies = () => {
  return new Array(generateRandomHobbie()).fill(null).map(() => {
    return {
      description: generateRandomString(),
      exp: Math.floor(
        Math.random() * (Object.keys(HobbieExperience).length / ENUM_SPLIT)
      ),
      type: generateRandomHobbie(),
    };
  });
};

const generateRandomUsers = (
  size: number = 2,
  hobbies?: HobbieGroupModel | null
): UserModel[] => {
  return new Array(size).fill(null).map((_, index) => {
    const user = new UserModel(
      {
        firstName: generateRandomString(),
        lastName: generateRandomString(),
      },
      generateRandomHobbies()
    );
    if (hobbies) {
      user.hobbies.forEach((hobby) => {
        hobbies[hobby.type][hobby.exp][user.id] = 1;
      });
    }
    return user;
  });
};

const generateSocialNetwork = (
  size: number = 10,
  hobbies: boolean = true,
  user: UserModel = false
): {
  hobbiesCollection: HobbieGroupModel | null;
  usersCollection: UserModel[];
  followersCollection: UserModel[];
} => {
  const hobbiesCollection = hobbies ? initHobbies() : null;
  const usersCollection = generateRandomUsers(size, hobbiesCollection);
  const followersCollection = users
    ? initFollowers(hobbiesCollection, usersCollection)
    : null;

  return {
    hobbiesCollection,
    usersCollection,
    followersCollection,
  };
};

export {
  generateRandomString,
  generateRandomHobbie,
  generateRandomHobbies,
  generateRandomUsers,
  generateSocialNetwork,
};
