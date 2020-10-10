# social-network-mock

social network data mock structures

## Getting Started

1. `npm install`
2. `npm test`

## How to use

| method                                                                     | Default                     | Info                                                        |
| -------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| [generateSocialNetwork(size, currentUser)](src/social-network-mock.ts#L83) | size: 10, currentUser: null | generate a collection of data for a social network mock     |
| [generateRandomUsers(size, hobbies)](src/social-network-mock.ts#L52)       | size: 10, hobbies: null     | generate a list of random users with hobbie collection sync |
| [generateRandomHobbies()](src/social-network-mock.ts#L33)                  | none                        | generate a list of random hobbies                           |
| [generateRandomHobbie()](src/social-network-mock.ts#L25)                   | none                        | generate a random hobbie                                    |
| [generateRandomString()](src/social-network-mock.ts#L17)                   | none                        | generate a random string                                    |

## Trade Offs

Followers collection can be looked up in linear time for mem usage. Speed > memory trade offs.
Collections are `normalized` for reduced memory footprint, in order to `denormalize` use [reverse enum mapping](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings) to get the string value.
