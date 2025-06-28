import { useEvents } from "../context/EventContext";
import CardEvent from "./CardEvent";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

export default function EventList() {
    const { filteredEvents, loading } = useEvents();

    if (loading) {
        return <Loader />;
    }

    if (filteredEvents.length === 0) {
        return (
            <div className="w-full flex flex-col items-center justify-center py-12 sm:py-20">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="Sin resultados"
                    className="w-24 h-24 sm:w-32 sm:h-32 mb-4 opacity-70"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 text-center">
                    No se encontraron eventos
                </h2>
                <p className="text-sm sm:text-base text-gray-500 text-center max-w-xs">
                    Intenta ajustar los filtros o la búsqueda para ver más resultados.
                </p>
            </div>
        );
    }
    return (
        <motion.div
            layout
            className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4 md:px-8 items-stretch"
        >
            <AnimatePresence mode="popLayout">
                {filteredEvents.map((event, idx) => (
                    <motion.div
                        key={event.id}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="h-full flex"
                    >
                        <CardEvent event={event} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}