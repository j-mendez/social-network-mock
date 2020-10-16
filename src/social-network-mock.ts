import {
  UserModel,
  HobbieExperience,
  HobbieModel,
  HobbieGroupMap,
  HobbieGroupModel,
  HobbieType,
} from "@app/models";
import { ENUM_SPLIT } from "@app/config";
import { initFollowers, initHobbies } from "@app/core";

/**
 * Returns a random string for fake data
 *
 * @return {string} random string.
 */
const generateRandomString = (): string =>
  Math.random().toString(36).substring(3);

/**
 * Returns a random hobbie by type.
 *
 * @return {number} hobby type.
 */
const generateRandomHobbie = (): number =>
  Math.floor(Math.random() * (Object.keys(HobbieType).length / ENUM_SPLIT));

/**
 * Returns collection of random hobbies.
 *
 * @return {HobbieModel[]} collection of hobbies.
 */
const generateRandomHobbies = (): HobbieModel[] => {
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

/**
 * Returns collection of random users by fixed size.
 *
 * @param {number} size The number of users to generate.
 * @param {HobbieGroupModel} hobbies The hobby collection to sync user hobbies.
 * @return {UserModel[]} collection of users.
 */
const generateRandomUsers = (
  size: number = 2,
  hobbies?: HobbieGroupModel | boolean
): UserModel[] => {
  return new Array(size).fill(null).map((_, index) => {
    const user = new UserModel(
      {
        firstName: generateRandomString(),
        lastName: generateRandomString(),
      },
      generateRandomHobbies()
    );

    // sync hobbies
    if (hobbies) {
      user.hobbies.forEach((hobby) => {
        hobbies[hobby.type][hobby.exp][user.id] = 1;
      });
    }

    return user;
  });
};

/**
 * Returns collections for social network.
 *
 * @param {number} size The number of users to generate.
 * @param {UserModel} currentUser The primary user to match followers.
 * @return {me: UserModel, hobbiesCollection: HobbieGroupModel, usersCollection: UserModel[], followersCollection: UserModel["id"][] } collections for social network.
 */
const generateSocialNetwork = (size: number = 10, currentUser?: UserModel) => {
  const user = !currentUser
    ? new UserModel(
        {
          firstName: generateRandomString(),
          lastName: generateRandomString(),
        },
        generateRandomHobbies()
      )
    : currentUser;
  const hobbiesCollection = user && initHobbies();
  const usersCollection = generateRandomUsers(size, hobbiesCollection);
  const followersCollection =
    user && initFollowers({ hobbiesCollection, usersCollection, user });

  return {
    me: user,
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
  UserModel,
  HobbieExperience,
  HobbieModel,
  HobbieGroupMap,
  HobbieGroupModel,
  HobbieType,
};

export default generateSocialNetwork;
