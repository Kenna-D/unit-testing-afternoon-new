import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { posts } from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it('renders out PostWidget', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...post}/>
    </MemoryRouter>
  );
  expect(container.textContent).toContain(post.text);
});

it('shorten the displayed text by default', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...longPost}/>
    </MemoryRouter>
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});

it('extended prop will display all the text of the post', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost}/>
    </MemoryRouter>
  );
  expect(container.textContent).toContain(longPost.text);
});