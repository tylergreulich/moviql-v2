export const getValidationErrors = (error: any) => {
  const { graphQLErrors: errors } = error;
  return errors[0];
};
