import { server } from "../store";
import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetUserRequest",
    });
    const { data } = await axios.get(`${server}/user/me`, {
      withCredentials: true,
    });
    dispatch({
      type: "GetUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GetUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const loginAdmin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      `${server}/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/profile`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    const { data } = await axios.get(`${server}/user/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "LogoutUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateAccount =
  (
    email,
    fname,
    lname,
    gender,
    experiance,
    dob,
    about,
    phone,
    address,
    country,
    state,
    city,
    zipcode,
    avatar
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UpdateAccountRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updatedetails`,
        {
          email,
          fname,
          lname,
          gender,
          experiance,
          dob,
          about,
          phone,
          address,
          country,
          state,
          city,
          zipcode,
          avatar,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "UpdateAccountSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UpdateAccountFailure",
        payload: error.response.data.message,
      });
    }
  };

// Qualification

export const addQualification =
  (
    institution_name,
    course,
    state,
    city,
    country,
    start_date,
    end_date,
    result_type,
    result_scale,
    result
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "AddQualificationRequest",
      });

      const { data } = await axios.post(
        `${server}/user/addqualification`,
        {
          institution_name,
          course,
          state,
          city,
          country,
          start_date,
          end_date,
          result_type,
          result_scale,
          result,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "AddQualificationSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "AddQualificationFailure",
        payload: error.response.data.message,
      });
    }
  };

export const deleteQualification = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteQualificationSuccess",
    });

    const { data } = await axios.delete(
      `${server}/user/deletequalification/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "DeleteQualificationSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteQualificationFailure",
      payload: error.response.data.message,
    });
  }
};
export const updateQualification =
  (
    institution_name,
    course,
    state,
    city,
    country,
    start_date,
    end_date,
    result_type,
    result_scale,
    result,
    id
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UpdateQualificationRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updatequalification/${id}`,
        {
          institution_name,
          course,
          state,
          city,
          country,
          start_date,
          end_date,
          result_type,
          result_scale,
          result,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "UpdateQualificationSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UpdateQualificationFailure",
        payload: error.response.data.message,
      });
    }
  };

// Skill

export const addSkill =
  (icon, name, type, about, rating) => async (dispatch) => {
    try {
      dispatch({
        type: "AddSkillRequest",
      });

      const { data } = await axios.post(
        `${server}/user/addskill`,
        {
          icon,
          name,
          type,
          about,
          rating,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "AddSkillSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "AddSkillFailure",
        payload: error.response.data.message,
      });
    }
  };

export const updateSkill =
  (icon, name, type, about, rating, id) => async (dispatch) => {
    try {
      dispatch({
        type: "UpdateSkillRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updateskill/${id}`,
        {
          icon,
          name,
          type,
          about,
          rating,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "UpdateSkillSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UpdateSkillFailure",
        payload: error.response.data.message,
      });
    }
  };

export const deleteSkill = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteSkillRequest",
    });

    const { data } = await axios.delete(`${server}/user/deleteskill/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DeleteSkillSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteSkillFailure",
      payload: error.response.data.message,
    });
  }
};

// Project

export const addProject =
  (
    title,
    description,
    tech_stack,
    start_date,
    end_date,
    repository_url,
    live_url,
    image
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "AddProjectRequest",
      });

      const { data } = await axios.post(
        `${server}/user/addproject`,
        {
          title,
          description,
          tech_stack,
          start_date,
          end_date,
          repository_url,
          live_url,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "AddProjectSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "AddProjectFailure",
        payload: error.response.data.message,
      });
    }
  };
export const updateProject =
  (
    title,
    description,
    tech_stack,
    start_date,
    end_date,
    repository_url,
    live_url,
    image,
    id
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UpdateProjectRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updateproject/${id}`,
        {
          title,
          description,
          tech_stack,
          start_date,
          end_date,
          repository_url,
          live_url,
          image,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "UpdateProjectSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UpdateProjectFailure",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteProjectRequest",
    });

    const { data } = await axios.delete(`${server}/user/deleteproject/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DeleteProjectSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteProjectFailure",
      payload: error.response.data.message,
    });
  }
};

// Send Message

export const sendMessage =
  (name, email, subject, message, toMessage) => async (dispatch) => {
    try {
      dispatch({
        type: "SendMessageRequest",
      });

      const { data } = await axios.post(
        `${server}/user/sendmessage`,
        {
          name,
          email,
          subject,
          message,
          toMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "SendMessageSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "SendMessageFailure",
        payload: error.response.data.message,
      });
    }
  };
