// import ApolloClientLib from "./ApolloClientLib";
import ApolloClientLib from "./apollo-client";

const getGqlData = async (query, variables = {}, retries = 3) => {
  try {
    const { data } = await ApolloClientLib.query({
      query,
      variables,
      fetchPolicy: "network-only", // works the same in React
    });

    return data;
  } catch (error) {
    console.error("GraphQL Error:", error);

    // Retry logic (React safe)
    if (retries > 0) {
      return getGqlData(query, variables, retries - 1);
    }

    // After max retries, throw error so UI can handle it
    throw error;
  }
};

export default getGqlData;
