import { QueryCache, QueryClient } from "@tanstack/react-query";

import { handleMutationError, handleQueryError } from "@/shared/api/errorHandlers";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: handleMutationError,
    },
  },
  queryCache: new QueryCache({ onError: handleQueryError }),
});