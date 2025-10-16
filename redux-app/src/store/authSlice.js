import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/signup`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          email: data["email"],
          password: data["password"],
        },
      };
      const res = await axios(config);
      return res["data"];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          email: data.email,
          password: data.password,
        },
      };
      const res = await axios(config);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/logout`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${getState().auth.token}`,
          // getState().auth.token: 전역 상태로 관리되는 사용자 인증 토큰
        },
      };
      const response = await axios(config);
      return response["data"];
    } catch (error) {
      return rejectWithValue(error["response"]["data"]);
    }
  }
);

const initialState = {
  token: null,
  error: null,
  isSignup: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetIsSignup: (state) => {
      state.isSignup = false;
    },
  },

  // 위에서 정의한 비동기 처리 함수을 처리할 리듀서
  extraReducers: (builder) => {
    // 각 비동기 처리에 대한 대기 / 성공 / 실패 처리로직 작성
    builder
      .addCase(signup.fulfilled, (state) => {
        // 비동기 처리가 성공일때 실행되는 콜백함수
        state.isSignup = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        // login 비동기 처리가 성공일 때 실행되는 콜백함수
        state.token = action.payload["access_token"];
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { resetIsSignup } = authSlice.actions;
export default authSlice.reducer;
export { signup, login, logout };
