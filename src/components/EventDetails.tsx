import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "../services/eventService";
import NotFound from "../pages/NotFound";
import { type Event } from "../types/eventTypes";
import Loader from "./Loader";
import MainLayout from "../layouts/MainLayout";

export default function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getEventById(id).then(ev => {
                setEvent(ev ?? null);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[40vh]">
                <Loader />
            </div>
        );
    }

    if (!event) {
        return <NotFound />;
    }

    return (
        <MainLayout>

            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">{event.nombre}</h1>
                <img
                    src={event.imagen || "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={event.nombre}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <div className="mb-2">
                    <span className="font-semibold">Fecha:</span> {event.fecha}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Ubicación:</span> {event.ubicacion}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Categoría:</span> {event.categoria}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Tipo:</span> {event.tipo}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Descripción corta:</span> {event.descripcionCorta}
                </div>
                <div className="mt-4">
                    <span className="font-semibold">Descripción larga:</span>
                    <p className="mt-1">{event.descripcionLarga}</p>
                </div>
            </div>
        </MainLayout>
    );
}