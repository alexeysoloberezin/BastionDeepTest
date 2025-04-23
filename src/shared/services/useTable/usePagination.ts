import { computed, ref, type Ref } from 'vue';

export function usePagination<T>(data: Ref<T[]>, perPageOptions = [5, 10, 20]) {
    const currentPage = ref(1);
    const perPage = ref(perPageOptions[0]);

    const totalPages = computed(() => Math.ceil(data.value.length / perPage.value));

    const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * perPage.value;
        return data.value.slice(start, start + perPage.value);
    });

    const setPage = (page: number) => {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
        }
    };

    const setPerPage = (count: number) => {
        if (perPageOptions.includes(count)) {
            perPage.value = count;
            currentPage.value = 1;
        }
    };

    return {
        currentPage,
        perPage,
        totalPages,
        paginatedData,
        setPage,
        setPerPage,
        perPageOptions
    };
}
