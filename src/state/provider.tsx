import React from 'react';
import RootModel, { IRoot } from '../models/root.mst';
import localForage from "localforage";
import persist from '../mst-persist';
import { initialState } from './constants';


export const root = RootModel.create(initialState)


persist('root7', root, {
  storage: localForage,  // or AsyncStorage in react-native.
  // default: localStorage
  jsonify: false,  // if you use AsyncStorage, this shoud be true
  // default: true
  // whitelist: ['name']  // only these keys will be persisted
}).then(() => console.log('Information has been hydrated'))

const StateContext = React.createContext<IRoot>(root);

export const getState = (): IRoot => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = React.useContext(StateContext);
  if (!state)
    throw new Error(
      'No MST!',
    );
  return state;
};

export const StateProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  return (
    <StateContext.Provider value={root}>{children}</StateContext.Provider>
  );
};
