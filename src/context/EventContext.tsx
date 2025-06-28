// src/contexts/EventContext.tsx
import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { type Event } from '../types/eventTypes';
import { getEvents } from '../services/eventService'; // Tu servicio de datos

interface EventContextType {
    events: Event[];
    loading: boolean;
    error: string | null;
    search: string;
    setSearch: (value: string) => void;
    filteredEvents: Event[];
    selectedCategories: string[];
    setSelectedCategories: (cats: string[]) => void;
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const fetchEvents = async () => {
        try {
            const data = await getEvents();
            setEvents(data);
        } catch (err) {
            setError("Failed to fetch events.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const filteredEvents = events.filter(event => {
        // Filtro por nombre
        const matchesName = event.nombre.toLowerCase().includes(search.toLowerCase());

        // Filtro por categoría
        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(event.categoria);

        // Filtro por fecha (solo compara día, mes y año)
        const matchesDate =
            !selectedDate ||
            (event.fecha &&
                (() => {
                    const eventDate = new Date(event.fecha);
                    return (
                        eventDate.getFullYear() === selectedDate.getFullYear() &&
                        eventDate.getMonth() === selectedDate.getMonth() &&
                        eventDate.getDate() === selectedDate.getDate()
                    );
                })()
            );

        return matchesName && matchesCategory && matchesDate;
    });

    return (
        <EventContext.Provider value={{
            events,
            loading,
            error,
            search,
            setSearch,
            filteredEvents,
            selectedCategories,
            setSelectedCategories,
            selectedDate,
            setSelectedDate
        }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEvents = () => {
    const context = useContext(EventContext);
    if (context === undefined) {
        throw new Error('useEvents must be used within an EventProvider');
    }
    return context;
};