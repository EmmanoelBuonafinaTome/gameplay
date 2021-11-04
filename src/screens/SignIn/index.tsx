import React from 'react';
import { 
  View,
  Text,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AuthStackParamList } from '../../routes/auth.routes';
import { styles } from './styles';

type SignInNavigationType = NativeStackNavigationProp<AuthStackParamList, "Home">

export function SignIn() {
  const navigation = useNavigation<SignInNavigationType>();

  return (
    <View style={styles.container}>
      <Image 
        source={IllustrationImg}
        resizeMode='stretch'
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon 
          title='Entrar com o discord'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};