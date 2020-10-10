enum HobbieType {
  None,
  Biking,
  Reading,
  WorkingOut,
  Eating,
  Hiking,
  Swimming,
}

enum HobbieExperience {
  Beginner,
  Intermediate,
  Expert,
}

type HobbieGroupMap = {
  [type in HobbieType]: {
    [exp in HobbieExperience]: 1 | 0 | boolean;
  };
};

class HobbieModel {
  type: HobbieType = 0;
  description: string = "";
  exp: HobbieExperience = 0;
}

class HobbieGroupModel {
  [HobbieGroupSection: number]: HobbieGroupMap;
}

export {
  HobbieGroupMap,
  HobbieGroupModel,
  HobbieExperience,
  HobbieType,
  HobbieModel,
};
