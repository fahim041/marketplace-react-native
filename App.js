import { Switch, TextInput } from 'react-native';
import { useState } from 'react';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: 'Categories', value: 0 },
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        placeholder="Category"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
