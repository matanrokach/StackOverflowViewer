import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from '../../elements';

interface Props {
  profileImage?: string;
  displayName?: string;
  reputation?: number;
  acceptRate?: number;
}

export const UserDetails = ({
  profileImage,
  displayName,
  reputation,
  acceptRate,
}: Props) => {
  return (
    <View style={styles.container}>
      {(profileImage && (
        <Image source={{uri: profileImage}} style={styles.image} />
      )) ||
        null}
      <View style={styles.detailsContainer}>
        <Text style={styles.displayNameText}>{displayName}</Text>
        <Text style={styles.reputationText}>{`Reputation: ${
          reputation || '---'
        }`}</Text>
        <Text style={styles.acceptRateText}>{`Accept rate: ${
          acceptRate || '---'
        }`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  detailsContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  displayNameText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
  reputationText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
  },
  acceptRateText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
  },
});
