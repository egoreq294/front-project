import { useDispatch } from 'react-redux';

import { AppDispatch } from '@app/providers/StorePovider';

export const useAppDispatch: () => AppDispatch = useDispatch;
