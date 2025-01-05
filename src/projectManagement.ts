import { TodoistApi } from '@doist/todoist-api-typescript';

export async function createProject(name: string, options?: {
  color?: string;
  parentId?: string;
  order?: number;
  favorite?: boolean;
}) {
  try {
    const api = new TodoistApi(process.env.TODOIST_API_TOKEN);
    return await api.addProject({
      name,
      ...options
    });
  } catch (error) {
    console.error('Failed to create project:', error);
    throw error;
  }
}

export async function getProjects() {
  try {
    const api = new TodoistApi(process.env.TODOIST_API_TOKEN);
    return await api.getProjects();
  } catch (error) {
    console.error('Failed to get projects:', error);
    throw error;
  }
}

export async function updateProject(id: string, data: {
  name?: string;
  color?: string;
  favorite?: boolean;
}) {
  try {
    const api = new TodoistApi(process.env.TODOIST_API_TOKEN);
    return await api.updateProject(id, data);
  } catch (error) {
    console.error('Failed to update project:', error);
    throw error;
  }
}

export async function deleteProject(id: string) {
  try {
    const api = new TodoistApi(process.env.TODOIST_API_TOKEN);
    return await api.deleteProject(id);
  } catch (error) {
    console.error('Failed to delete project:', error);
    throw error;
  }
}