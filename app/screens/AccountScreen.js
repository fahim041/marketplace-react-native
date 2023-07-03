import { View, FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/Lists';
import colors from '../config/colors';

const menuItem = [
  {
    title: 'My Listings',
    icon: { name: 'format-list-bulleted', backgroundColor: colors.primary },
  },
  {
    title: 'My Messages',
    icon: { name: 'email', backgroundColor: colors.secondary },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="User Name"
          subTitle="user@gmail.com"
          image={require('../assets/user.jpg')}
          style={styles.listitem}
        />
      </View>

      <View>
        <FlatList
          data={menuItem}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              style={styles.listitem}
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },

  screen: {
    backgroundColor: colors.light,
  },

  listitem: {
    backgroundColor: colors.white,
  },
});
