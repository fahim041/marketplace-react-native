import { View } from 'react-native';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <MessagesScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <View
    //   style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100,
    //   }}>
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require('./app/assets/jacket.jpg')}></Card>
    // </View>
    // <WelcomeScreen />
  );
}
