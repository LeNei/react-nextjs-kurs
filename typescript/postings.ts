type Posting = {
  id: number;
  title: string;
  text: string;
  likes: number;
};

enum SortingOptions {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}

class User {
  name: string;
  private postings: Posting[];

  constructor(name: string, postings: Posting[] = []) {
    this.name = name;
    this.postings = postings;
  }

  addPost(title: string, text: string) {
    this.postings.push({
      id: this.postings.length,
      title,
      text,
      likes: 0,
    });
  }

  addLike(id: number) {
    const index = this.postings.findIndex((post) => post.id === id);
    if (index === -1) {
      throw new Error("Invalid id");
    }
    this.postings[index].likes = this.postings[index].likes + 1;
  }

  getPosts(filter: SortingOptions = SortingOptions.NONE): Posting[] {
    switch (filter) {
      case SortingOptions.ASC:
        return this.postings.sort((a, b) => a.likes - b.likes);
      case SortingOptions.DESC:
        return this.postings.sort((a, b) => b.likes - a.likes);
      case SortingOptions.NONE:
        return this.postings;
    }
  }
}

class UserList {
  private users: User[];

  constructor(users: User[] = []) {
    this.users = users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUser(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }
}

const user = new User("Leon");
user.addPost("Typescript", "Ist wichtig");
user.addPost("Typescript", "Ist wichtig");
user.addPost("Typescript", "Ist wichtig");

user.addLike(1);
user.addLike(1);
user.addLike(0);

console.log(user.getPosts(SortingOptions.DESC));

const user2 = new User("Bo");
user2.addPost("Typescript", "Ist wichtig");
user2.addPost("Typescript", "Ist wichtig");
user2.addPost("Typescript", "Ist wichtig");

user2.addLike(2);
user2.addLike(2);
user2.addLike(0);

const userList = new UserList([user]);
userList.addUser(user2);

console.log(userList.getUser("Bo"));
