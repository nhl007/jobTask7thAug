import { createContext, useContext, useReducer } from 'react';
import { DISPLAY_ALERT, CLEAR_ALERT, SET_IS_LOADING } from '../actions';
import reducer from './reducer';

type FeatureContextType = {
  state: initialFeatureContextStateType;
  displayAlert: (alertText: string, Success: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const initialState: initialFeatureContextStateType = {
  showAlert: false,
  alertText: '',
  alertSuccess: false,
  isLoading: false,
};

const initialContextValue: FeatureContextType = {
  state: initialState,
  displayAlert: () => {},
  setIsLoading: () => {},
};

const FeatureContext = createContext<FeatureContextType>(initialContextValue);

const FeatureProvider = ({ children }: onlyChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const displayAlert = (alertText: string, Success = true) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: {
        type: Success,
        text: alertText,
      },
    });
    clearAlert();
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({ type: SET_IS_LOADING, payload: { isLoading: isLoading } });
  };

  return (
    <FeatureContext.Provider
      value={{
        state,
        setIsLoading,
        displayAlert,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeatureContext = () => {
  return useContext(FeatureContext);
};

export default FeatureProvider;