export const queries = {
  getJob: async (_, { id }, { dynamoDB }) => {
    return await dynamoDB.getItem(id);
  },

  listJobs: async (_, __, { dynamoDB }) => {
    return await dynamoDB.scanAll();
  }
};