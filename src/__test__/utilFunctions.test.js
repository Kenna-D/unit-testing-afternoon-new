import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText should not alter texts less than 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText shouldl cut off extra characters after 100 and add three priods', () => {
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slict(-3).toBe('...'));
});

test('word count should correctly count the number of words in a sentence', () => {
  expect(wordCount(posts)).toBe(233);
});

test('should attach displayName to every post', () => {
  const newPost = attachUserName(user, posts)
  expect(newPost[0].toHaveProperty('displayName'));
});

test('should remove all posts without a matching', () => {
  const newPost = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPost).not.toContainEquil(deletedPost);
});

test('', () => {
  expect();
});