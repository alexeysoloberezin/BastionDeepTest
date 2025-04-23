import { computed, ref, watch, type Ref } from "vue"
import { usePagination } from "./usePagination"
import { useFetchTable } from "@shared/api/hooks/attack"
import TABLE_COLUMNS from "@app/configs/tables/columns"

interface useTableProps {
    apiRoute: string
}

export const useTable = ({ apiRoute }: useTableProps) => {
    const page = ref(1)
    const perPage = ref(4)
    const { data, isError, isLoading, totalPages } = useFetchTable({ page: page, size: perPage, apiRoute })
    const tableData = computed(() => (Array.isArray(data.value) ? data.value : []));

    const columns = computed(() => {
        return TABLE_COLUMNS?.[apiRoute] || []
    })

    return {
        columns,
        totalPages,
        isError,
        isLoading,
        data: tableData,
        perPage,
        page,
    }
}