import { UserModel, HobbieType, HobbieExperience } from "@app/models";
import {
  generateRandomUsers,
  generateSocialNetwork,
} from "@app/social-network-mock";

describe("social network", () => {
  let user;
  test("can create new user", () => {
    const firstName = process.env.FIRST_NAME || "Jeff";
    const middleName = process.env.MIDDLE_NAME || "Roderick";
    const lastName = process.env.LAST_NAME || "Mendez";
    const suffix = process.env.SUFFIX || ".SR";

    user = new UserModel({ firstName, middleName, lastName, suffix }, [
      {
        description: "basic entry level",
        exp: HobbieExperience.Beginner,
        type: HobbieType.Biking,
      },
    ]);

    expect(user.fullName).toBe(
      `${firstName} ${middleName} ${lastName} ${suffix}`
    );
  });

  test("can create 1000 randomly generated users", () => {
    const users = generateRandomUsers(1000);

    expect(users.length).toBe(1000);
  });

  test("can create users and group followed by hobbies", () => {
    const { usersCollection, hobbiesCollection } = generateSocialNetwork(1000);
    // TODO: MAP CURRENT USER HOBBY_TYPE -> HOBBY_COLLECTION

    expect(usersCollection.length).toBe(1000);
  });
});
