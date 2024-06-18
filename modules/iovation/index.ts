import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Iovation.web.ts
// and on native platforms to Iovation.ts
import IovationModule from './src/IovationModule';
import IovationView from './src/IovationView';
import { ChangeEventPayload, IovationViewProps } from './src/Iovation.types';

// Get the native constant value.
export const PI = IovationModule.PI;

export function hello(): string {
  return IovationModule.hello();
}

export async function setValueAsync(value: string) {
  return await IovationModule.setValueAsync(value);
}

const emitter = new EventEmitter(IovationModule ?? NativeModulesProxy.Iovation);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { IovationView, IovationViewProps, ChangeEventPayload };
