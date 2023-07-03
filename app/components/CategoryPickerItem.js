import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';
import AppText from './Text';

export default function CategoryPickerItem({
  onPress,
  item: { label, backgroundColor, icon },
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={backgroundColor} name={icon} size={80} />
        <AppText style={styles.label}>{label}</AppText>
      </TouchableOpacity>
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
