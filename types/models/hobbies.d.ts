declare enum HobbieType {
    None = 0,
    Biking = 1,
    Reading = 2,
    WorkingOut = 3,
    Eating = 4,
    Hiking = 5,
    Swimming = 6
}
declare enum HobbieExperience {
    Beginner = 0,
    Intermediate = 1,
    Expert = 2
}
declare type HobbieGroupMap = {
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
export { HobbieGroupMap, HobbieGroupModel, HobbieExperience, HobbieType, HobbieModel, };
