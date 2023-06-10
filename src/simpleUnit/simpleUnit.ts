export const sum = (a: number, b: number) => a + b;

export const getUserName = (email: string) => {
  if (email.split("@").length !== 2)
    throw new Error("올바른 이메일 형식이 아닙니다.");

  return email.split("@")[0];
};

export const getUser = (name: string, age: number) => ({ name, age });
