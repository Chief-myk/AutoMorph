import React from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="dna-wrapper">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};

export default Loader;
