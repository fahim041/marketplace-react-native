import { Switch, TextInput } from 'react-native';
import { useState } from 'react';
import Screen from './app/components/Screen';

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(val) => setIsNew(val)} />
    </Screen>
  );
}
