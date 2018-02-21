export class Todo {
  id: number;
  title: String = '';
  complete: Boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
