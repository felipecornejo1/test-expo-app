import * as React from 'react';

import { IovationViewProps } from './Iovation.types';

export default function IovationView(props: IovationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
