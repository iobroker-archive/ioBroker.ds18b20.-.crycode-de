/*
 * Types used by the adapter and the remote client.
 */

/**
 * ioBroker object for a single sensor.
 */
export interface SensorObject extends ioBroker.StateObject {
  native: {
    address: string;
    factor: number;
    offset: number;
    decimals: number | null;
    interval: number;
    nullOnError: boolean;
    remoteSystemId: string | null;
  };
}

/**
 * Result of sensor search. (singe sensor)
 */
export interface SearchedSensor {
  address: string;
  remoteSystemId: string;
}

/**
 * Remote data request/response for client information.
 */
export interface RemoteDataClientInfo {
  cmd: 'clientInfo';
  systemId?: string;
}

/**
 * Remote data request/response for sensor read.
 */
export interface RemoteDataRead {
  cmd: 'read';
  address: string;
  ts: number;
  raw?: string;
}

/**
 * Remote data request/response for sensor search.
 */
export interface RemoteDataSearch {
  cmd: 'search';
  ts: number;
  addresses?: string[];
  systemId?: string;
}

/**
 * Remote data request/response for all types.
 */
export type RemoteData = RemoteDataClientInfo | RemoteDataRead | RemoteDataSearch;
