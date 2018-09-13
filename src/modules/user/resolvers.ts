export const resolvers = {
  Query: {
    getAllUsers: async (root, {}, { User }) => await User.find(),
    getCurrentUser: async (root, {}, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }

      return await User.findOne({
        email: currentUser.email
      }).populate({ path: 'favorites', model: 'Movie' });
    }
  }
};
