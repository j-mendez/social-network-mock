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

interface HobbieModel {
  type: HobbieType;
  description?: string;
  exp: HobbieExperience;
}

interface HobbieGroupModel {
  [section: number]: HobbieGroupMap;
}

export {
  HobbieGroupMap,
  HobbieGroupModel,
  HobbieExperience,
  HobbieType,
  HobbieModel,
};
