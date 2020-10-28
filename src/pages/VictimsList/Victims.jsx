import React from 'react';

import { VictimCard } from '../../unit-components';

function Victims() {
  return (
    <div>
      <div
        style={{ paddingRight: '14px', paddingLeft: '14px', marginTop: '14px' }}
      >
        <VictimCard />
      </div>
      <div
        style={{ paddingRight: '14px', paddingLeft: '14px', marginTop: '14px' }}
      >
        <VictimCard />
      </div>
      <div
        style={{ paddingRight: '14px', paddingLeft: '14px', marginTop: '14px' }}
      >
        <VictimCard />
      </div>
    </div>
  );
}

export default Victims;
