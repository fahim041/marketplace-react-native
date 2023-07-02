import { FlatList, View } from 'react-native';
import { useState } from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const intialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/user.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/user.jpg'),
  },
];

export default function MessageFunction(props) {
  const [messages, setMessages] = useState(intialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log('Message pressed!', item)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messages,
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/user.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}
