// appointment.ts

export interface Appointment {
  name: string;
  iconurl: string;
  time: string;
}

export interface AppointmentDay {
  day: string;
  appointments: Appointment[];
}

export const appointmentData: AppointmentDay[] = [
  {
    day: "Thursday",
    appointments: [
      {
        name: "Health checkup complete",
        iconurl: "/syringe.svg",
        time: "11:00 AM",
      },
      {
        name: "Ophthalmologist",
        iconurl: "/eye.svg", 
        time: "14:00 PM",
      },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      {
        name: "Cardiologist",
        iconurl: "/heart.svg", 
        time: "12:00 AM",
      },
      {
        name: "Neurologist",
        iconurl: "/doctor.svg",
        time: "16:00 PM",
      },
    ],
  },
];
