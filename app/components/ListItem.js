import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import AppText from './AppText';
import colors from '../config/colors';

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subtitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: colors.black,
    borderWidth: 1,
  },

  title: {
    fontWeight: '500',
  },

  subtitle: {
    color: colors.medium,
  },

  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});
