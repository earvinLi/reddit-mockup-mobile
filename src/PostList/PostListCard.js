// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Card } from 'react-native-elements';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import { postListCardStyles } from '../App/Styles';

// Local Variables
const styles = StyleSheet.create(postListCardStyles);

// Component Definition
const PostListCard = (props) => {
  const {
    imageStyle,
    subTitleStyle,
    titleStyle,
  } = styles;

  const {
    subTitle,
    title,
  } = props;

  return (
    <Card>
      <Text style={titleStyle}>{title}</Text>
      <Text style={subTitleStyle}>{subTitle}</Text>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1514911834724-fbe785fc8a6a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=320&h=240&fit=crop&ixid=eyJhcHBfaWQiOjF9" }}
        style={imageStyle}
      />
      <MaterialCommunityIcons name="arrow-up-bold" />
      <MaterialCommunityIcons name="arrow-down-bold" />
    </Card>
  );
};

export default PostListCard;
