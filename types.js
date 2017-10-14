// @flow

export type Event = {
  name: string,
  description: string,
  mapUrl: string;
  what: string,
  when: string,
  where: string,
  location: {
    street1: string,
  },
  hasLocation: boolean,
}
;
