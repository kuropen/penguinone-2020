export default (doc) => {
  if (doc.type === 'social_policy' || doc.type === 'social_accounts') {
    return '/social';
  }
  if (doc.type === 'blog') {
    return `/blog/${doc.uid}`;
  }
  return '/';
};
