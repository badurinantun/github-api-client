import React from 'react';

interface ResultsProps {
  totalCount: number;
}

export const Results: React.FC<ResultsProps> = ({ totalCount, children }) => {
  return (
    <div>
      totalCount: {totalCount}
      <div>{children}</div>
    </div>
  );
};
