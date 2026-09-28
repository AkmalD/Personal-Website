"use client";

import React, { createContext, useContext, useState } from "react";
import { ContactModal } from "./ContactModal";

interface ContactModalContextType {
  openContactModal: () => void;
  closeContactModal: () => void;
  isContactModalOpen: boolean;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openContactModal: () => {},
  closeContactModal: () => {},
  isContactModalOpen: false,
});

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider
      value={{
        openContactModal,
        closeContactModal,
        isContactModalOpen: isOpen,
      }}
    >
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
