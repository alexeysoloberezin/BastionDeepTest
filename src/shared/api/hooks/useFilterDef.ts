import { useQuery } from "@tanstack/vue-query";
import api from "@shared/api/utils/fetcher";
import type { AxiosResponse } from "axios";

export interface FilterDef {
  name: string
  valuetype: string
}

export const useFilterDef = (page: number, size: number, apiRoute: string) => {
  return useQuery({
    queryKey: [`${apiRoute}-filterDef`, page, size],
    queryFn: async () => {
      const res: AxiosResponse<FilterDef[]> = await api.get(`${apiRoute}/_filterdef`);
      return res.data;
    },
  });
};