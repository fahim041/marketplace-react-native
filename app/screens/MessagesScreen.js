import { FlatList, View } from 'react-native';
import { useState } from 'react';
import Screen from '../components/Screen';
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from '../components/Lists';

const intialMessages = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae rem ducimus repellat hic molestias, eius unde suscipit, distinctio eligendi aliquid eos maiores consequatur! Omnis exercitationem nostrum sunt vero commodi reiciendis magnam voluptatum, nobis rem est, quam laudantium repellat explicabo necessitatibus. Magnam possimus quo expedita laudantium animi voluptatum eaque maxime nisi enim hic excepturi tempore fuga natus minus, quisquam unde asperiores impedit reprehenderit modi iure accusantium architecto? Et iste facere autem quis ex accusamus eius non soluta! Doloremque laudantium fuga rem illum quisquam harum, perferendis magni necessitatibus, obcaecati sequi explicabo suscipit vero aspernatur aut nihil. Aliquid expedita ex recusandae cupiditate, repellat iste nesciunt vitae unde repellendus nisi commodi architecto illum. Quidem perspiciatis suscipit eos, commodi laudantium quod similique eligendi assumenda ex. Eos cupiditate id odit praesentium labore quidem harum sequi officia fuga, dolore omnis deleniti quisquam sit eius, et illum. Assumenda suscipit, reprehenderit qui exercitationem accusantium cum dignissimos molestias accusamus, ipsa fugiat atque quam modi quis non debitis laboriosam culpa inventore tempora commodi iure aliquam adipisci. Doloremque vitae quo tempora accusamus suscipit, quia omnis in corporis officiis consequuntur ab! Eligendi aperiam nemo aliquid ab cumque ipsam neque excepturi eos quam similique nesciunt, magnam cum eum nobis, impedit aut possimus a?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae rem ducimus repellat hic molestias, eius unde suscipit, distinctio eligendi aliquid eos maiores consequatur! Omnis exercitationem nostrum sunt vero commodi reiciendis magnam voluptatum, nobis rem est, quam laudantium repellat explicabo necessitatibus. Magnam possimus quo expedita laudantium animi voluptatum eaque maxime nisi enim hic excepturi tempore fuga natus minus, quisquam unde asperiores impedit reprehenderit modi iure accusantium architecto? Et iste facere autem quis ex accusamus eius non soluta! Doloremque laudantium fuga rem illum quisquam harum, perferendis magni necessitatibus, obcaecati sequi explicabo suscipit vero aspernatur aut nihil. Aliquid expedita ex recusandae cupiditate, repellat iste nesciunt vitae unde repellendus nisi commodi architecto illum. Quidem perspiciatis suscipit eos, commodi laudantium quod similique eligendi assumenda ex. Eos cupiditate id odit praesentium labore quidem harum sequi officia fuga, dolore omnis deleniti quisquam sit eius, et illum. Assumenda suscipit, reprehenderit qui exercitationem accusantium cum dignissimos molestias accusamus, ipsa fugiat atque quam modi quis non debitis laboriosam culpa inventore tempora commodi iure aliquam adipisci. Doloremque vitae quo tempora accusamus suscipit, quia omnis in corporis officiis consequuntur ab! Eligendi aperiam nemo aliquid ab cumque ipsam neque excepturi eos quam similique nesciunt, magnam cum eum nobis, impedit aut possimus a?',
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
