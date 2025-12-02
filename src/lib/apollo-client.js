import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_NEXT_PUBLIC_SITES_API,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      // Configure merge strategy for PostTypeSEO
      PostTypeSEO: {
        keyFields: ["title", "canonical"],
      },
      // Configure merge strategy for all types with seo field
      Page: {
        fields: {
          seo: {
            merge: true,
          },
        },
      },
      Post: {
        fields: {
          seo: {
            merge: true,
          },
        },
      },
      // Add other post types if you have them
      Service: {
        fields: {
          seo: {
            merge: true,
          },
        },
      },
    },
  }),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
      timeout: 90000,
    },
  },
});

export default apolloClient;

// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// const apolloClient = new ApolloClient({
//   link: new HttpLink({
//     uri: import.meta.env.VITE_NEXT_PUBLIC_SITES_API,
//   }),
//   cache: new InMemoryCache(),
//   defaultOptions: {
//     query: {
//       fetchPolicy: "no-cache",
//       errorPolicy: "all",
//       timeout: 90000,
//     },
//   },
// });

// export default apolloClient;
