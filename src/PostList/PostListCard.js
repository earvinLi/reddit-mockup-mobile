// External Dependencies
import React from 'react';
import { Card } from 'react-native-elements';
import {
  Text,
  View,
} from 'react-native';

// Component Definition
const PostListCard = (props) => {
  const {
    subTitle,
    title,
  } = props;

  return (
    <Card>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </Card>
  );
};

export default PostListCard;
