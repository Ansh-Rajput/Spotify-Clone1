import {create} from "zustand";

const UseUploadModal = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));

export default UseUploadModal;
