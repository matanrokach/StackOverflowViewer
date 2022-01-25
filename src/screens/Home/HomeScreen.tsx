import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Platform, UIManager, LayoutAnimation} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Button, Text, TextInput} from '../../elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUserWithQuestions,
  selectIsLoadingDetails,
  selectUserDetails,
  selectDetailsError,
  selectQuestions,
} from '../../features/user/userSlice';
import {Routes} from '../../constants';
import {Loader} from '../../elements/Loader/Loader';
import {ErrorText, QuestionCard, UserDetails} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {ScrollView} from 'react-native-gesture-handler';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type RootStackParamList = {
  [screen: string]: {uri: string};
};

const HomeScreen: React.FC = ({}) => {
  const {colors} = useTheme();

  const dispatch = useDispatch();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [userId, setUserId] = useState('');
  const isLoading = useSelector(selectIsLoadingDetails);
  const details = useSelector(selectUserDetails);
  const questions = useSelector(selectQuestions);
  const error = useSelector(selectDetailsError);

  const onPressSearch = () => {
    dispatch(getUserWithQuestions(parseInt(userId)));
  };

	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	}, [details])

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.background},
      ]}>
      <Text>{'Enter user id:'}</Text>
      <TextInput
        {...{
          value: userId,
          onChangeText: setUserId,
          placeholder: 'e.g: 123456',
        }}
      />
      <Button onPress={onPressSearch}>
        <Text>{'SEARCH'}</Text>
      </Button>

      {(error && (
        <ErrorText {...{error}} />
      )) ||
        null}

      {!error && <Loader {...{isLoading}}>
        <>
          {(details && (
            <UserDetails
              {...{
                displayName: details.display_name,
                profileImage: details.profile_image,
                acceptRate: details.accept_rate,
                reputation: details.reputation,
              }}
            />
          )) ||
            null}

          {questions.map((question: IUserQuestion, index: number) => {
            return (
              <QuestionCard
                {...{
                  key: index.toString(),
                  onPress: () => {
                    navigation.navigate(Routes.Question, {
                      uri: question.link,
                    });
                  },
                  title: `Title: ${question.title}`,
                  description: `Is answered: ${question.is_answered}`,
                }}
              />
            );
          })}
        </>
      </Loader> || null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
