import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';

import { Category } from '../Category'
import { styles } from './styles';
import { categories } from '../../utils/categories';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({ 
  categorySelected, 
  setCategory 
}: Props) {
  return (
    <ScrollView 
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  );
};