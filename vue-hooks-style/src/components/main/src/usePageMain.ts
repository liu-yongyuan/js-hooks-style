import { ref } from 'vue'

export const usePageMain = () => {
  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
  const tableData = ref(Array.from({ length: 2 }).fill(item))

  return {
    item,
    tableData
  }
}
