import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { IovationViewProps } from './Iovation.types';

const NativeView: React.ComponentType<IovationViewProps> =
  requireNativeViewManager('Iovation');

export default function IovationView(props: IovationViewProps) {
  return <NativeView {...props} />;
}
