import { useCounterStore } from '@/store/counter'

const useAnanas = () => {
  const counter = useCounterStore()

  return {
    counter,
  }
}
export default useAnanas
