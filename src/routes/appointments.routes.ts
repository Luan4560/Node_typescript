import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRespository from '../repositories/AppointmentsRepository';

const appointmentsRounter = Router();

const appointmentsRepository = new AppointmentsRespository();

appointmentsRounter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRounter.post('/', (request, response) => {
  const { provider, date } = request.body;

  // Parse date
  const parsedDate = parseISO(date);

  // Returning a success appointment created.
  return response.json(appointment);
});

export default appointmentsRounter;
