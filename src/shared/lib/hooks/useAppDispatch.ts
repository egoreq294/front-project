import { AppDispatch } from '@app/providers/StorePovider';

import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
