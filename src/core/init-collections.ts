import { HobbieGroupModel, HobbieExperience, HobbieType } from "@app/models";
import { ENUM_SPLIT } from "@app/config";

const initHobbies = () => {
  const hobbieTypes = Object.keys(HobbieType);
  const hobbieExp = Object.keys(HobbieExperience);
  const hobbyGroup = new HobbieGroupModel();
  const expMap = {};

  hobbieExp.splice(0, hobbieExp.length / ENUM_SPLIT).forEach((exp) => {
    expMap[exp] = {};
  });

  hobbieTypes.splice(0, hobbieTypes.length / ENUM_SPLIT).forEach((type) => {
    hobbyGroup[type] = expMap;
  });

  return hobbyGroup;
};

export { initHobbies };
