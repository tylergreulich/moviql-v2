export const getValidationErrors = (error: any) => {
  const {
    graphQLErrors: [
      {
        extensions: { exception: errors }
      }
    ]
  } = error;

  return errors;
};
