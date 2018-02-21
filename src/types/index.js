// @flow

export type Task = {
  id: number,
  title: string,
}

export type Project = {
  id: number,
  title: string,
  tasks: Array<Task>,
  color?: string,
}

export type ProjectPressHandler = (id: number) => void
