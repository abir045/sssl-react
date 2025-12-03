import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_NEXT_PUBLIC_SITES_API,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        fields: {
          seo: {
            merge(existing, incoming) {
              // Merge incoming SEO data with existing
              return { ...existing, ...incoming };
            },
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
