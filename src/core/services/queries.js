import { useQuery } from "@tanstack/react-query";
import api from "../config/api";
// --------------------------------------------------------------

const useGetAllTours= (page) => {
    const queryFn = (data) => api.get("/tour", data);
    // queryFn bayad besurate ye arrow function bashe ke natijash return mishe
    const queryKey = ["all-tours", page]

    return useQuery({ queryFn, queryKey });
  };

  export {useGetAllTours}
