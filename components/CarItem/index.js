import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"অর্ডার করুন "}
          onPress={() => {
            console.warn("ধন্যবাদ, আপনার অর্ডারটি গ্রহণ করা হয়েছে।");
          }}
        />

        <StyledButton
          type="secondary"
          content={"অন্য মডেলগুলো দেখুন"}
          onPress={() => {
            console.warn("স্ক্রল করুন। সকল পণ্য সারিবদ্ধভাবে দেয়া আছে।");
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;
