import { HobbieGroupModel, HobbieExperience, HobbieType } from "@app/models";
import { mutateObjectFromArray } from "@app/utils";

const initHobbies = (): HobbieGroupModel => {
  const hobbieTypes = Object.keys(HobbieType);
  const hobbieExp = Object.keys(HobbieExperience);
  const hobbyGroup = {};
  const expMap = {};

  mutateObjectFromArray(hobbieExp, expMap);
  mutateObjectFromArray(hobbieTypes, hobbyGroup, expMap);

  return hobbyGroup;
};

const initFollowers = ({ hobbiesCollection, usersCollection, user }) => {
  return user.hobbies
    .map((hobby) => {
      const relatedUsers = hobbiesCollection[hobby.type][hobby.exp];

      if (relatedUsers) {
        return Object.keys(relatedUsers);
      }
    })
    .flat();
};

export { initHobbies, initFollowers };
