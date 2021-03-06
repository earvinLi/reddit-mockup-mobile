// Internal Dependencies
import { FETCH_POSTS } from '../../App/ActionTypes';

export const fetchPosts = () => async (dispatch) => {
  const fetchedPostsJSON = await fetch('http://10.22.18.37:8081/posts');
  const fetchedPosts = await fetchedPostsJSON.json();

  dispatch({ type: FETCH_POSTS, fetchedPosts });
};
