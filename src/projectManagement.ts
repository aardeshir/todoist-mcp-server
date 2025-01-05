{
  "content": "import { TodoistApi } from '@doist/todoist-api-typescript';\n\nexport async function createProject(name: string, options?: {\n  color?: string;\n  parentId?: string;\n  order?: number;\n  favorite?: boolean;\n}) {\n  try {\n    const api = new TodoistApi(process.env.TODOIST_API_TOKEN);\n    return await api.addProject({\n      name,\n      ...options\n    });\n  } catch (error) {\n    console.error('Failed to create project:', error);\n    throw error;\n  }\n}\n",
  "encoding": "utf-8"
}