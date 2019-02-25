# rn-demo

rn-demo is a mobile-app, powered by React-Native, for training purposes

# Features!
This project uses faker.js library to get mock data and show in a list.
It uses AsyncStorage to store user auth token to protected private routes.
For each item the user can upvote of downvote.
The data is managed locally and does not saved in any database.

***currently the app supported by iOS platform.***
    
  **Implementation details**
  - Used expo-cli to create the project
  - Used faked.js for mocking users tweets data.
  - Used Redux and react-redux for state management
  - Used reselect for performance (memoization)


 **Run locally:**
 1) clone the project
 2) you need xCODE installed to view the app in emulator, or scan the QR Code with you iPhone's camera. (you need expo installed).
 3) run following commands:
```sh
$ cd rn-demo
$ npm install
$ num run ios
```

# Future ideas

> Use styled-components
write test with jest (unit-tests, snapshots and component-tests)



License
----

MIT

