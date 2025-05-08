<div align='center'>

# TypeScript Blog
</div>

## 1. What are some differences between `interfaces` and `types` in TypeScript?

both `interface` and `type` can be used to describe the shape of an object, but there are some key differences between them. Here's a breakdown:

### ✅ 1. Extension / Inheritance

**Interface:** Supports extension via `extends`, including multiple interfaces.

```ts
interface A { x: number }
interface B extends A { y: number }
```

**Type**: Supports extension via intersections `(&)`.

```ts
type A = { x: number };
type B = A & { y: number };
```

### ✅ 2. Declaration Merging

**Interface**: Can be `merged` if defined multiple times.

```ts
interface User { name: string }
interface User { age: number }

const u: User = { name: "John", age: 30 };
```

**Type:** Cannot be re-declared. Will cause an error.


### ✅ 3. Use Cases Beyond Objects

**Type:** More flexible. Can represent primitive types, unions, tuples, etc.

```ts
type ID = string | number;
type Pair = [string, number];
```

**Interface:** Only used for describing object shapes or class contracts.

### ✅ 4. Implements with Classes

**Interface:** Commonly used with implements in classes.

```ts
interface Printable {
  print(): void;
}

class Report implements Printable {
  print() {
    console.log("Printing...");
  }
}
```

**Type:** Not typically used with implements, though possible with object types.

### ✅ 5. Readability & Community Convention

- Use `interface` for **object structures** (especially public APIs and OOP).
- Use `type` for **complex compositions**, unions, tuples, and primitives.


### Summary

| Feature                | `interface`               | `type`                                 |
|------------------------|---------------------------|-----------------------------------------|
| Object shape           | ✅ Yes                    | ✅ Yes                                  |
| Union / Tuple / Alias  | ❌ No                     | ✅ Yes                                  |
| Declaration merging    | ✅ Yes                    | ❌ No                                   |
| Implements in class    | ✅ Yes                    | ✅ (only for object types)              |
| Extending              | ✅ via `extends`          | ✅ via intersection (`&`)               |



<br>


## 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

The `keyof` keyword in TypeScript is used to create a ***union type of all the property names (keys)*** of a given object type. It is particularly useful when you want to work with the keys of a type in a type-safe way.

### 🔹 Use Case 

It ensures you're only using valid keys of an object type, often useful in **generics, utility functions, or mapped types.**

### ✅ Example

```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "isStudent"
```

Now you can use it like this:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

const age = getProperty(person, "age");       // Type: number
const isStudent = getProperty(person, "isStudent"); // Type: boolean
```

### 📌 Summary

- `keyof` is a **type operator** that extracts the **keys** of a type as a union.
- Helps in **creating generic, type-safe functions.**
- Often used with `T[K]` **index access.**