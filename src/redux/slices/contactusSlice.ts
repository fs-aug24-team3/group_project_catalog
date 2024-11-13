/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactUsState {
  isModalOpen: boolean;
  mobileNumber: string;
  isRequestSent: boolean;
  timer: number;
  showTimer: boolean;
}

const initialState: ContactUsState = {
  isModalOpen: false,
  mobileNumber: '',
  isRequestSent: false,
  timer: 1000,
  showTimer: true,
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
      state.isRequestSent = false;
      state.showTimer = !state.isRequestSent;
    },

    closeModal(state) {
      state.isModalOpen = false;
    },

    setMobileNumber(state, action: PayloadAction<string>) {
      state.mobileNumber = action.payload;
    },

    sendRequest(state) {
      state.isRequestSent = true;
      state.timer = 1000;
      state.showTimer = true;
    },

    resetRequest(state) {
      state.isModalOpen = false;
      state.mobileNumber = '';
      state.isRequestSent = false;
      state.timer = 1000;
      state.showTimer = true;
    },

    setTimer(state, action: PayloadAction<number>) {
      state.timer = action.payload;
    },

    toggleShowTimer(state, action: PayloadAction<boolean>) {
      state.showTimer = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setMobileNumber,
  sendRequest,
  resetRequest,
  setTimer,
  toggleShowTimer,
} = contactUsSlice.actions;

export default contactUsSlice.reducer;

export type { ContactUsState };
