import React from 'react';

const SearchQueryContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(undefined);

export const SearchQueryProvider: React.FC = ({ children }) => {
  const state = React.useState('');

  return <SearchQueryContext.Provider value={state}>{children}</SearchQueryContext.Provider>;
};

export function useSearchQuery() {
  const context = React.useContext(SearchQueryContext);

  if (context === undefined) {
    throw new Error('useSearchQuery must be used within a SearchQueryProvider');
  }

  return context;
}
