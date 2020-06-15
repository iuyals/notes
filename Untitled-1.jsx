// react native 

//creat app
//First, if you're building an app that's going to be added to an existing native iOS or Android application, Create React Native App won't work. Second, if you need to build your own bridge between React Native and some native API that Create React Native App doesn't expose (which is pretty rare), Create React Native App won't work.
npm install -g create-react-native-app
yarn global add create-react-native-app
npm start

// shake your app to display menu for debug inspect

//Text View    
//icon 
import {View,Text} from 'react-native'
import {Ionicons} from  "@expo/vector-icons"

<Ionicons name='ios-pizza', color='red',size={100} />