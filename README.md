# social-network-mock

[![j-mendez](https://circleci.com/gh/j-mendez/social-network-mock.svg?style=svg)](https://circleci.com/gh/j-mendez/social-network-mock)

Rapidly bootstrap your next project with mock data to replicate a social network. Easily drop it in and replace it as your API grows.

## Getting Started

1. `npm install social-network-mock --save`

## How to use

| Utils                                                                      | Params                      | Info                                                        |
| -------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| [generateSocialNetwork(size, currentUser)](src/social-network-mock.ts#L83) | size: 10, currentUser: null | generate a collection of data for a social network mock     |
| [generateRandomUsers(size, hobbies)](src/social-network-mock.ts#L52)       | size: 10, hobbies: null     | generate a list of random users with hobbie collection sync |
| [generateRandomHobbies()](src/social-network-mock.ts#L33)                  | none                        | generate a list of random hobbies                           |
| [generateRandomHobbie()](src/social-network-mock.ts#L25)                   | none                        | generate a random hobbie                                    |
| [generateRandomString()](src/social-network-mock.ts#L17)                   | none                        | generate a random string                                    |

## Example

```typescript
import {
  generateSocialNetwork,
  HobbieExperience,
  HobbieType,
  UserModel,
} from "social-network-mock";

const me = new UserModel(
  { firstName: "Bob", middleName: "Adam", lastName: "Johns", suffix: ".SR" },
  [
    {
      exp: HobbieExperience.Beginner,
      type: HobbieType.Biking,
    },
  ]
);

const {
  usersCollection,
  hobbiesCollection,
  followersCollection,
} = generateSocialNetwork(1000, me);
```
