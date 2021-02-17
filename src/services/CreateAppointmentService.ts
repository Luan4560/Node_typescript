import Appointment from '../models/Appointment';

interface Request {
  provider: string;
  date: Date;
}

// Stoped on 10:00 minutes

class CreateAppointmentService {
  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(parsedDate);

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      parsedDate,
    );

    // Returning error if has two appointments in the same hour
    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
