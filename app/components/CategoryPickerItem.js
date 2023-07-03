import { StyleSheet, View } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

export default function CategoryPickerItem({
  onPress,
  item: { label, backgroundColor, icon },
}) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={backgroundColor} name={icon} size={80} />
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },

  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
