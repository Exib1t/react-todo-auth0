import { TaskType } from "../components/TaskControls";

class TodosApi {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getData() {
    return fetch(this.baseUrl).then((res) => res.json());
  }

  getDataByUserId(userId: string) {
    return fetch(this.baseUrl + `?userId=${userId}`).then((res) => res.json());
  }

  postData(data: TaskType) {
    return fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  putData(data: TaskType) {
    return fetch(this.baseUrl + data.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteData(id: number) {
    return fetch(this.baseUrl + id, {
      method: "DELETE",
    });
  }
}

export const todosApi = new TodosApi(
  "https://633193633ea4956cfb61d6e0.mockapi.io/api/steam/todos/"
);
