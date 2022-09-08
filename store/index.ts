import { useCounterStore } from '@/store/counter'

const useStore = () => {
  const counter = useCounterStore()
  return {
    counter,
  }
}
// export type Pini = ReturnType<typeof useStore>
export type Store = typeof useStore
export default useStore
