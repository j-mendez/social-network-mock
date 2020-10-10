import { UserModel, HobbieType, HobbieExperience } from "@app/models";
import {
  generateRandomUsers,
  generateSocialNetwork,
} from "@app/social-network-mock";

describe("social network", () => {
  // SHARE USER ACROSS TEST
  let me;
  test("can create new user", () => {
    const firstName = process.env.FIRST_NAME || "Jeff";
    const middleName = process.env.MIDDLE_NAME || "Roderick";
    const lastName = process.env.LAST_NAME || "Mendez";
    const suffix = process.env.SUFFIX || ".SR";

    me = new UserModel({ firstName, middleName, lastName, suffix }, [
      {
        exp: HobbieExperience.Beginner,
        type: HobbieType.Biking,
      },
    ]);

    expect(me.fullName).toBe(
      `${firstName} ${middleName} ${lastName} ${suffix}`
    );
  });

  test("can create 1000 randomly generated users", () => {
    const users = generateRandomUsers(1000);

    expect(users.length).toBe(1000);
  });

  test("can create users and group primary user followed by hobbies", () => {
    const {
      usersCollection,
      hobbiesCollection,
      followersCollection,
    } = generateSocialNetwork(1000, me);

    expect(followersCollection.length).toBeGreaterThan(1);
    expect(usersCollection).toBeTruthy();
    expect(hobbiesCollection).toBeTruthy();
  });
});
