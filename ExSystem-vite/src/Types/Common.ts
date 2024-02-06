export type Location = { x: number; y: number };
export type Time = { hour: number; minute: number; second: number };

type d = 1|2|3|4|5|6|7|8|9|0;
type YYYY = `19${d}${d}` | `20${d}${d}`;
type oneToNine = 1|2|3|4|5|6|7|8|9;
type MM = `0${oneToNine}` | `1${0|1|2}`;
type DD = `${0}${oneToNine}` | `${1|2}${d}` | `3${0|1}`;
export type DateFormat = `${YYYY}-${MM}-${DD}` 

export type ExID = string;
