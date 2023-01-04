import { reducerStateType } from "../../types/reducerTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ auth }: any, thunkAPI) => {
    console.log("login redirect");
    return await auth.loginWithPopup().catch((err: any) => {
      thunkAPI.rejectWithValue(err.message);
    });
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async ({ auth }: any, thunkAPI) => {
    console.log("logout");
    return await auth.logout().catch((err: any) => {
      thunkAPI.rejectWithValue(err.message);
    });
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ auth }: any, thunkAPI) => {
    console.log("getting user");
    return await auth.user;
  }
);

export const getToken = createAsyncThunk(
  "user/getToken",
  async ({ auth }: any, thunkAPI) => {
    console.log("getting token");
    return await auth
      .getAccessTokenSilently()
      .catch((err: any) => thunkAPI.rejectWithValue(err.message));
  }
);

const initialState: reducerStateType = {
  authenticated: false,
  token: null,
  data: null,
  error: null,
  loading: false,
};

export const userSlicer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state: reducerStateType, action) => {
      toast.success("Logined!");
    });
    builder.addCase(
      loginUser.rejected,
      (state: reducerStateType, action: any) => {
        toast.error(action.payload);
      }
    );
    builder.addCase(logoutUser.fulfilled, (state: reducerStateType, action) => {
      state.authenticated = false;
      toast("You are logged out of account!");
    });
    builder.addCase(
      logoutUser.rejected,
      (state: reducerStateType, action: any) => {
        toast.error(action.payload);
      }
    );
    builder.addCase(getUser.pending, (state: reducerStateType, action) => {
      state.loading = true;
    });
    builder.addCase(
      getUser.fulfilled,
      (state: reducerStateType, action: { type: string; payload: Object }) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(getUser.rejected, (state: reducerStateType, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getToken.pending, (state: reducerStateType, action) => {
      state.loading = true;
    });
    builder.addCase(getToken.fulfilled, (state: reducerStateType, action) => {
      state.token = action.payload;
      state.authenticated = action.payload ? true : null;
      state.loading = false;
    });
    builder.addCase(
      getToken.rejected,
      (state: reducerStateType, action: any) => {
        state.error = action.payload;
        state.loading = false;
        console.error(action.payload);
      }
    );
  },
});

export default userSlicer.reducer;
