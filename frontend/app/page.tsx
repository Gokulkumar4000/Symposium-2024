"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import FormInput from './components/FormInput';
import EventSelection from './components/EventSelection';
import ProceedButton from './components/ProceedButton';

interface Event {
  time: string;
  name: string;
  type: "Technical" | "Non-Technical"; // Event type
}

const Home: React.FC = () => {
  // Form state
  const [firstName, setFirstName] = useState('');
  const [Clgname, setClgname] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  // Event selection state (one state per slot)
  const [slot1Selected, setSlot1Selected] = useState<string | null>(null);
  const [slot2Selected, setSlot2Selected] = useState<string | null>(null);
  const [slot3Selected, setSlot3Selected] = useState<string | null>(null);

  // Check if the form is filled
  const isFormValid = firstName.trim() !== '' && Clgname.trim() !== '' && email.trim() !== '';

  // Check if at least one event is selected
  const isEventSelected = slot1Selected !== null || slot2Selected !== null || slot3Selected !== null;

  // Button should be enabled if form is valid and at least one event is selected
  const isButtonDisabled = !isFormValid || !isEventSelected;

  // Group the events by type for Slot 1
  const slot1TechnicalEvents: Event[] = [
    { time: '10:00AM - 11:30AM', name: 'Idea Exchange', type: 'Technical' },
  ];

  const slot1NonTechnicalEvents: Event[] = [
    { time: '10:00AM - 11:30AM', name: 'IPL Audition', type: 'Non-Technical' },
  ];

  // Group the events by type for Slot 2
  const slot2TechnicalEvents: Event[] = [
    { time: '12:00PM - 1:00PM', name: 'Code Clash', type: 'Technical' },
    { time: '12:00PM - 1:00PM', name: 'Visionary Art', type: 'Technical' },
  ];

  const slot2NonTechnicalEvents: Event[] = [
    { time: '12:00PM - 1:00PM', name: 'Mobile Photography', type: 'Non-Technical' },
    { time: '12:00PM - 1:00PM', name: 'X-O Game', type: 'Non-Technical' },
  ];
  // Group the events by type for Slot 3
  const slot3TechnicalEvents: Event[] = [
    { time: '2:00PM - 3:10PM', name: 'Web Warriors', type: 'Technical' },
  ];

  const slot3NonTechnicalEvents: Event[] = [
    { time: '2:00PM - 3:10PM', name: 'Solo Dance', type: 'Non-Technical' },
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <Header />

      <FormInput
        label="Name"
        placeholder="Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} // Track input changes
      />
      <FormInput
        label="College Name"
        placeholder="College name"
        value={Clgname}
        onChange={(e) => setClgname(e.target.value)} // Track input changes
      />
      <FormInput
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Track input changes
      />
      <FormInput
        label="Contact"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)} // Track input changes
      />

      {/* Slot 1 */}
      <EventSelection
        slotTitle="Slot 1"
        slotType="Technical Events"
        SlotTime="10:00AM - 11:30AM"
        events={slot1TechnicalEvents}
        selectedEvent={slot1Selected} // Track Slot 1 selection
        onSelectionChange={setSlot1Selected} // Handle Slot 1 selection change
      />
      <EventSelection
        slotType="Non-Technical Events"
        SlotTime="10:00AM - 11:30AM"
        events={slot1NonTechnicalEvents}
        selectedEvent={slot1Selected} // Track Slot 1 selection
        onSelectionChange={setSlot1Selected} // Handle Slot 1 selection change
      />

      {/* Slot 2 */}
      <EventSelection
        slotTitle="Slot 2"
        slotType="Technical Events"
        SlotTime="12:00PM - 1:00PM"
        events={slot2TechnicalEvents}
        selectedEvent={slot2Selected} // Track Slot 2 selection
        onSelectionChange={setSlot2Selected} // Handle Slot 2 selection change
      />
      <EventSelection
        slotType="Non-Technical Events"
        SlotTime="12:00PM - 1:00PM"
        events={slot2NonTechnicalEvents}
        selectedEvent={slot2Selected} // Track Slot 2 selection
        onSelectionChange={setSlot2Selected} // Handle Slot 2 selection change
      />
      {/* Slot 3 */}
      <EventSelection
        slotTitle="Slot 3"
        slotType="Technical Events"
        SlotTime="2:00PM - 3:10PM"
        events={slot3TechnicalEvents}
        selectedEvent={slot3Selected} // Track Slot 2 selection
        onSelectionChange={setSlot3Selected} // Handle Slot 2 selection change
      />
      <EventSelection
        slotType="Non-Technical Events"
        SlotTime="2:00PM - 3:10PM"
        events={slot3NonTechnicalEvents}
        selectedEvent={slot3Selected} // Track Slot 2 selection
        onSelectionChange={setSlot3Selected} // Handle Slot 2 selection change
      />

      <ProceedButton disabled={isButtonDisabled} />
    </div>
  );
};

export default Home;
