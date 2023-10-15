import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1111' }),
  endpoints: (builder) => ({
    fetchTodoGet: builder.query('tasks', () => 'tasks'),
    fetchAddTask: builder.mutation('addTask', (newTask) => ({
      url: '/tasks',
      method: 'POST',
      body: newTask,
    })),
    fetchTaskRemove: builder.mutation('removeTask', (id) => ({
      url: `/tasks/${id}`,
      method: 'DELETE',
    })),
    fetchAllTaskARemove: builder.mutation('removeAllTasks', () => ({
      url: '/tasks',
      method: 'DELETE',
    })),
  }),
});

export const {
  useFetchTodoGetQuery,
  useFetchAddTaskMutation,
  useFetchTaskRemoveMutation,
  useFetchAllTaskARemoveMutation,
} = todoApi;
