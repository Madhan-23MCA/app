// ======================app============================================
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// improing all pages
import Homepg from './home';
import Placepg from './Places';
import Train from './transport/train';
import SignInScreen from './signup';
import LoginScreen from './login';
import Logo from './logo';
import Profile from './profile/profile';
// hotel pg importing 
import Bookorder from './hotels/bookorder';
import Hotel2 from './hotels/hotel-2';
import Hotel3 from './hotels/hotel3';
import Hotel4 from './hotels/hotel4';
import Hotel5 from './hotels/hotel5';
import Hotel6 from './hotels/hotel6';
import Hotel7 from './hotels/hotel7';
import Hotel8 from './hotels/hotel8';
import Hotel9 from './hotels/hotel9';
import Hotel10 from './hotels/hotel10';
// impor for payment pages
import Payment from './payment/Payment';
import Payment2 from './payment/Payment2';
import Payment3 from './payment/Payment3';
import Payment4 from './payment/Payment4';
import Payment5 from './payment/Payment5';
import Payment6 from './payment/Payment6';
import Payment7 from './payment/Payment7';
import Payment8 from './payment/Payment8';
import Payment9 from './payment/Payment9';
import Payment10 from './payment/Payment10';

// impor place 1-10 ....
import Place1 from './places/place';
import Place2 from './places/place2';
import Place3 from './places/place3';
import Place4 from './places/place4';
import Place5 from './places/place5';
import Place6 from './places/place6';
import Place7 from './places/place7';
import Place8 from './places/place8';
import Place9 from './places/place9';
import Place10 from './places/place10';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={Logo}
          options={{
            headerShown: true
          }}
        />
        {/* rout for normal pages */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Signup" component={SignInScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Train" component={Train} options={{ headerShown: true}} />
        <Stack.Screen name="Home" component={Homepg} options={{ headerShown: true }} />
        <Stack.Screen name="Place" component={Placepg} options={{ headerShown: true }} />
        <Stack.Screen name="profiles" component={Profile} options={{ headerShown: true }} />
        
        {/* rout for hotels */}
        <Stack.Screen name="Booking" component={Bookorder} options={{ headerShown: true }} />
        <Stack.Screen name="hotel2" component={Hotel2} options={{ headerShown: true }} />
        <Stack.Screen name="hotel3" component={Hotel3} options={{ headerShown: false }} />
        <Stack.Screen name="hotel4" component={Hotel4} options={{ headerShown: false }} />
        <Stack.Screen name="hotel5" component={Hotel5} options={{ headerShown: false }} />
        <Stack.Screen name="hotel6" component={Hotel6} options={{ headerShown: false }} />
        <Stack.Screen name="hotel7" component={Hotel7} options={{ headerShown: false }} />
        <Stack.Screen name="hotel8" component={Hotel8} options={{ headerShown: false }} />
        <Stack.Screen name="hotel9" component={Hotel9} options={{ headerShown: false }} />
        <Stack.Screen name="hotel10" component={Hotel10} options={{ headerShown: false }} />
        {/* rout for payment pages */}
        <Stack.Screen name="payment" component={Payment} options={{ headerShown: false }} />
        <Stack.Screen name="payment2" component={Payment2} options={{ headerShown: false }} />
        <Stack.Screen name="payment3" component={Payment3} options={{ headerShown: false }} />
        <Stack.Screen name="payment4" component={Payment4} options={{ headerShown: false }} />
        <Stack.Screen name="payment5" component={Payment5} options={{ headerShown: false }} />
        <Stack.Screen name="payment6" component={Payment6} options={{ headerShown: false }} />
        <Stack.Screen name="payment7" component={Payment7} options={{ headerShown: false }} />
        <Stack.Screen name="payment8" component={Payment8} options={{ headerShown: false }} />
        <Stack.Screen name="payment9" component={Payment9} options={{ headerShown: false }} />
        <Stack.Screen name="payment10" component={Payment10} options={{ headerShown: false }} />


        {/* rout for payment pages */}

        <Stack.Screen name="place1" component={Place1} options={{ headerShown: true}} />
        <Stack.Screen name="place2" component={Place2} options={{ headerShown: false }} />
        <Stack.Screen name="place3" component={Place3} options={{ headerShown: false }} />
        <Stack.Screen name="place4" component={Place4} options={{ headerShown: false }} />
        <Stack.Screen name="place5" component={Place5} options={{ headerShown: false }} />
        <Stack.Screen name="place6" component={Place6} options={{ headerShown: false }} />
        <Stack.Screen name="place7" component={Place7} options={{ headerShown: false }} />
        <Stack.Screen name="place8" component={Place8} options={{ headerShown: false }} />
        <Stack.Screen name="place9" component={Place9} options={{ headerShown: false }} />
        <Stack.Screen name="place10" component={Place10} options={{ headerShown: false }} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;



//===================================================modal exam rn===========================================================




// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// // improing all pages
// import Homepg from './home';
// import Placepg from './Places';
// import Train from './transport/train';
// import SignInScreen from './signup';
// import LoginScreen from './login';
// import Logo from './logo';
// import Profile from './profile/profile';
// import Upadte from './update';
// import Addissue from './addissue';


// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Logo"
//           component={Logo}
//           options={{
//             headerShown: false
//           }}
//         />
//         {/* rout for normal pages */}
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
//         <Stack.Screen name="Signup" component={SignInScreen} options={{ headerShown: true }} />
//         <Stack.Screen name="Train" component={Train} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={Homepg} options={{ headerShown: false }} />
//         <Stack.Screen name="Place" component={Placepg} options={{ headerShown: true }} />
//         <Stack.Screen name="profiles" component={Profile} options={{ headerShown: false }} />
//         <Stack.Screen name="Update" component={Upadte} options={{ headerShown: false }} />
//         <Stack.Screen name="add" component={Addissue} options={{ headerShown: false }} />
        
//         {/* rout for hotels */}


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MyStack;

