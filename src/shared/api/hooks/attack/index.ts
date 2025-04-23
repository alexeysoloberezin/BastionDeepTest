import { useQuery } from "@tanstack/vue-query";
import api from "@shared/api/utils/fetcher";
import { computed, watchEffect, type Ref } from 'vue';
import { useFilterDef } from "@shared/api/hooks/useFilterDef";
import { REVERSED_API_ROUTES } from "@shared/api/utils/apiRoutes";

export const useFetchTable = ({ page, size, apiRoute }: { page: Ref<number>, apiRoute: string, size: Ref<number> }) => {
  const { data: filterDef, isLoading: isLoadingFilterDef, isError: isErrorFilterDef } = useFilterDef(page.value, size.value, apiRoute);

  const enabled = computed(() => !isLoadingFilterDef.value && filterDef?.value && filterDef?.value?.length > 0)

  const { data, isLoading: isLoadingData, isError: isErrorData } = useQuery({
    queryKey: [`${apiRoute}-data`, page, size, filterDef?.value],
    queryFn: async () => {
      const res = await api.get(apiRoute, {
        params: {
          page: page.value,
          size: size.value,
          filter: filterDef.value,
        }
      });

      return res.data;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    enabled,
  });

  watchEffect(() => {
    console.log(page.value)
  })

  const isLoading = computed(() => isLoadingFilterDef.value || isLoadingData.value);
  const isError = computed(() => isErrorFilterDef.value || isErrorData.value);
  const arrayData = computed(() => {
    if (!data.value) return [];

    if (!(apiRoute in REVERSED_API_ROUTES)) {
      throw new Error(`API route "${apiRoute}" не найден в REVERSED_API_ROUTES`);
    }

    const key = REVERSED_API_ROUTES[apiRoute] as keyof typeof data.value;

    return data.value[key] || [];
  });

  const totalPages = computed(() => {
    if (!data.value) return 0;
    return data.value.count
  })


  return {
    data: arrayData,
    totalPages,
    isLoading,
    isError,
  };
};
