// src/services/eventService.ts
import eventsData from '../data/events-mock.json';
import { type Event } from '../types/eventTypes';

export const getEvents = async (): Promise<Event[]> => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData as unknown as Event[]);
    }, 500);
  });
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData.find(event => String(event.id) === id) as Event | undefined);
    }, 300);
  });
};