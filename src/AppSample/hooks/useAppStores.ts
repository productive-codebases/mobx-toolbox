import { useStores } from '@/hooks/useStores'
import { AppStores } from '../stores/types'

export const useAppStores = useStores<AppStores>
