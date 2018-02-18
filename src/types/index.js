// @flow

export type Task = {
  title: string,
}

export type Project = {
  id: number,
  title: string,
  tasks: Array<Task>,
}

export type ProjectPressHandler = (id: number) => void
