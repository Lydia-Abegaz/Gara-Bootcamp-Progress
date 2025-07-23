// Define a TypeScript interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Create a class that uses the User interface
class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  listUsers(): void {
    this.users.forEach((user) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  }
}

// Instantiate and use the class
const manager = new UserManager();

manager.addUser({ id: 1, name: "Lidia Aliso", email: "lidia@example.com" });
manager.addUser({ id: 2, name: "Alex", email: "alex@example.com" });

manager.listUsers();
