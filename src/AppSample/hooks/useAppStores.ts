import { useStores } from '@/hooks/useStores'
import { IAppStores } from '../stores/types'

export const useAppStores = useStores<IAppStores>
