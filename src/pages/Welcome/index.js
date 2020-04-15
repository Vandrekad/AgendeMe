import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import {
  Container, CardContainer, LogoContainer, CardLogo,
  CardTitle, CardTitleText, CardDescription, CardDescriptionText,
  BtnRegister, BtnRegisterText, BtnLogin, BtnLoginText
} from './styles';

import background from '../../assets/background.png';
import logo from '../../assets/logo-G.png';


export default function Welcome() {
  const navigation = useNavigation();


  useEffect(() => {

  }, []);


  function goToLogin() {
    navigation.navigate("Login");
  }

  function goToRegister() {
    navigation.navigate("Register");
  }

  return (
    <Container>
      <LogoContainer>
        <Image source={background} style={{ width: '100%' }} />
      </LogoContainer>
      <CardContainer >
        <CardLogo>
          <Image source={logo} style={{ width: 138, height: 138 }} />
        </CardLogo>
        <CardTitle>
          <CardTitleText>Book your shopping</CardTitleText>
        </CardTitle>
        <CardDescription>
          <CardDescriptionText>When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.</CardDescriptionText>
        </CardDescription>
        <BtnRegister activeOpacity={0.8} onPress={goToRegister} >
          <BtnRegisterText>REGISTER</BtnRegisterText>
        </BtnRegister>

        <BtnLogin activeOpacity={0.8} onPress={goToLogin} >
          <BtnLoginText>LOGIN</BtnLoginText>
        </BtnLogin>
      </CardContainer>
    </Container>
  )
}