import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


export const useGet = (qKey, getterFunc, params) => {
    const context = useQuery({
      queryKey: qKey,
      queryFn: () => getterFunc(params),
    });
    return context;
  };


export const usePost = (posterFunc, qKey , params=null) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data) => posterFunc(data, params),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: qKey });
      },
      onError: (error, query, context) => {
        console.log(error);
        console.log(query);
        console.log(context);
      },
    });
  };





  export const useDelete = (deleterFunc, qKey) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (param) => deleterFunc(param),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: qKey });
      },
    });
  };



  export const useUpdate = (qKey, updaterFunc) => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (data) => updaterFunc(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: qKey });
      },
    });
  };
  