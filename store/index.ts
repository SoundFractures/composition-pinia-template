import { useGeneralStore } from '~/store/general'

const useStore = () => {
  const general = useGeneralStore()
  return {
    general,
  }
}
// export type Pini = ReturnType<typeof useStore>
export type Store = typeof useStore
export default useStore
