import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import "./Calendario.css";

interface CalendarioProps {
  ocupados: string[];
}

const CalendarioReact: React.FC<CalendarioProps> = ({ ocupados }) => {
  const events = ocupados.map((fecha) => ({
    title: "Ocupado",
    date: fecha,
  }));

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={esLocale}
        buttonText={{
          today: "Hoy",
        }}
        height={"auto"}
      />
    </div>
  );
};

export default CalendarioReact;
