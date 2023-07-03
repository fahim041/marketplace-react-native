import { Text } from 'react-native';
import defaultStyles from '../config/styles';

export default function AppText({ children, style, ...otherprops }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}
