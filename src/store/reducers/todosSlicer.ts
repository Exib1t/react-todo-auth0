import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todosApi } from "../../api/TodosApi";
import { TaskData } from "../../components/Task";
import { toast } from "react-toastify";
import { TaskType } from "../../components/TaskControls";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async ({ auth }: any, thunkAPI) => {
    const { sub } = await auth.getIdTokenClaims();

    return await todosApi
      .getDataByUserId(sub.match("\\|(.*)")[1])
      .catch((err) => thunkAPI.rejectWithValue(err.message));
  }
);

export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  ({ id }: any, thunkAPI) => {
    todosApi
      .deleteData(id)
      .catch((err) => thunkAPI.rejectWithValue(err.message));
    return id;
  }
);

export const postTask = createAsyncThunk(
  "todos/postTask",
  async ({ data, auth }: any, thunkAPI) => {
    if (!data.text.trim()) {
      return thunkAPI.rejectWithValue("You need to fill the input!");
    }
    const { sub } = await auth.getIdTokenClaims();
    data.userId = sub.match("\\|(.*)")[1];
    await todosApi
      .postData(data)
      .then((res) => res.json())
      .then((task: any) => (data = task))
      .catch((err) => thunkAPI.rejectWithValue(err.message));
    return data;
  }
);

export const toggleTask = createAsyncThunk(
  "todos/toggleTask",
  async ({ data }: any, thunkAPI) => {
    const newTask = { ...data, completed: !data.completed };
    todosApi
      .putData(newTask)
      .catch((err) => thunkAPI.rejectWithValue(err.message));
    return newTask;
  }
);

export const setEditableTask = createAsyncThunk(
  "todos/setEditableTask",
  ({ data }: any, thunkAPI) => {
    return data;
  }
);

export const saveTask = createAsyncThunk(
  "todos/saveTask",
  ({ data }: any, thunkAPI) => {
    if (!data.text.trim()) {
      return thunkAPI.rejectWithValue("You need to fill the input!");
    }
    todosApi
      .putData(data)
      .catch((err) => thunkAPI.rejectWithValue(err.message));
    return data;
  }
);

export const cancelEdit = createAsyncThunk(
  "todos/cancelEdit",
  (_, thunkAPI) => {
    return true;
  }
);

const initialState: TodoInitialState = {
  data: [],
  loading: false,
  error: null,
  editable: {
    state: false,
    data: null,
  },
};

interface TodoInitialState {
  data: any;
  loading: boolean;
  error: string | string[] | null;
  editable: {
    state: boolean;
    data: TaskType | null;
  };
}

export const todosSlicer = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getTodos.rejected, (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteTask.fulfilled,
      (state, action: { type: string; payload: number }) => {
        state.data = state.data.filter(
          (item: TaskData) => item.id !== action.payload
        );
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(deleteTask.rejected, (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
    });
    builder.addCase(postTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postTask.fulfilled,
      (state, action: { type: string; payload: TaskData }) => {
        state.data.push(action.payload);
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(postTask.rejected, (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
    });
    builder.addCase(toggleTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      toggleTask.fulfilled,
      (state, action: { type: string; payload: TaskData }) => {
        state.data = state.data.map((task: TaskType) =>
          task.id === action.payload.id ? action.payload : task
        );
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(toggleTask.rejected, (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
    });
    builder.addCase(setEditableTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      setEditableTask.fulfilled,
      (state, action: { type: string; payload: TaskData }) => {
        state.editable.state = true;
        state.editable.data = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(setEditableTask.rejected, (state, action: any) => {
      state.editable.state = false;
      state.editable.data = null;
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
    });
    builder.addCase(saveTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      saveTask.fulfilled,
      (state, action: { type: string; payload: TaskData }) => {
        state.data = state.data.map((task: TaskType) =>
          task.id === action.payload.id ? action.payload : task
        );
        state.editable.state = false;
        state.editable.data = null;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(saveTask.rejected, (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
      toast.error(action.payload);
    });
    builder.addCase(cancelEdit.fulfilled, (state) => {
      state.editable.state = false;
      state.editable.data = null;
    });
  },
});

export default todosSlicer.reducer;
