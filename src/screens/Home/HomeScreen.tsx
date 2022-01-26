import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
  FlatList,
} from 'react-native';
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
import {ErrorText, QuestionCard, Title, UserDetails} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {ScrollView} from 'react-native-gesture-handler';
import {Details, Results, Search} from './Sections';

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
  }, [details]);

  const onPressQuestion = (question: IUserQuestion) => {
    navigation.navigate(Routes.Question, {
      uri: question.link,
    });
  };

  const renderItem = ({item, index}: {item: IUserQuestion, index: number}) => (
    <QuestionCard
      {...{
        key: index.toString(),
        onPressQuestion: () => onPressQuestion(item),
        question: item,
      }}
    />
  );

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.background},
      ]}>
      <Search
        {...{
          searchTerm: userId,
          onSearchTermChange: setUserId,
          onSubmit: onPressSearch,
          error,
        }}
      />

      {(!error && (
        <Loader {...{isLoading}}>
          <>
            <Details
              {...{
                details,
              }}
            />

            <Results<IUserQuestion>
              {...{
                data: questions,
                renderItem,
                keyExtractor: item => item.question_id.toString(),
              }}
            />
          </>
        </Loader>
      )) ||
        null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default HomeScreen;
