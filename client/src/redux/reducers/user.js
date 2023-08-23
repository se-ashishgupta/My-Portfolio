import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(
  { loading: true },
  {
    GetUserRequest: (state) => {
      state.loading = true;
    },
    GetUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    GetUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    SendMessageRequest: (state) => {
      state.loading = true;
    },
    SendMessageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    SendMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const loginReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LogoutUserRequest: (state) => {
    state.loading = true;
  },
  LogoutUserSuccess: (state, action) => {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
    state.message = action.payload;
  },
  LogoutUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = true;
  },

  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
export const adminReducer = createReducer(initialState, {
  UpdateAccountRequest: (state) => {
    state.loading = true;
  },
  UpdateAccountSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UpdateAccountFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  AddQualificationRequest: (state) => {
    state.loading = true;
  },
  AddQualificationSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddQualificationFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UpdateQualificationRequest: (state) => {
    state.loading = true;
  },
  UpdateQualificationSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UpdateQualificationFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DeleteQualificationRequest: (state) => {
    state.loading = true;
  },
  DeleteQualificationSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DeleteQualificationFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  AddSkillRequest: (state) => {
    state.loading = true;
  },
  AddSkillSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddSkillFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UpdateSkillRequest: (state) => {
    state.loading = true;
  },
  UpdateSkillSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UpdateSkillFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DeleteSkillRequest: (state) => {
    state.loading = true;
  },
  DeleteSkillSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DeleteSkillFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  AddProjectRequest: (state) => {
    state.loading = true;
  },
  AddProjectSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddProjectFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UpdateProjectRequest: (state) => {
    state.loading = true;
  },
  UpdateProjectSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  UpdateProjectFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  DeleteProjectRequest: (state) => {
    state.loading = true;
  },
  DeleteProjectSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  DeleteProjectFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
