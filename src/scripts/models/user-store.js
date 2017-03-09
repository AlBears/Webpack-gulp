import _ from "lodash";
import { User } from './user';

const _users = Symbol('users');

export class UserStore {
  get users() { return this[ _users ].slice(); }

  constructor() {
    this[_users] = [
      new User(1, "John", "Lalala"),
      new User(2, "Peter", "Smth")
    ];
  }

  add(first, last) {
    const nextId = _.max(this[_users], u => u.id).id + 1;
    const user = new User(nextId, first, last);
    this[_users].push(user);
    return user;
  }

  remove(id) {
    _.remove(this[_users], u => u.id == id);
  }
}
