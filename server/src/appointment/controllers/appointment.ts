// import dotenv from 'dotenv';
// import { request, response } from 'express';


// exports.CreateAppointment = async (req=request, res=response) => {
//     try{
//         const {username,doctorname}
//     }
//     catch(err){

//     }
// }
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import Appointment from '../models/appointmentModel'; // Import the Appointment model
import Doctor from '../../doctor/models/doctorModel'; // Import the Doctor model

export const CreateAppointment = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, doctorId, dateTime, description, treatmentFor, previouslyVisited, anyReport } = req.body;

    // Create a new appointment document
    const newAppointment = new Appointment({
      user: userId,
      doctor: doctorId,
      dateTime,
      description,
      treatmentFor,
      previouslyVisited,
      anyReport,
    });

    // Save the appointment in the database
    const savedAppointment = await newAppointment.save();

    // Find the doctor and add the appointment to their history
    const doctor = await Doctor.findById(doctorId);
    if (doctor) {
      doctor.addToHistory(savedAppointment._id.toString());
    }

    return res.status(201).json({ success: true, appointment: savedAppointment });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Error creating appointment" });
  }
};



exports.DeleteAppointment = async (req: Request, res: Response) => {
    try {
      const { appointmentId, doctorId } = req.params;
  
      // Find and delete the appointment
      const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);
      
      if (!deletedAppointment) {
        return res.status(404).json({ success: false, message: "Appointment not found" });
      }
  
      // Remove the appointment from the doctor's history
      const doctor = await Doctor.findById(doctorId);
      if (doctor) {
        doctor.history = doctor.history
          .split(',')
          .filter(id => id !== appointmentId)
          .join(',');
        await doctor.save();
      }
  
      res.status(200).json({ success: true, message: "Appointment deleted" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Error deleting appointment" });
    }
  };

  


exports.GetAllAppointments = async (req: Request, res: Response) => {
    try {
      const { userId, doctorId } = req.query;
  
      let filter: any = {};
      if (userId) filter.user = userId;
      if (doctorId) filter.doctor = doctorId;
  
      const appointments = await Appointment.find(filter).populate('user').populate('doctor');
      
      res.status(200).json({ success: true, appointments });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Error fetching appointments" });
    }
};
  