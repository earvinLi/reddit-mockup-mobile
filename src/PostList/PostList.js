// External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

// Internal Dependencies
import PostListCard from './PostListCard';
import { fetchPosts } from './action/PostListAction';

// Component Definition
const PostList = (props) => {
  const {
    fetchedPosts,
    onFetchPosts,
  } = props;

  useEffect(() => {
    onFetchPosts();
    // TODO: Use one single state to handle update monitoring
  }, [ onFetchPosts ]);

  const renderPostCards = () => fetchedPosts.map((post, index) => {
    const {
      id,
      owner,
      timestamp,
      title,
    } = post;

    const timeText = new Date(timestamp * 1000).toLocaleDateString('en-US', {
      dateStyle: 'long',
      timeStyle: 'medium',
    });
    const timeOwnerText = `submitted on ${timeText} by ${owner || 'Anonymous'}`;

    return (
      <PostListCard
        id={id}
        key={`${id}-${title}`}
        subTitle={timeOwnerText}
        title={title}
      />
    );
  });

  return (
    <>
      {renderPostCards()}
    </>
  );
};

const mapStateToProps = (state) => ({
  fetchedPosts: state.PostList.fetchedPosts,
});

export default connect(mapStateToProps, {
  onFetchPosts: fetchPosts,
})(PostList);
